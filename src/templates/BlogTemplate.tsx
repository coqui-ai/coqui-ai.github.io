/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { PageProps } from 'gatsby';
import RootLayout from 'layouts/Root';
import { SidebarLayout } from 'layouts/Sidebar';
import TitledLayout from 'layouts/Titled';
import SEO from 'components/SEO';
import { MarkdownProvider } from 'components/MarkdownProvider';
import { IPageData, IPageContext } from './types';

const BlogLayoutTemplate: React.FC<PageProps<IPageData, IPageContext>> = ({
  children,
  data,
  pageContext
}) => {
  const { mdx } = data;

  useEffect(() => {
    ReactGA.initialize('UA-191579390-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <RootLayout>
      <SEO
        title={`${pageContext.frontmatter.title} / Blog`}
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
    </RootLayout>
  );
};

export default BlogLayoutTemplate;
