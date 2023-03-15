import { mediaQuery } from '@zendeskgarden/react-theming';
import { borderRadius } from 'polished';
import React, { FC } from 'react';
import { css } from 'styled-components';

type SummaryCardPropsType = {
  border?: string;
  fill?: string;
  imageSrc?: string;
  phrase?: string;
  description?: string;
  height?: string;
  width?: string;
  hasHover?: boolean;
  hoverColor?: string;
};

export const SummaryCard: FC<SummaryCardPropsType> = ({
  border,
  fill,
  imageSrc,
  phrase,
  description,
  height,
  width,
  hasHover,
  hoverColor
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: ${height || ''};
        width: ${width || ''};
        max-height: 338px;
        min-width: 250px;
        border-radius: 20px;
        border: ${`1px solid ${border}` || 'none'};
        background-color: ${fill || 'transparent'};
        flex: 1;
        ${p => mediaQuery('down', 'xl', p.theme)} {
          padding: 2rem;
        }
        :hover {
          background-color: ${hasHover && hoverColor ? hoverColor : ''};
          .sc-card-title {
            background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          .sc-card-description {
            color: #ffffff;
          }
        }
      `}
    >
      {imageSrc && (
        <img
          height="72"
          width="72"
          src={imageSrc}
          alt="tile"
          css={css`
            margin-bottom: 32px;
          `}
        />
      )}
      {phrase && (
        <p
          className="sc-card-title"
          css={css`
            font-size: 18px;
            font-weight: 600;
            line-height: 1.5;
            margin-bottom: 20px;
          `}
        >
          {phrase}
        </p>
      )}
      {description && (
        <p
          className="sc-card-description"
          css={css`
            font-size: 16px;
            line-height: 180%;
            letter-spacing: 0.02em;
            color: ${imageSrc ? '#777777' : '#000000'};
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
};
