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
import { mediaQuery } from '@zendeskgarden/react-theming';
import { ProfileContext } from 'utils/auth';
import { ArrowDown2 } from 'iconsax-react';
import { OrangeButton } from './Styled';
import { VoicesDropdown } from './VoicesDropdown';

const HeaderRow = styled(Row)`
  border-bottom: 1px solid #c2c8cc80;
  height: 84px;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    justify-content: space-between;
  }
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
            width: 100%;
            ${p => mediaQuery('down', 'sm', p.theme)} {
              padding: 0;
              border-left: 1px solid #C2C8CC;
              border-radius: 0px;
              margin-left: 8px;
            }
          `}
        >
          <span
            css={css`
              ${p => mediaQuery('down', 'sm', p.theme)} {
                display: none;
              }
              overflow: hidden;
              text-overflow: ellipsis;
            `}
          >
            {profile.email}
          </span>
          <Button.EndIcon isRotated={rotated}>
            <ArrowDown2
              size="32"
              color="#FF8A65"
              variant="Bold"
              css={css`
                ${p => mediaQuery('down', 'sm', p.theme)} {
                  margin-left: 4px;
                }
              `}
            />
          </Button.EndIcon>
        </Button>
      </Trigger>
      <Menu
        css={css`
          ${p => mediaQuery('down', 'sm', p.theme)} {
            position: absolute !important;
            left: -142px;
          }
        `}
      >
        {/* <Item value="cactus">Edit Profile</Item> */}
        <Item value="/voices">My Voices</Item>
        <Item value="/auth/signout">Log Out</Item>
      </Menu>
    </Dropdown>
  );
};

export const HomeNavUserMenu = props => {
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
          css={`
            color: #000;
            width: 100%;
          `}
        >
          <span
            css={css`
              overflow: hidden;
              text-overflow: ellipsis;
            `}
          >
            {profile.email}
          </span>
          <Button.EndIcon isRotated={rotated}>
            <ArrowDown2
              size="32"
              color="#FF8A65"
              variant="Bold"
              css={css`
                ${p => mediaQuery('down', 'sm', p.theme)} {
                  margin-left: 4px;
                }
              `}
            />
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

                ${p => mediaQuery('down', 'sm', p.theme)} {
                  margin-left: 22px;
                }
              `}
              fixed={logoWordmarkImage.file.childImageSharp.fixed}
            />
          </Link>
        </Col>
        <Col
          css={css`
            ${p => mediaQuery('down', 'sm', p.theme)} {
              display: none;
            }
          `}
        >
          <VoicesDropdown
            onSelect={voice => {
              navigate(`/voices/${voice.id}/synthesize`);
            }}
          />
        </Col>
        <Col
          size={2}
          css={css`
            ${p => mediaQuery('down', 'sm', p.theme)} {
              max-width: unset;
              margin-right: 10px;
              display: flex;
              align-items: center;
            }
          `}
        >
          <OrangeButton
            onClick={() => navigate('/voices/create')}
            css="width: 90%;"
          >
            Create new voice
          </OrangeButton>
          <div
            css={css`
                ${p => mediaQuery('up', 'md', p.theme)} {
                  display: none;
                }
                width: 16px;
            `}
          >
            <UserMenu/>
          </div>
        </Col>

        <Col
          size={3}
          css={css`
            ${p => mediaQuery('down', 'sm', p.theme)} {
              display: none;
            }
          `}
        >
          <UserMenu />
        </Col>
      </HeaderRow>
    </Grid>
  );
};
