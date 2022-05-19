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
import { Item, Menu, Field, Label, Dropdown, Combobox } from '@zendeskgarden/react-dropdowns';

import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';

import styled, { css, DefaultTheme } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { useProfile } from '../../../../utils/auth';
import { LG } from '@zendeskgarden/react-typography';
import { SearchNormal1 } from 'iconsax-react';

const Aa = styled.div`
  background: pink;
`;

const CreateNewVoice = () => <div>aa</div>;
const UserCorner = () => <div>UserCorner</div>;

const Search = () => (
  <Field
    css={css`
      background: black;
    `}
  >
    <Input />
  </Field>
);

const options = [
  'Asparagus',
  'Brussel sprouts',
  'Cauliflower',
  'Garlic',
  'Jerusalem artichoke',
  'Kale',
  'Lettuce',
  'Onion',
  'Mushroom',
  'Potato',
  'Radish',
  'Spinach',
  'Tomato',
  'Yam',
  'Zucchini'
];

export const SearchDropdown = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [matchingOptions, setMatchingOptions] = useState<string[]>([]);

  /**
   * Debounce filtering
   */
  const filterMatchingOptions = useMemo(
    () =>
      debounce((value: string) => {
        if (value.length > 0) {
          const valueRegexp = new RegExp(value!, 'gui');

          setMatchingOptions(options.filter(option => option.match(valueRegexp)) || []);
        } else {
          setMatchingOptions([]);
        }
        setIsLoading(false);
      }, 250),
    []
  );

  useEffect(() => {
    setIsLoading(true);
    filterMatchingOptions(inputValue);

    return () => filterMatchingOptions.cancel();
  }, [filterMatchingOptions, inputValue]);

  const renderOptions = () => {
    if (isLoading) {
      return <Item disabled>Loading items...</Item>;
    }

    if (matchingOptions.length === 0) {
      return <Item disabled>No matches found</Item>;
    }

    return matchingOptions.map(option => (
      <Item key={option} value={option}>
        <span>{option}</span>
      </Item>
    ));
  };

  return (
    <Dropdown
      inputValue={inputValue}
      onInputValueChange={value => setInputValue(value)}
      onSelect={item => {
        setInputValue(item);
      }}
    >
      <Field>
        <Combobox end={<SearchNormal1 />} placeholder="Search for a voice" />
      </Field>
      <Menu>{renderOptions()}</Menu>
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
      <Row
        css={`
          height: 84px;
          border-bottom: 1px solid #c2c8cc80;
        `}
        alignItems="center"
      >
        <Col
          size={2}
          css={`
            height: 25px;
          `}
        >
          <div
            css={`
              height: 25px;
              margin-left: 50px;
            `}
          >
            <Img fixed={logoWordmarkImage.file.childImageSharp.fixed} />
          </div>
          {/* <HeaderItemText>Zendesk Garden</HeaderItemText> */}
        </Col>
        <Col>
          <SearchDropdown />
        </Col>
        <Col size={2}>Create</Col>

        <Col size={2}>{profile ? profile.email : ''}</Col>
      </Row>
    </Grid>
  );
};
