/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import { graphql } from 'gatsby';
import { SidebarLayout } from 'layouts/Sidebar';
import ModelCard from './components/ModelCard';
import React, { useEffect } from 'react';
import ModelDownload from './components/ModelDownload';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';

const ModelCardLayoutTemplate: React.FC = data => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout>
      <SEO
        title={`${data.pathContext.name} / Model`}
        description={`Model ${data.pathContext.name}`}
      />
      <SidebarLayout>
        <ModelCard data={data} />
        <ModelDownload data={data} />
      </SidebarLayout>
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default ModelCardLayoutTemplate;

export const pageQuery = graphql`
  query ModelCardBySlug {
    allGithubData {
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
`;
