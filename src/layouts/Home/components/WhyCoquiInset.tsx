/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { getColor } from '@zendeskgarden/react-theming';
import { LG, MD } from '@zendeskgarden/react-typography';
import { ReactComponent as ArrowStroke } from '@zendeskgarden/svg-icons/src/16/arrow-left-stroke.svg';
import { Link } from 'gatsby';
import React from 'react';
import { css } from 'styled-components';
import { HorizontalRule } from './HorizontalRule';

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
        border-radius: 4px;
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
            margin-bottom: 24px;
          `}
        >
          <Col>
            <LG isBold>{title}</LG>
          </Col>
        </Row>
        <Row
          alignItems="center"
          css={css`
            margin-bottom: ${p => p.theme.space.xl};
            max-height: 60px;
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
