import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React, { FC } from 'react';
import { css } from 'styled-components';
import {
  BlogCardContainer,
  BlogCardMetaRow,
  BlogCardReadTime,
  BlogCardSummary,
  BlogCardTag,
  BlogCardTitle
} from './styled';

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
  console.log(title);
  console.log(fluidImg);
  return (
    <BlogCardContainer>
      <Link to={url}>
        <img
          height={240}
          src={fluidImg.node.fluid.src}
          alt="check"
          css={css`
            border-radius: 20px;
            width: 35rem;
            object-fit: cover;
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
