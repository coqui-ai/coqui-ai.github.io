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
                Make the impossible possible and the painful painless with Coqui
              </LG>
            </Col>
          </Row>
          <Row alignItems="center">
            <Col lg={1} md={1} sm={0} />
            <Col lg={3} md={3} sm={13}>
              <WhyCoquiInset
                title="Video Games"
                text="Experience the immediacy of script-to-performance. With Coqui text-to-speech production times go from months to minutes."
                to="/video-games"
              />
            </Col>
            <Col lg={1} md={1} sm={0} />
            <Col lg={3} md={3} sm={13}>
              <WhyCoquiInset
                title="Post Production"
                text="With Coqui, post is a pleasure. Effortlessly clone the voices of your talent and have the clone handle the problems in post."
                to="/post-production"
              />
            </Col>
            <Col lg={1} md={1} sm={0} />
            <Col lg={3} md={3} sm={13}>
              <WhyCoquiInset
                title="Dubbing"
                text="With Coqui, dubbing is a delight. Effortlessly clone the voice of your talent into another language and let the clone do the dub."
                to="/dubbing"
              />
            </Col>
            <Col lg={1} md={1} sm={0} />
          </Row>
        </Grid>
      </StandardWidthLayout>
    </div>
  );
};
