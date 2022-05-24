/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, getLineHeight, mediaQuery } from '@zendeskgarden/react-theming';

export const titleStyling = (p: ThemeProps<DefaultTheme>) => {
  const fontSize = `${p.theme.space.base * 16}px`;

  return css`
    line-height: ${getLineHeight(`${p.theme.space.base * 14}px`, fontSize)};
    font-size: ${fontSize};
    font-weight: ${p.theme.fontWeights.bold};

    ${mediaQuery('down', 'md', p.theme)} {
      line-height: ${p.theme.lineHeights.xxxl};
      font-size: ${p.theme.fontSizes.xxxl};
    }
  `;
};

export const subtitleStyling = (p: ThemeProps<DefaultTheme>) => {
  const fontSize = `${p.theme.space.base * 6}px`;

  return css`
    line-height: ${getLineHeight(`${p.theme.space.base * 8}px`, fontSize)};
    font-size: ${fontSize};
    font-weight: ${p.theme.fontWeights.bold};

    ${mediaQuery('down', 'md', p.theme)} {
      line-height: ${p.theme.lineHeights.lg};
      font-size: ${p.theme.fontSizes.lg};
    }
  `;
};

export const headerStyling = (p: ThemeProps<DefaultTheme>) => {
  const fontSize = `${p.theme.space.base * 10}px`;

  return css`
    line-height: ${getLineHeight(`${p.theme.space.base * 14}px`, fontSize)};
    font-size: ${fontSize};
    font-weight: ${p.theme.fontWeights.bold};

    ${mediaQuery('down', 'md', p.theme)} {
      line-height: ${p.theme.lineHeights.xxl};
      font-size: ${p.theme.fontSizes.xxl};
    }
  `;
};

export const textStyling = (p: ThemeProps<DefaultTheme>) => {
  return css`
    color: ${getColor('grey', 600, p.theme)};
    font-size: ${p.theme.fontSizes.lg};

    ${mediaQuery('down', 'md', p.theme)} {
      font-size: ${p.theme.fontSizes.lg};
    }
  `;
};
