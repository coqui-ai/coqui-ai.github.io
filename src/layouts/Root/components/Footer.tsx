/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { ReactComponent as ElementIcon } from '../../../data/images/general/element-logo.svg';
import { ReactComponent as GitHubIcon } from '@zendeskgarden/svg-icons/src/12/github-fill.svg';
import { ReactComponent as TwitterIcon } from '@zendeskgarden/svg-icons/src/12/twitter-fill.svg';
import { ReactComponent as FacebookIcon } from '@zendeskgarden/svg-icons/src/12/facebook-fill.svg';
import { ReactComponent as LinkedInIcon } from '@zendeskgarden/svg-icons/src/12/linkedin-fill.svg';
import { Link } from './StyledNavigationLink';
import MaxWidthLayout from 'layouts/MaxWidth';

const StyledFooterItem = styled(Link)`
  margin-right: ${p => p.theme.space.lg};
  color: ${p => p.theme.palette.white};

  &:hover,
  &:focus {
    color: inherit;
  }
`;

const Footer: React.FC = () => (
  <footer
    css={css`
      background-color: ${p => getColor('kale', 700, p.theme)};
      padding: ${p => p.theme.space.md};
      line-height: ${p => p.theme.lineHeights.md};
      color: ${p => p.theme.palette.white};
      font-size: ${p => p.theme.fontSizes.md};
    `}
  >
    <MaxWidthLayout>
      <div
        css={css`
          display: flex;
          padding-bottom: ${p => p.theme.space.md};

          ${p => mediaQuery('down', 'sm', p.theme)} {
            flex-direction: column;
            padding-left: ${p => math(`${p.theme.iconSizes.md} + ${p.theme.space.md}`)};
            text-align: center;
          }
        `}
      >
        <Link aria-label="Coqui" to="https://github.com/coqui-ai">
          <div
            css={`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <GitHubIcon
              css={css`
                margin-right: ${p => p.theme.space.lg};
                width: ${p => p.theme.iconSizes.lg};
                height: ${p => p.theme.iconSizes.lg};
                color: ${p => p.theme.palette.white};
              `}
            />
          </div>
        </Link>
        <Link aria-label="Coqui" to="https://twitter.com/coqui_ai">
          <div
            css={`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <TwitterIcon
              css={css`
                margin-right: ${p => p.theme.space.lg};
                width: ${p => p.theme.iconSizes.lg};
                height: ${p => p.theme.iconSizes.lg};
                color: ${p => p.theme.palette.white};
              `}
            />
          </div>
        </Link>
        <Link aria-label="Coqui" to="https://www.facebook.com/coquiai">
          <div
            css={`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <FacebookIcon
              css={css`
                margin-right: ${p => p.theme.space.lg};
                width: ${p => p.theme.iconSizes.lg};
                height: ${p => p.theme.iconSizes.lg};
                color: ${p => p.theme.palette.white};
              `}
            />
          </div>
        </Link>
        <Link aria-label="Coqui" to="https://www.linkedin.com/company/coqui-ai">
          <div
            css={`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <LinkedInIcon
              css={css`
                margin-right: ${p => p.theme.space.lg};
                width: ${p => p.theme.iconSizes.lg};
                height: ${p => p.theme.iconSizes.lg};
                color: ${p => p.theme.palette.white};
              `}
            />
          </div>
        </Link>
        <Link aria-label="Coqui" to="https://matrix.to/#/#coqui:matrix.org">
          <div
            css={`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <ElementIcon
              css={css`
                margin-right: ${p => p.theme.space.lg};
                width: ${p => p.theme.iconSizes.lg};
                height: ${p => p.theme.iconSizes.lg};
                color: ${p => p.theme.palette.white};
              `}
            />
          </div>
        </Link>
      </div>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          border-top: ${p => p.theme.borders.sm} ${p => getColor('kale', 500, p.theme)};
          padding-top: ${p => p.theme.space.md};

          ${p => mediaQuery('down', 'sm', p.theme)} {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-basis: ${p => math(`${p.theme.iconSizes.md} + ${p.theme.space.md}`)};
            flex-grow: 1;
            align-items: center;

            ${p => mediaQuery('down', 'sm', p.theme)} {
              margin-bottom: ${p => p.theme.space.md};
            }
          `}
        >
          <StyledFooterItem to="/imprint">Imprint</StyledFooterItem>
        </div>
        <div
          css={css`
            ${p => mediaQuery('down', 'md', p.theme)} {
              margin-top: ${p => p.theme.space.md};
              width: 100%;
              text-align: center;
            }
          `}
        >
          © Coqui {new Date().getFullYear()}
        </div>
      </div>
    </MaxWidthLayout>
  </footer>
);

export default Footer;
