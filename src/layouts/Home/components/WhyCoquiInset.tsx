/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Link } from 'gatsby';
import { css } from 'styled-components';
import { HorizontalRule } from './HorizontalRule';
import { getColor } from '@zendeskgarden/react-theming';
import { XL, MD } from '@zendeskgarden/react-typography';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as ArrowStroke } from '@zendeskgarden/svg-icons/src/16/arrow-left-stroke.svg';

export const WhyCoquiInset: React.FC<{
  title: string;
  text: string;
  to: string;
}> = ({ title, text, to }) => {
  return (
    <Grid
      gutters={false}
      css={css`
        margin-bottom: ${p => p.theme.space.xxl};
        background-color: ${p => getColor('yellow', 100, p.theme)};
      `}
    >
      <div
        css={css`
          padding: 33px;
        `}
      >
        <Row
          alignItems="center"
          css={css`
            margin-bottom: ${p => p.theme.space.lg};
          `}
        >
          <Col>
            <XL isBold>{title}</XL>
          </Col>
        </Row>
        <Row
          alignItems="center"
          css={css`
            margin-bottom: ${p => p.theme.space.xl};
          `}
        >
          <Col>
            <MD>{text}</MD>
          </Col>
        </Row>
        <Row alignItems="center">
          <Col>
            <HorizontalRule />
            <MD>
              <Link
                to={to}
                css={css`
                  color: ${p => getColor('kale', 500, p.theme)};
                `}
              >
                Learn More{' '}
                <ArrowStroke
                  css={css`
                    transform: scale(-1, 1);
                    transform-origin: center;
                    vertical-align: text-top;
                  `}
                />
              </Link>
            </MD>
          </Col>
        </Row>
      </div>
    </Grid>
  );
};
