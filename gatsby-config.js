/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const envalid = require('envalid');
const fs = require('fs');
const path = require('path');
const { tagNameMap } = require('./src/layouts/Models/components/TagNameMap');

require('dotenv').config();
envalid.cleanEnv(process.env, { ABSTRACT_TOKEN: envalid.str() });

const capitalize = s => {
  if (typeof s !== 'string') {
    return '';
  }

  return s.charAt(0).toUpperCase() + s.slice(1);
};

module.exports = {
  siteMetadata: {
    title: 'Coqui',
    siteUrl: 'https://coqui.ai',
    description: `Coqui, Freeing Speech.`
  },
  plugins: [
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.REACT_APP_GITHUB_KEY,
        graphQLQuery: `
          query {
             repository(owner: "coqui-ai", name: "STT-models") {
                 releases(first: 100) {
                     nodes {
                         description
                         name
                         publishedAt
                         shortDescriptionHTML
                         tagName
                         url
                         releaseAssets(first: 15) {
                             nodes {
                                 contentType
                                 downloadCount
                                 downloadUrl
                                 name
                                 size
                                 url
                             }
                         }
                     }
                 }
             }
          }
          `
      }
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: 'sTTModels',
        engine: 'flexsearch',
        query: `
          {
            allGithubData {
              nodes {
                data {
                  repository {
                    releases {
                      nodes {
                        name
                        tagName
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        ref: 'tagName',
        index: ['name', 'language', 'creator', 'sttVersion', 'modelVersion'],
        store: [
          'name',
          'language',
          'creator',
          'creatorURL',
          'sttVersion',
          'modelVersion',
          'tagName'
        ],
        normalizer: ({ data }) =>
          data.allGithubData.nodes[0].data.repository.releases.nodes.map(node => ({
            name: node.name,
            language: capitalize(node.tagName.split('/')[0]),
            creator: tagNameMap[node.tagName][0],
            creatorURL: tagNameMap[node.tagName][1],
            sttVersion: 'Coqui STT v0.9.3',
            modelVersion: node.tagName.split('/')[2],
            tagName: node.tagName
          }))
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: path.join(__dirname, 'content/news')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `job`,
        path: path.join(__dirname, 'src/pages/job')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: path.join(__dirname, 'src/pages/blog')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsletter`,
        path: path.join(__dirname, 'src/pages/newsletter')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svg-icons`,
        path: path.join(__dirname, 'node_modules/@zendeskgarden/svg-icons/src'),
        ignore: ['**/*.!(svg)']
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, './src/data/')
      }
    },
    'gatsby-transformer-remark',
    'gatsby-source-news',
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-garden-svg`,
    `gatsby-plugin-react-helmet`,
    `gatsby-algolia-docsearch`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90
      }
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          job: require.resolve('./src/templates/JobTemplate.tsx'),
          blog: require.resolve('./src/templates/BlogTemplate.tsx'),
          newsletter: require.resolve('./src/templates/NewsletterTemplate.tsx')
        },
        gatsbyRemarkPlugins: [
          require.resolve('./plugins/gatsby-remark-abstract-assets'),
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              disableBgImageOnAlpha: true
            }
          },
          `gatsby-remark-static-images`,
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: fs
                .readFileSync(
                  path.join(
                    __dirname,
                    'node_modules/@zendeskgarden/svg-icons/src/16/link-stroke.svg'
                  )
                )
                .toString('utf-8')
                .trim()
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        layouts: path.join(__dirname, 'src/layouts'),
        utils: path.join(__dirname, 'src/utils')
      }
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: true,
        svgoConfig: {
          plugins: [
            { removeViewBox: false },
            { cleanupIDs: true },
            {
              addAttributesToSVGElement: {
                attributes: [{ focusable: false }, { role: 'presentation' }]
              }
            }
          ]
        }
      }
    }
  ]
};
