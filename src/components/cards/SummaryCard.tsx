import { borderRadius } from 'polished';
import React, { FC } from 'react';
import { css } from 'styled-components';

type SummaryCardPropsType = {
  border?: string;
  fill?: string;
  imageSrc?: string;
  phrase?: string;
  description?: string;
};

export const SummaryCard: FC<SummaryCardPropsType> = ({
  border,
  fill,
  imageSrc,
  phrase,
  description
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 338px;
        width: 349px;
        border-radius: 20px;
        border: ${`1px solid ${border}` || 'none'};
        background-color: ${fill || 'transparent'};
        padding: 45px 35px;
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
            font-size: 22px;
            font-weight: 600;
            line-height: 1.5;
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
