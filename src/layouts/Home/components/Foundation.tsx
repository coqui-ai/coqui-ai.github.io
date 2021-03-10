/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { LG } from '@zendeskgarden/react-typography';
import MaxWidthLayout from 'layouts/MaxWidth';
import { SectionCallout, StyledSectionHeader } from './SectionCallout';
import { HomeLink } from './HomeLink';

const FoundationLink: React.FC<{
  group: string;
  title: string;
  image: any;
  url: string;
}> = ({ group, title, url, image }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <Img
      fluid={image.childImageSharp.fluid}
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
          margin-top: ${p => p.theme.space.md};
          margin-bottom: ${p => p.theme.space.xs};
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
      <HomeLink to={url}>
        Browse{' '}
        <span
          css={`
            text-transform: lowercase;
          `}
        >
          {group}
        </span>
      </HomeLink>
    </div>
  </div>
);

export const Foundation: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentImage: file(relativePath: { eq: "images/home/home-pillars-content.png" }) {
          childImageSharp {
            fluid(maxWidth: 350, traceSVG: { background: "#F6F4F4", color: "#228F67" }) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        componentsImage: file(relativePath: { eq: "images/home/home-pillars-design.png" }) {
          childImageSharp {
            fluid(maxWidth: 350, traceSVG: { background: "#EDE0CF", color: "#00363D" }) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        designImage: file(relativePath: { eq: "images/home/home-pillars-components.png" }) {
          childImageSharp {
            fluid(maxWidth: 350, traceSVG: { background: "#F6F4F4", color: "#00363D" }) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  );

  return (
    <MaxWidthLayout>
      <Grid
        gutters="lg"
        css={css`
          margin-bottom: ${p => p.theme.space.base * 20}px;
        `}
      >
        <Row>
          <Col
            sm={12}
            lg={4}
            css={css`
              margin-bottom: ${p => p.theme.space.xxl};
            `}
          >
            <SectionCallout
              section="Foundation"
              header="Foundations for freeing speech"
              description="Coqui provides the code, models, and data required to free speech technology."
              css={css`
                max-width: 380px;

                ${p => mediaQuery('down', 'md', p.theme)} {
                  max-width: 420px;
                }
              `}
            />
          </Col>
          <Col sm={12} lg={8}>
            <Row>
              <Col
                xs={12}
                sm={6}
                lg={4}
                css={css`
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <FoundationLink
                  group="Code"
                  title="STT + TTS code to build upon"
                  url="/code"
                  image={data.contentImage}
                />
              </Col>
              <Col
                xs={12}
                sm={6}
                lg={4}
                css={css`
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <FoundationLink
                  group="Models"
                  title="STT + TTS models to integrate"
                  url="/models"
                  image={data.componentsImage}
                />
              </Col>
              <Col
                xs={12}
                sm={6}
                lg={4}
                css={css`
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <FoundationLink
                  group="Data"
                  title="STT + TTS data with which to train"
                  url="/data"
                  image={data.designImage}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
