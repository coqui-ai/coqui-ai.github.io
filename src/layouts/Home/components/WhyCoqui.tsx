/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { getColor } from '@zendeskgarden/react-theming';
import { LG } from '@zendeskgarden/react-typography';
import StandardWidthLayout from 'layouts/StandardWidth';
import React from 'react';
import { headerStyling } from './Styles';
import { WhyCoquiInset } from './WhyCoquiInset';

export const WhyCoqui: React.FC = () => {
  return (
    <div
      css={css`
        background-color: ${p => getColor('yellow', 600, p.theme)};
      `}
    >
      <StandardWidthLayout>
        <Grid columns={13} gutters={false}>
          <Row alignItems="center">
            <Col
              css={css`
                ${headerStyling}
                margin-top: ${p => p.theme.space.xxl};
                text-align: center;
                color: #fff;
              `}
            >
              Why Coqui?
              <span role="img" aria-label="frog">
                🐸
              </span>
            </Col>
          </Row>
          <Row
            alignItems="center"
            css={css`
              margin-bottom: ${p => p.theme.space.xxl};
            `}
          >
            <Col
              css={css`
                ${headerStyling}
                text-align: center;
              `}
            >
              <LG
                css={css`
                  text-align: center;
                  color: #fff;
                `}
              >
                Discover how Coqui Studio can help you streamline your workflow
              </LG>
            </Col>
          </Row>
          <Row alignItems="center">
            <Col lg={1} md={1} sm={0} />
            <Col lg={3} md={3} sm={13}>
              <WhyCoquiInset
                title="Pay for what you use"
                text="Get started with 30 free minutes, top up when you need to."
                to="/pricing"
              />
            </Col>
            <Col lg={1} md={1} sm={0} />
            <Col lg={3} md={3} sm={13}>
              <WhyCoquiInset
                title="Instant Voice Cloning"
                text="Clone any voice with 3 seconds of audio and start directing them."
                to="/pricing"
              />
            </Col>
            <Col lg={1} md={1} sm={0} />
            <Col lg={3} md={3} sm={13}>
              <WhyCoquiInset
                title="Dubbing"
                text="Take full control of your AI voices. Adjust pitch, loudness and more, for each sentence, word or character."
                to="/pricing"
              />
            </Col>
            <Col lg={1} md={1} sm={0} />
          </Row>
        </Grid>
      </StandardWidthLayout>
    </div>
  );
};
