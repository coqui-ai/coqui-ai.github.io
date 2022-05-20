/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, useEffect, useMemo } from 'react';
import Img from 'gatsby-image';
import debounce from 'lodash.debounce';
// import { Field, Input } from '@zendeskgarden/react-forms';
import {
  Item,
  Menu,
  Field,
  Label,
  Dropdown,
  Combobox,
  Trigger
} from '@zendeskgarden/react-dropdowns';
import { navigate, Link } from 'gatsby';

import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { Button } from '@zendeskgarden/react-buttons';

import styled, { css, DefaultTheme } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { useProfile, Profile } from '../../../../utils/auth';
import { LG } from '@zendeskgarden/react-typography';
import { SearchNormal1, ArrowDown2 } from 'iconsax-react';
import { OrangeButton } from './Styled';
import { gql, useLazyQuery } from '@apollo/client';

const HeaderRow = styled(Row)`
  height: 84px;
  border-bottom: 1px solid #c2c8cc80;
`;

const VOICE_SEARCH = gql`
  query voiceSearch($query: String!) {
    voiceSearch(query: $query) {
      id
      name
    }
  }
`;

export const SearchDropdown = () => {
  const [searchVoices, { data, loading }] = useLazyQuery(VOICE_SEARCH);

  const matchingVoices = data?.voiceSearch || [];

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue) {
      searchVoices({ variables: { query: inputValue } });
    }
  }, [inputValue]);

  const renderOptions = () => {
    if (loading) {
      return <Item disabled>Loading items...</Item>;
    }

    if (matchingVoices.length === 0) {
      return <Item disabled>No matches found</Item>;
    }

    return matchingVoices.map(voice => (
      <Item key={voice.id} value={voice.id}>
        <span>{voice.name}</span>
      </Item>
    ));
  };

  return (
    <Dropdown
      inputValue={inputValue}
      onInputValueChange={value => setInputValue(value)}
      onSelect={voiceId => {
        navigate('/voices/' + voiceId);
      }}
    >
      <Field>
        <Combobox placeholder="Search for a voice" end={<SearchNormal1 color="#ED8F1C" />} />
      </Field>
      <Menu>{renderOptions()}</Menu>
    </Dropdown>
  );
};

const UserMenu = ({ profile }: { profile: Profile }) => {
  const [rotated, setRotated] = useState<boolean | undefined>();

  return (
    <Dropdown
      onSelect={item => navigate(item)}
      onStateChange={options => Object.hasOwn(options, 'isOpen') && setRotated(options.isOpen)}
    >
      <Trigger>
        <Button
          isBasic
          css={css`
            color: black;
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
        <Item value="/voices">Use Voice</Item>
        <Item value="/auth/signout">Log Out</Item>
      </Menu>
    </Dropdown>
  );
};

export const AuthenticatedHeader = () => {
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

  const { data: profile } = useProfile();

  return (
    <Grid>
      <HeaderRow alignItems="center">
        <Col
          size={2}
          css={`
            height: 25px;
          `}
        >
          <Link to="/voices">
            <Img
              css={`
                margin-left: 50px;
              `}
              fixed={logoWordmarkImage.file.childImageSharp.fixed}
            />
          </Link>
        </Col>
        <Col>
          <SearchDropdown />
        </Col>
        <Col size={2}>
          <OrangeButton onClick={() => navigate('/voices/create')}>Create new voice</OrangeButton>
        </Col>

        <Col size={2}>{profile ? <UserMenu profile={profile} /> : ''}</Col>
      </HeaderRow>
    </Grid>
  );
};
