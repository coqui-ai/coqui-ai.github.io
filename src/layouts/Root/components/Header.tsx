/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, useRef, useEffect } from 'react';
import Img from 'gatsby-image';
import styled, { css, DefaultTheme } from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as SearchStroke } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { ReactComponent as OverflowVerticalStroke } from '@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg';
import { ReactComponent as CloseStroke } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import MaxWidthLayout from 'layouts/MaxWidth';
import { StyledNavigationLink } from './StyledNavigationLink';

export const headerBoxShadow = (theme: DefaultTheme) =>
  theme.shadows.lg(
    `${theme.space.base * 4}px`,
    `${theme.space.base * 6}px`,
    getColor('neutralHue', 800, theme, 0.05)!
  );

export const headerHeight = (theme: DefaultTheme) => theme.space.base * 20;

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

const StyledHeader = styled.header.attrs({ role: 'banner' })`
  z-index: 1;
  box-shadow: ${p => headerBoxShadow(p.theme)};
  padding: 0 ${p => p.theme.space.base * 4}px;
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
        justify-content: center;

        ${p => mediaQuery('down', 'sm', p.theme)} {
          flex-grow: 1;
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

const MobileNavButton: React.FC<
  {
    isExpanded: boolean;
    label: string;
    icon: React.ReactNode;
  } & HTMLAttributes<HTMLButtonElement>
> = ({ isExpanded, label, icon, ...other }) => {
  return (
    <div
      css={css`
        padding: ${p => p.theme.space.base * 1.5}px; /* (header - button) x .5 */

        ${p => mediaQuery('up', 'md', p.theme)} {
          display: none;
        }
      `}
    >
      <IconButton
        aria-label={label}
        aria-expanded={isExpanded}
        isPill={false}
        size="large"
        {...other}
      >
        {isExpanded ? <CloseStroke /> : icon}
      </IconButton>
    </div>
  );
};

const StyledMobileNavLink = styled(StyledNavigationLink).attrs({ partiallyActive: true })`
  display: block;
  margin-top: ${p => p.theme.space.base * 2}px;
`;

const MobileNav: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      css={css`
        position: fixed;
        top: ${p => p.theme.space.base * 15}px;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
        background-color: ${p => p.theme.palette.tofu};
        padding: ${p => p.theme.space.lg} ${p => p.theme.space.xxl};
      `}
    >
      <StyledMobileNavLink to="/about">About</StyledMobileNavLink>
      <StyledMobileNavLink to="/blog">Blog</StyledMobileNavLink>
      <StyledMobileNavLink to="/code">Code</StyledMobileNavLink>
      <StyledMobileNavLink to="/models">Models</StyledMobileNavLink>
      <StyledMobileNavLink to="/data">Data</StyledMobileNavLink>
    </div>
  );
};

const DesktopNav: React.FC = () => (
  <nav
    role="navigation"
    aria-label="Global"
    css={css`
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;

      ${p => mediaQuery('down', 'sm', p.theme)} {
        display: none;
      }
    `}
  >
    <StyledDesktopNavItem>
      <StyledDesktopNavLink to="/about">About</StyledDesktopNavLink>
    </StyledDesktopNavItem>
    <StyledDesktopNavItem>
      <StyledDesktopNavLink to="/blog">Blog</StyledDesktopNavLink>
    </StyledDesktopNavItem>
    <StyledDesktopNavItem>
      <StyledDesktopNavLink to="/code">Code</StyledDesktopNavLink>
    </StyledDesktopNavItem>
    <StyledDesktopNavItem>
      <StyledDesktopNavLink to="/models">Models</StyledDesktopNavLink>
    </StyledDesktopNavItem>
    <StyledDesktopNavItem>
      <StyledDesktopNavLink to="/data">Data</StyledDesktopNavLink>
    </StyledDesktopNavItem>
  </nav>
);

const Header: React.FC = () => {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchVisible) {
      inputRef.current && inputRef.current.focus();
    }
  }, [isSearchVisible]);

  return (
    <>
      <StyledHeader>
        <MaxWidthLayout
          css={css`
            display: flex;
            height: 100%;
            min-height: 100%;
          `}
        >
          <MobileNavButton
            icon={<SearchStroke />}
            label="Search"
            isExpanded={isSearchVisible}
            onClick={() => {
              setIsSearchVisible(!isSearchVisible);

              if (!isSearchVisible) {
                setIsNavigationVisible(false);
              }
            }}
          />
          {!isSearchVisible && <Logo />}
          <MobileNavButton
            icon={<OverflowVerticalStroke />}
            label="Global navigation"
            isExpanded={isNavigationVisible}
            onClick={() => {
              setIsNavigationVisible(!isNavigationVisible);

              if (!isNavigationVisible) {
                setIsSearchVisible(false);
              }
            }}
          />
          <DesktopNav />
        </MaxWidthLayout>
      </StyledHeader>

      {isNavigationVisible && <MobileNav />}
    </>
  );
};

export default Header;
