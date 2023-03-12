/* eslint-disable react-hooks/exhaustive-deps */
import { useStaticQuery, graphql } from 'gatsby';
import React, { FC, useEffect, useState } from 'react';
import { SecondaryButton } from '../Buttons';
import { BlogCard } from './BlogCard/BlogCard';
import {
  BlogItemsContainer,
  BlogsContainer,
  BlogsTitle,
  BlogsTitleDescription,
  BlogsTitleRow
} from './styled';
import navs from '../../../../nav/blog.js';

export const Blogs: FC = () => {
  const [blogData, setBlogData] = useState<any[]>([]);
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp(filter: { fluid: { src: { regex: "/splash-screen/" } } }) {
          edges {
            node {
              id
              fluid(maxWidth: 350, traceSVG: { background: "#F6F4F4", color: "#228F67" }) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    `
  );

  const mapBlogData: () => void = () => {
    console.log(navs.slice(0, 3));
    const sliced = navs.slice(0, 3);
    const mappedData = sliced.map((n: any) => {
      const splashFile = n.splash.replace(/^.*[\\/]/u, '');
      const image = data.allImageSharp.edges.find((edge: any) =>
        edge.node.fluid.src.includes(splashFile)
      );
      console.log(image);
      return {
        tag: n.group,
        fluidImg: image || {},
        duration: '3 MIN READ',
        title: n.title,
        summary: n.description,
        url: n.url
      };
    });
    setBlogData(mappedData);
  };

  useEffect(() => {
    if (data) mapBlogData();

    return () => {
      setBlogData([]);
    };
  }, [data]);

  return (
    <BlogsContainer>
      <BlogsTitle>BLOGS</BlogsTitle>
      <BlogsTitleRow>
        <BlogsTitleDescription>
          Learn about the <span>latest in voice AI</span> from trusted experts.
        </BlogsTitleDescription>
        <SecondaryButton text="See all" path="/" />
      </BlogsTitleRow>
      <BlogItemsContainer>
        {blogData.map(b => (
          <BlogCard key={b.title.split(' ').join('-')} {...b} />
        ))}
      </BlogItemsContainer>
    </BlogsContainer>
  );
};
