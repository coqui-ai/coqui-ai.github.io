import { Accordion } from '@zendeskgarden/react-accordions';
import { mediaQuery } from '@zendeskgarden/react-theming';
import {
  solutionsImagesLookup,
  SolutionsPhraseType
} from 'layouts/HowItWorks/data/solutionsImageLookup';
import React, { FC, useEffect, useState } from 'react';
import { css, keyframes } from 'styled-components';
import {
  SolutionContainer,
  SolutionsCaptionContainer,
  SolutionsCaptionText,
  SolutionSection,
  SolutionSectionTitle,
  SolutionSegmentLeft,
  SolutionSegmentRight
} from './styled';

const keyframe = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export type SolutionType = {
  index: number;
  sectionTitle: string;
  title: string;
  problem: AccordionProblemType;
  solution: AccordionSolutionType;
  image?: {
    imageSrc: any;
    caption: string;
  };
  imgCH?: (val: { imageSrc: any; caption: string }) => void;
};

export type AccordionProblemType = {
  title: string;
  description: JSX.Element;
};

export type AccordionSolutionType = {
  title: string;
  description: (phraseClickHandler: (phrase: SolutionsPhraseType) => void) => JSX.Element;
};

export const Solution: FC<SolutionType> = ({
  index,
  problem,
  solution,
  sectionTitle,
  title,
  image,
  imgCH
}) => {
  const [img, setImg] = useState<string>('');
  const [caption, setCaption] = useState<string>('');

  useEffect(() => {
    setImg(image?.imageSrc || '');
    setCaption(image?.caption || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setImg(image?.imageSrc || '');
    setCaption(image?.caption || '');
  }, [image]);

  const phraseClickHandler: (phrase: SolutionsPhraseType) => void = phrase => {
    const matchedImage = solutionsImagesLookup[phrase];
    if (!matchedImage || !imgCH) return;
    imgCH(matchedImage);
    setImg(matchedImage.imageSrc);
    setCaption(matchedImage.caption);
  };

  return (
    <SolutionContainer index={index}>
      <SolutionSegmentLeft>
        <SolutionSection>{sectionTitle}</SolutionSection>
        <SolutionSectionTitle>{title}</SolutionSectionTitle>
        <Accordion level={4} expandedSections={[0, 1]}>
          <Accordion.Section>
            <Accordion.Header>
              <Accordion.Label>{problem?.title || ''}</Accordion.Label>
            </Accordion.Header>
            <Accordion.Panel>{problem?.description || ''}</Accordion.Panel>
          </Accordion.Section>
          <Accordion.Section>
            <Accordion.Header>
              <Accordion.Label>{solution?.title || ''}</Accordion.Label>
            </Accordion.Header>
            <Accordion.Panel>{solution?.description(phraseClickHandler) || ''}</Accordion.Panel>
          </Accordion.Section>
        </Accordion>
      </SolutionSegmentLeft>
      <SolutionSegmentRight>
        <img
          src={img}
          alt={sectionTitle}
          css={css`
            min-width: 300px;
            -webkit-transition: opacity 1s ease-in-out;
            -moz-transition: opacity 1s ease-in-out;
            -o-transition: opacity 1s ease-in-out;
            transition: opacity 1s ease-in-out;
            ${p => mediaQuery('down', 'md', p.theme)} {
              height: auto;
            }
          `}
        />
        <SolutionsCaptionContainer>
          <SolutionsCaptionText
            key={caption}
            css={css`
              min-width: 300px;
              -webkit-animation: ${keyframe} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
              animation: ${keyframe} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
              ${p => mediaQuery('down', 'md', p.theme)} {
                height: auto;
              }
            `}
          >
            {caption}
          </SolutionsCaptionText>
        </SolutionsCaptionContainer>
      </SolutionSegmentRight>
    </SolutionContainer>
  );
};
