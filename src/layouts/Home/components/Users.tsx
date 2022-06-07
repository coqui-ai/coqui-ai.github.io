/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { MD } from '@zendeskgarden/react-typography';
import StandardWidthLayout from 'layouts/StandardWidth';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';

const User: React.FC<{
  user: string;
  images: any;
}> = ({ user, images }) => {
  const image = images.find(edge => edge.node.fluid.src.includes(user));

  return (
    <Img
      fluid={image.node.fluid}
      alt="{user}"
      css={css`
        display: block;
        margin-right: auto;
        margin-left: auto;

        ${p => mediaQuery('up', 'md', p.theme)} {
          width: 100px;
        }

        ${p => mediaQuery('down', 'md', p.theme)} {
          width: 80px;
        }
      `}
    />
  );
};

export const Users: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp(filter: { fluid: { src: { regex: "/users-*/" } } }) {
          edges {
            node {
              id
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    `
  );

  return (
    <StandardWidthLayout>
      <Grid>
        <Row
          css={css`
            margin-bottom: ${p => p.theme.space.lg};
          `}
        >
          <Col>
            <MD
              css={css`
                text-align: center;
              `}
            >
              Used by
            </MD>
          </Col>
        </Row>
        <Row
          css={css`
            margin-bottom: ${p => p.theme.space.lg};
          `}
        >
          <Col
            orderLg={2}
            orderMd={4}
            orderSm={6}
            css={css`
              ${p => mediaQuery('down', 'sm', p.theme)} {
                margin-bottom: ${p => p.theme.space.lg};
              }
            `}
          >
            <User user="spotify" images={data.allImageSharp.edges} />
          </Col>
          <Col
            orderLg={2}
            orderMd={4}
            orderSm={6}
            css={css`
              ${p => mediaQuery('down', 'sm', p.theme)} {
                margin-bottom: ${p => p.theme.space.lg};
              }
            `}
          >
            <User user="amazon" images={data.allImageSharp.edges} />
          </Col>
          <Col
            orderLg={2}
            orderMd={4}
            orderSm={6}
            css={css`
              ${p => mediaQuery('down', 'sm', p.theme)} {
                margin-bottom: ${p => p.theme.space.lg};
              }
            `}
          >
            <User user="microsoft" images={data.allImageSharp.edges} />
          </Col>
          <Col orderLg={2} orderMd={4} orderSm={6}>
            <User user="google" images={data.allImageSharp.edges} />
          </Col>
          <Col orderLg={2} orderMd={4} orderSm={6}>
            <User user="apple" images={data.allImageSharp.edges} />
          </Col>
          <Col orderLg={2} orderMd={4} orderSm={6}>
            <User user="facebook" images={data.allImageSharp.edges} />
          </Col>
        </Row>
        <Row
          css={css`
            margin-bottom: ${p => p.theme.space.xxl};
          `}
        >
          <Col size={1} />
          <Col size={10}>
            <hr
              css={css`
                color: ${p => getColor('grey', 400, p.theme)};
              `}
            />
          </Col>
          <Col size={1} />
        </Row>
      </Grid>
    </StandardWidthLayout>
  );
};
