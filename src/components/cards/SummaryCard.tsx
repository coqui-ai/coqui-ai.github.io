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
};

export const SummaryCard: FC<SummaryCardPropsType> = ({
  border,
  fill,
  imageSrc,
  phrase,
  description,
  height,
  width
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
