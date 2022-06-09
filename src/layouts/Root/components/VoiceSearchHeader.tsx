/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useContext } from 'react';
import Img from 'gatsby-image';
// import { Field, Input } from '@zendeskgarden/react-forms';
import { Item, Menu, Dropdown, Trigger } from '@zendeskgarden/react-dropdowns';
import { navigate, Link, graphql, useStaticQuery } from 'gatsby';

import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

import styled, { css } from 'styled-components';
import { ProfileContext } from '../../../../utils/auth';
import { ArrowDown2 } from 'iconsax-react';
import { OrangeButton } from './Styled';
import { VoicesDropdown } from './VoicesDropdown';

const HeaderRow = styled(Row)`
  border-bottom: 1px solid #c2c8cc80;
  height: 84px;
`;

export const UserMenu = () => {
  const [rotated, setRotated] = useState<boolean | undefined>();
  const profile = useContext(ProfileContext);

  return (
    <Dropdown
      onSelect={item => navigate(item)}
      onStateChange={options => Object.hasOwn(options, 'isOpen') && setRotated(options.isOpen)}
    >
      <Trigger>
        <Button
          isBasic
          css={css`
            color: #000;
          `}
        >
          {profile.email}
          <Button.EndIcon isRotated={rotated}>
            <ArrowDown2 size="32" color="#FF8A65" variant="Bold" />
          </Button.EndIcon>
        </Button>
      </Trigger>
      <Menu>
        {/* <Item value="cactus">Edit Profile</Item> */}
        <Item value="/voices">My Voices</Item>
        <Item value="/auth/signout">Log Out</Item>
      </Menu>
    </Dropdown>
  );
};

export const VoiceSearchHeader = () => {
  const logoWordmarkImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/general/logo-wordmark.png" }) {
          childImageSharp {
            fixed(height: 25) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  );

  return (
    <Grid>
      <HeaderRow alignItems="center">
        <Col
          size={2}
          css={`
            height: 25px;
          `}
        >
          <Link to="/">
            <Img
              css={`
                margin-left: 50px;
              `}
              fixed={logoWordmarkImage.file.childImageSharp.fixed}
            />
          </Link>
        </Col>
        <Col>
          <VoicesDropdown
            onSelect={voice => {
              navigate(`/voices/${voice.id}/synthesize`);
            }}
          />
        </Col>
        <Col size={2}>
          <OrangeButton onClick={() => navigate('/voices/create')}>Create new voice</OrangeButton>
        </Col>

        <Col size={2}><UserMenu /></Col>
      </HeaderRow>
    </Grid>
  );
};
