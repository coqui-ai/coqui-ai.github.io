/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, useEffect, useContext } from 'react';
import Img from 'gatsby-image';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import MaxWidthLayout from 'layouts/MaxWidth';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { IconButton } from '@zendeskgarden/react-buttons';
import { StyledNavigationLink } from './StyledNavigationLink';
import { StyledNavigationItem } from './StyledNavigationItem';
import styled, { css, DefaultTheme } from 'styled-components';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { Dropdown, Menu, Item, Trigger } from '@zendeskgarden/react-dropdowns';
import { ReactComponent as OverflowVerticalStroke } from '@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg';
import { ReactComponent as CloseStroke } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { ProfileContext } from '../../../../utils/auth';
import { UserMenu, VoiceSearchHeader } from './VoiceSearchHeader';

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

const StyledDesktopNavMenu = styled(StyledNavigationItem).attrs({ partiallyActive: true })`
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

interface IMobileNavLayoutProps {
  isSubscribing: boolean;
}

const MobileNav: React.FC<IMobileNavLayoutProps> = ({ isSubscribing }) => {
  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);
  const modelPageLink = parsedParameters.callback_url
    ? `/models?callback_url=${parsedParameters.callback_url}`
    : `/models`;

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
      {!isSubscribing && (
        <>
          <Dropdown
            onSelect={item => {
              window.location.href = item;
            }}
          >
            <Trigger>
              <StyledMobileNavItem>
                <StyledMobileNavMenu
                  css={css`
                    background-color: ${p => p.theme.palette.tofu};
                  `}
                >
                  Use Cases
                </StyledMobileNavMenu>
              </StyledMobileNavItem>
            </Trigger>
            <Menu hasArrow>
              <Item value="/video-games">Video Games</Item>
              <Item value="/post-production">Post Production</Item>
              <Item value="/dubbing">Dubbing</Item>
              <Item value="/brand-voices">Brand Voices</Item>
            </Menu>
          </Dropdown>
          <StyledMobileNavItem>
            <StyledMobileNavLink to="https://github.com/coqui-ai">Open Source</StyledMobileNavLink>
          </StyledMobileNavItem>
          <StyledMobileNavItem>
            <StyledMobileNavLink to={modelPageLink}>Models</StyledMobileNavLink>
          </StyledMobileNavItem>
          <StyledMobileNavItem>
            <StyledMobileNavLink to="/blog">Blog</StyledMobileNavLink>
          </StyledMobileNavItem>
          <StyledMobileNavItem>
            <StyledMobileNavLink to="/auth/signin">Sign In</StyledMobileNavLink>
          </StyledMobileNavItem>
          <StyledMobileNavItem>
            <StyledMobileNavLink
              to="/auth/signup"
              css={css`
                background-color: ${p => getColor('yellow', 600, p.theme)};
                color: #fff;
              `}
            >
              Try now for free
            </StyledMobileNavLink>
          </StyledMobileNavItem>
        </>
      )}
    </div>
  );
};

interface IDesktopNavLayoutProps {
  isSubscribing: boolean;
}

const DesktopNav: React.FC<IDesktopNavLayoutProps> = ({ isSubscribing }) => {
  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);
  const modelPageLink = parsedParameters.callback_url
    ? `/models?callback_url=${parsedParameters.callback_url}`
    : `/models`;
  const profile = useContext(ProfileContext);

  return (
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
      {!isSubscribing && (
        <>
          <Dropdown
            onSelect={item => {
              window.location.href = item;
            }}
          >
            <Trigger type="div">
              <StyledDesktopNavItem
                css={`
                  &:hover {
                    cursor: pointer;
                  }
                `}
              >
                <StyledDesktopNavMenu>Use Cases</StyledDesktopNavMenu>
              </StyledDesktopNavItem>
            </Trigger>
            <Menu hasArrow>
              <Item value="/video-games">Video Games</Item>
              <Item value="/post-production">Post Production</Item>
              <Item value="/dubbing">Dubbing</Item>
              <Item value="/brand-voices">Brand Voices</Item>
            </Menu>
          </Dropdown>
          <StyledDesktopNavItem>
            <StyledDesktopNavLink to="https://github.com/coqui-ai">
              Open Source
            </StyledDesktopNavLink>
          </StyledDesktopNavItem>
          <StyledDesktopNavItem>
            <StyledDesktopNavLink to={modelPageLink}>Models</StyledDesktopNavLink>
          </StyledDesktopNavItem>
          <StyledDesktopNavItem>
            <StyledDesktopNavLink to="/blog">Blog</StyledDesktopNavLink>
          </StyledDesktopNavItem>
          {profile ? (
            <StyledDesktopNavItem>
              <UserMenu profile={profile} />
            </StyledDesktopNavItem>
          ) : (
            <>
              <StyledDesktopNavItem>
                <StyledDesktopNavLink to="/auth/signin">Sign In</StyledDesktopNavLink>
              </StyledDesktopNavItem>
              <StyledDesktopNavItem>
                <StyledDesktopNavLink
                  to="/auth/signup"
                  css={css`
                    background-color: ${p => getColor('kale', 800, p.theme)};
                    color: #fff;
                  `}
                >
                  Try now for free
                </StyledDesktopNavLink>
              </StyledDesktopNavItem>
            </>
          )}
        </>
      )}
    </nav>
  );
};

interface IHeaderLayoutProps {
  isSubscribing: boolean;
  showVoiceSearch: boolean;
}

const Header: React.FC<IHeaderLayoutProps> = ({ isSubscribing, showVoiceSearch }) => {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const profile = useContext(ProfileContext);

  if (showVoiceSearch && profile) return <VoiceSearchHeader />;

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
          <Logo />
          {!isSubscribing && (
            <MobileNavButton
              icon={<OverflowVerticalStroke />}
              label="Global navigation"
              isExpanded={isNavigationVisible}
              onClick={() => {
                setIsNavigationVisible(!isNavigationVisible);
              }}
            />
          )}
          <DesktopNav isSubscribing={isSubscribing} />
        </MaxWidthLayout>
      </StyledHeader>

      {isNavigationVisible && <MobileNav isSubscribing={isSubscribing} />}
    </>
  );
};

export default Header;
