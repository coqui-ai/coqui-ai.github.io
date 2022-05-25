/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { headerStyling, textStyling } from './Styles';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { getColor } from '@zendeskgarden/react-theming';
import { Span, LG, XL, XXXL } from '@zendeskgarden/react-typography';
import { Well, Title, Paragraph } from '@zendeskgarden/react-notifications';
import { ReactComponent as CheckIcon } from '@zendeskgarden/svg-icons/src/16/check-circle-fill.svg';

const CheckIconStyled = styled(Span)`
  color: ${p => getColor('green', 600, p.theme)};
`;

export const Enterprise: React.FC = () => {
  const patternsImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/pricing/enterprise.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 880) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  );

  return (
    <Well isFloating>
      <Title>
        <XXXL
          isBold
          css={css`
            ${headerStyling}
            margin-bottom: ${p => p.theme.space.lg};
            text-align: center;
          `}
        >
          Enterprise
        </XXXL>
      </Title>
      <Img
        fluid={patternsImage.file.childImageSharp.fluid}
        imgStyle={{ width: 880, maxWidth: '100%', height: 533, maxHeight: '100%' }}
        css={css`
          margin-bottom: ${p => p.theme.space.lg};
        `}
      />
      <Title>
        <XL
          isBold
          css={css`
            ${textStyling}
            margin-bottom: ${p => p.theme.space.lg};
            text-align: center;
          `}
        >
          Contact Us
        </XL>
      </Title>
      <Paragraph
        css={css`
          ${textStyling}
          margin-bottom: ${p => p.theme.space.lg};
        `}
      >
        <LG>
          The same lightning-fast, quality voice cloning in Pro, but with bespoke features required
          for the enterprise.
        </LG>
      </Paragraph>
      <Span>
        <LG>
          <CheckIconStyled>
            <CheckIcon />
          </CheckIconStyled>{' '}
          Everything in Pro plus…
        </LG>
        <LG>
          <CheckIconStyled>
            <CheckIcon />
          </CheckIconStyled>{' '}
          Unlimited number of saved voices
        </LG>
        <LG>
          <CheckIconStyled>
            <CheckIcon />
          </CheckIconStyled>{' '}
          Unlimited number of saved audio clips
        </LG>
        <LG
          css={css`
            ${textStyling}
            margin-bottom: ${p => p.theme.space.lg};
          `}
        >
          <CheckIconStyled>
            <CheckIcon />
          </CheckIconStyled>{' '}
          Unlimited audio clip downloads
        </LG>
      </Span>
      <Paragraph>
        <LG
          isBold
          css={css`
            ${textStyling}
            margin-bottom: ${p => p.theme.space.md};
            text-align: center;
          `}
        >
          Sign up for the upcoming launch!
        </LG>
      </Paragraph>
      <Row>
        <Col textAlign="center">
          <Link to="/signup?tags=4282583">
            <Button
              isStretched
              css={css`
                margin-bottom: ${p => p.theme.space.md};
              `}
            >
              Sign Up!
            </Button>
          </Link>
        </Col>
      </Row>
    </Well>
  );
};
