import { Link } from 'gatsby';
import React, { FC } from 'react';
import no_img from './no_img.png';
import { css } from 'styled-components';
import {
  BlogCardContainer,
  BlogCardMetaRow,
  BlogCardReadTime,
  BlogCardSummary,
  BlogCardTag,
  BlogCardTitle
} from './styled';
import { mediaQuery } from '@zendeskgarden/react-theming';

type BlogCardPropsType = {
  fluidImg: any;
  tag: string;
  duration: string;
  title: string;
  summary: string;
  url: string;
};

export const BlogCard: FC<BlogCardPropsType> = ({
  fluidImg,
  tag,
  duration,
  title,
  summary,
  url
}) => {
  return (
    <BlogCardContainer>
      <Link to={url}>
        <img
          height={240}
          src={fluidImg?.node?.fluid?.src || no_img}
          alt="check"
          css={css`
            border-radius: 20px;
            width: 35rem;
            object-fit: cover;
            max-width: 380px;
            ${p => mediaQuery('down', 'lg', p.theme)} {
              height: auto;
              max-width: 400px;
            }
            ${p => mediaQuery('down', 'sm', p.theme)} {
              height: auto;
              max-width: 100%;
            }
          `}
        />
      </Link>
      <BlogCardMetaRow>
        <BlogCardTag>{tag}</BlogCardTag>
        <BlogCardReadTime>{duration}</BlogCardReadTime>
      </BlogCardMetaRow>
      <BlogCardTitle>{title}</BlogCardTitle>
      <BlogCardSummary>{summary}</BlogCardSummary>
    </BlogCardContainer>
  );
};
