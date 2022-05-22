/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const { sourceInstanceName } = getNode(node.parent);
    const slug = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: node.frontmatter.slug || slug
    });

    createNodeField({
      name: 'sourceInstanceName',
      node,
      value: sourceInstanceName
    });
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const componentExt = path.extname(page.component);

  if (componentExt === '.md' || componentExt === '.mdx') {
    deletePage(page);

    createPage({
      ...page,
      context: {
        ...page.context,
        fileAbsolutePath: page.component
      }
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const modelCardTemplate = require.resolve(`./src/templates/ModelCardTemplate.tsx`);

  const result = await graphql(`
    {
      allGithubData(limit: 100) {
        nodes {
          data {
            repository {
              releases {
                nodes {
                  description
                  name
                  tagName
                  releaseAssets {
                    nodes {
                      contentType
                      downloadUrl
                      name
                      size
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);

    return;
  }

  result.data.allGithubData.nodes[0].data.repository.releases.nodes.forEach(release => {
    createPage({
      path: release.tagName,
      component: modelCardTemplate,
      context: {
        ...release,
        slug: release.tagName
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();

  const exampleTranspileJsRule = config.module.rules.filter(
    rule => /node_modules/.test(rule.include) && String(rule.test) === String(/\.js$/)
  )[0];

  config.module.rules = [
    {
      ...exampleTranspileJsRule,
      include: v => /node_modules\/rxjs-interop/.test(v)
    },

    ...config.module.rules
  ];

  actions.replaceWebpackConfig(config);
};
