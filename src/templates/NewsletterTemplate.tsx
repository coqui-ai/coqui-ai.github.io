/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { PageProps } from 'gatsby';
import RootLayout from 'layouts/Root';
import { SidebarLayout } from 'layouts/Sidebar';
import TitledLayout from 'layouts/Titled';
import SEO from 'components/SEO';
import { MarkdownProvider } from 'components/MarkdownProvider';
import { IPageData, IPageContext } from './types';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';

const NewsletterLayoutTemplate: React.FC<PageProps<IPageData, IPageContext>> = ({
  children,
  data,
  pageContext
}) => {
  const { mdx } = data;

  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout>
      <SEO
        title={`${pageContext.frontmatter.title} / Newsletter`}
        description={pageContext.frontmatter.description || mdx.excerpt}
      />
      <SidebarLayout>
        <TitledLayout
          title={pageContext.frontmatter.title}
          subtitle={pageContext.frontmatter.description}
          name={pageContext.frontmatter.name}
          picture={pageContext.frontmatter.picture}
          date={pageContext.frontmatter.date}
          toc={mdx.tableOfContents.items}
        >
          <MarkdownProvider>{children}</MarkdownProvider>
        </TitledLayout>
      </SidebarLayout>
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default NewsletterLayoutTemplate;
