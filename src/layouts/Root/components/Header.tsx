/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useLocation } from '@reach/router';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Dropdown, Item, Menu, Trigger } from '@zendeskgarden/react-dropdowns';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { ReactComponent as OverflowVerticalStroke } from '@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg';
import { ReactComponent as CloseStroke } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import queryString from 'query-string';
import React, { HTMLAttributes, useEffect, useState } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { StyledNavigationItem } from './StyledNavigationItem';
import { StyledNavigationLink } from './StyledNavigationLink';

export const headerBoxShadow = (theme: DefaultTheme) =>
  theme.shadows.lg(
    `${theme.space.base * 4}px`,
    `${theme.space.base * 6}px`,
    getColor('neutralHue', 800, theme, 0.05)!
  );

export const headerHeight = (theme: DefaultTheme) => 77;

const StyledDesktopNavItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${p => p.theme.space.sm};
`;

const StyledDesktopNavLink = styled(StyledNavigationLink).attrs({ partiallyActive: true })`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDesktopNavMenu = styled(StyledNavigationItem).attrs({ partiallyActive: true })`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeader = styled.header.attrs({ role: 'banner' })`
  z-index: 301;
  box-shadow: ${p => headerBoxShadow(p.theme)};
  padding: 0 42px;
  height: ${p => headerHeight(p.theme)}px;

  &[data-show-navigation='true'] {
    border-bottom-color: ${p => p.theme.palette.white};
  }

  ${p => mediaQuery('down', 'sm', p.theme)} {
    padding: 0;
    height: ${p => p.theme.space.base * 15}px;
  }
`;

const Logo: React.FC = () => {
  const logoWordmarkImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/general/logo-wordmark.png" }) {
          childImageSharp {
            fixed(height: 26) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: left;

        ${p => mediaQuery('down', 'sm', p.theme)} {
          flex-grow: 1;
          padding-left: ${p => p.theme.space.md};
        }
      `}
    >
      <Link aria-label="Coqui" to="/">
        <div
          css={`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <Img
            fixed={logoWordmarkImage.file.childImageSharp.fixed}
            alt=""
            css={css`
              ${p => mediaQuery('down', 'xs', p.theme)} {
                height: ${p => p.theme.iconSizes.lg}px;
              }
            `}
            imgStyle={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
      </Link>
    </div>
  );
};

const StyledMobileNavItem = styled.div`
  display: block;
  margin-top: ${p => p.theme.space.base * 2}px;
`;

const StyledMobileNavLink = styled(StyledNavigationLink).attrs({ partiallyActive: true })`
  display: block;
  margin-top: ${p => p.theme.space.base * 2}px;
`;

const StyledMobileNavMenu = styled(StyledNavigationItem).attrs({ partiallyActive: true })`
  display: block;
  margin-top: ${p => p.theme.space.base * 2}px;
`;

const MobileNav = ({
  setIsNavigationVisible
}: {
  setIsNavigationVisible: (v: boolean) => void;
}) => {
  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);
  const modelPageLink = parsedParameters.callback_url
    ? `/models?callback_url=${parsedParameters.callback_url}`
    : '/models';

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <nav
      css={css`
        position: fixed;
        top: ${p => p.theme.space.base * 15}px;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 503;
        background-color: ${p => p.theme.palette.tofu};
        padding: ${p => p.theme.space.lg} ${p => p.theme.space.xxl};
      `}
    />
  );
};

const Header = ({}) => {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);

  return (
    <StyledHeader>
      <div
        css={css`
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-areas: 'a b c';
          align-items: center;
        `}
      >
        <Logo css="justify-content: start;" />
        <nav
          aria-label="Global"
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;

            ${p => mediaQuery('down', 'sm', p.theme)} {
              display: none;
            }
          `}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
