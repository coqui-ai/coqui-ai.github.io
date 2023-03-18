import { Link } from 'gatsby';
import { Logo } from 'layouts/Root/components/Header';
import React, { FC, useRef, useState } from 'react';
import { css } from 'styled-components';
import tab from './tab.png';
import { ReactComponent as RightChevron } from '@zendeskgarden/svg-icons/src/16/chevron-right-fill.svg';

type FixedNavType = {
  links: JSX.Element;
};

export const FixedNav: FC<FixedNavType> = ({ links }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderPanel: () => JSX.Element = () =>
    isOpen ? (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 200px;
          position: fixed;
          right: 0;
          top: 30%;
          z-index: 1000;
        `}
        onClick={() => setIsOpen(false)}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            padding: 16px;
            background-color: #f9fafc;
          `}
        >
          <Logo noClick />
          <span
            css={css`
              cursor: pointer;
              z-index: 2000;
            `}
            onClick={e => {
              e.preventDefault();
              setIsOpen(false);
            }}
          >
            <RightChevron />
          </span>
        </div>
        <ul
          css={`
            display: flex;
            flex-direction: column;
            gap: 8px;
            background-color: #f9fafc;
            padding: 16px 4px 4px;
            a {
              height: 30px;
              padding: 4px 16px;
            }
          `}
        >
          {links}
        </ul>
      </div>
    ) : (
      <span
        css={css`
          cursor: pointer;
          position: fixed;
          right: 0;
          top: 30%;
          z-index: 1000;
        `}
        onClick={() => setIsOpen(true)}
      >
        <img src={tab} alt="menu" />
      </span>
    );

  return renderPanel();
};
