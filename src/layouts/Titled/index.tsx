/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { LG, MD } from '@zendeskgarden/react-typography';
import { Avatar } from '@zendeskgarden/react-avatars';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Subtitle } from './components/Subtitle';
import { TOCBlock, TOC, IHeading } from './components/TOC';
import { StyledH2, StyledHr } from 'components/MarkdownProvider/components/Typography';

const TitledLayout: React.FC<{
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  toc?: IHeading[];
}> = ({ children, title, subtitle, toc, name, picture, date }) => (
  <Grid>
    <Row>
      <Col lg={12} xl={9}>
        {title && <StyledH2>{title}</StyledH2>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {name && picture && date && (
          <div>
            <Avatar>
              <img alt="avatar" src={picture} />
            </Avatar>
            <LG>{name}</LG>
            <MD>{date}</MD>
          </div>
        )}
        <StyledHr />
        {toc && (
          <TOCBlock
            data={toc}
            css={css`
              ${p => mediaQuery('up', 'xl', p.theme)} {
                display: none;
              }
            `}
          />
        )}
        {children}
      </Col>
      <Col
        lg={12}
        xl={3}
        css={css`
          ${p => mediaQuery('down', 'lg', p.theme)} {
            display: none;
          }
        `}
      >
        {toc && <TOC data={toc} />}
      </Col>
    </Row>
  </Grid>
);

export default TitledLayout;
