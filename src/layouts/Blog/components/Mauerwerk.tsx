/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Img from 'gatsby-image';
import { Grid } from 'mauerwerk';
import { BlogLink } from './BlogLink';
import { css } from 'styled-components';
import MaxWidthLayout from '../layouts/MaxWidth';
import { SM, LG } from '@zendeskgarden/react-typography';
import { StyledSectionHeader } from './SectionCallout';

const MauerwerkLink: React.FC<{
  group: string;
  title: string;
  url: string;
  description: string;
  splash: string;
  images: any;
}> = ({ group, title, url, description, splash, images }) => {
  const splashFile = splash.replace(/^.*[\\/]/u, '');
  const image = images.find(edge => edge.node.fluid.src.includes(splashFile));

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100%;
      `}
    >
      <Img
        fluid={image.node.fluid}
        alt=""
        imgStyle={{
          width: 350,
          minWidth: '100%',
          height: 266,
          minHeight: '100%',
          maxHeight: '100%'
        }}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        `}
      >
        <StyledSectionHeader
          css={css`
            margin-top: ${p => p.theme.space.xs};
          `}
        >
          {group}
        </StyledSectionHeader>
        <LG
          tag="h3"
          css={css`
            margin-bottom: ${p => p.theme.space.xs};
          `}
        >
          {title}
        </LG>
        <SM
          tag="h3"
          css={css`
            margin-bottom: ${p => p.theme.space.xs};
          `}
        >
          {description}
        </SM>
        <BlogLink to={url}>Read </BlogLink>
      </div>
    </div>
  );
};

export const Mauerwerk: React.FC<{
  navs: Record<string, unknown>;
  images: any;
}> = ({ navs, images }) => {
  return (
    <MaxWidthLayout>
      <Grid
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={navs}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={d => d.url}
        // Can be a fixed value or an individual data accessor
        heights={d => d.height}
        // Removes the possibility to scroll away from a maximized element
        lockScroll
        // Space between elements
        margin={40}
        // Number of columns
        columns={2}
      >
        {(nav, maximized) => (
          <div>
            {!maximized && (
              <MauerwerkLink
                group={nav.group}
                title={nav.title}
                url={nav.url}
                description={nav.description}
                splash={nav.splash}
                images={images}
              />
            )}
          </div>
        )}
      </Grid>
    </MaxWidthLayout>
  );
};
