/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { AudioPlayer } from './AudioPlayer';
import { getColor } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

interface ISample {
  title: string;
  originalSrc: string;
  synthesizedSrc: string;
}

const samples: ISample[] = [
  {
    title: 'Mathew',
    originalSrc: 'https://coqui-ai-public-data.s3.amazonaws.com/website/audio/mathew-original.wav',
    synthesizedSrc:
      'https://coqui-ai-public-data.s3.amazonaws.com/website/audio/mathew-synthesized.wav'
  },
  {
    title: 'Prisha',
    originalSrc: 'https://coqui-ai-public-data.s3.amazonaws.com/website/audio/prisha-original.wav',
    synthesizedSrc:
      'https://coqui-ai-public-data.s3.amazonaws.com/website/audio/prisha-synthesized.wav'
  },
  {
    title: 'Peter',
    originalSrc: 'https://coqui-ai-public-data.s3.amazonaws.com/website/audio/peter-original.wav',
    synthesizedSrc:
      'https://coqui-ai-public-data.s3.amazonaws.com/website/audio/peter-synthesized.wav'
  }
];

export const TTSModelDemo: React.FC = () => {
  return (
    <Grid gutters={false}>
      {samples.map((sample, index) => {
        return (
          <Row
            key={index}
            alignItems="center"
            css={css`
              margin-bottom: ${p => p.theme.space.xl};
              border-radius: 20px;
              background-color: ${p => getColor('green', 500, p.theme)};
            `}
          >
            {/* Col w/Original audio */}
            <Col
              lg={6}
              md={12}
              css={css`
                border-radius: 20px 0 20px 20px;
                background-color: ${p => getColor('yellow', 200, p.theme)};
              `}
            >
              <Grid gutters={false}>
                {/* Inner Row w/Original audio */}
                <Row
                  alignItems="center"
                  css={css`
                    margin: 16px;
                    border-radius: 10px;
                    background-color: ${p => getColor('kale', 600, p.theme)};
                  `}
                >
                  <Col>
                    <Grid gutters={false}>
                      <Row alignItems="center">
                        <Col>
                          <AudioPlayer
                            title={sample.title}
                            isOriginal
                            audioSrc={sample.originalSrc}
                          />
                        </Col>
                      </Row>
                    </Grid>
                  </Col>
                </Row>
              </Grid>
            </Col>
            {/* Col w/Synthesized audio */}
            <Col lg={6} md={12}>
              <Grid gutters={false}>
                {/* Inner Row w/Synthesized audio */}
                <Row
                  alignItems="center"
                  css={css`
                    margin: 16px;
                    border-radius: 10px;
                    background-color: #fff;
                  `}
                >
                  <Col>
                    <Grid gutters={false}>
                      <Row alignItems="center">
                        <Col>
                          <AudioPlayer title={sample.title} audioSrc={sample.synthesizedSrc} />
                        </Col>
                      </Row>
                    </Grid>
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        );
      })}
    </Grid>
  );
};
