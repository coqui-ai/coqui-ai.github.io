/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { SignUpForm } from './SignUpForm';
import SignUpWidthLayout from './SignUpWidth';
import { headerStyling, textStyling } from './Styles';
import { Well } from '@zendeskgarden/react-notifications';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { XL, XXXL } from '@zendeskgarden/react-typography';

export const SignUp: React.FC = () => {
  return (
    <SignUpWidthLayout
      css={css`
        padding-top: ${p => p.theme.space.base * 50}px;
        padding-bottom: ${p => p.theme.space.base * 60}px;

        ${p => mediaQuery('down', 'md', p.theme)} {
          padding-top: ${p => p.theme.space.base * 25}px;
          padding-bottom: ${p => p.theme.space.base * 30}px;
        }

        ${p => mediaQuery('down', 'sm', p.theme)} {
          padding-top: ${p => p.theme.space.base * 15}px;
          padding-bottom: ${p => p.theme.space.base * 18}px;
        }
      `}
    >
      <Well isFloating>
        <Grid
          gutters="lg"
          css={css`
            margin-top: ${p => p.theme.space.md};
            margin-bottom: ${p => p.theme.space.md};
          `}
        >
          <Row alignItems="center" justifyContent="center">
            <Col size={12} order={0}>
              <XXXL
                isBold
                css={css`
                  text-align: center;
                  ${headerStyling}
                `}
              >
                Sign Up!
              </XXXL>
            </Col>
          </Row>
          <Row alignItems="center" justifyContent="center">
            <Col size={12} order={0}>
              <XL
                isBold
                css={css`
                  text-align: center;
                  ${textStyling}
                `}
              >
                Sign Up and Stay in the Loop
              </XL>
            </Col>
          </Row>
          <Row alignItems="center" justifyContent="center">
            <Col size={12} order={0}>
              <SignUpForm url="https://coqui.us1.list-manage.com/subscribe/post?u=6faea2f1f19c814566173ffb0&amp;id=36493a0abf" />
            </Col>
          </Row>
        </Grid>
      </Well>
    </SignUpWidthLayout>
  );
};
