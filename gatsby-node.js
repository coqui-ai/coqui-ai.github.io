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

exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
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

  if (stage === 'build-html' || stage === 'develop-html') {
    config.module.rules = [
      {
        test: /useAudioRecorder/,
        use: loaders.null()
      },
      {
        test: /wavesurfer\.js/,
        use: loaders.null()
      },
      ...config.module.rules
    ];
  }

  actions.replaceWebpackConfig(config);
};
