import { Accordion } from '@zendeskgarden/react-accordions';
import { mediaQuery } from '@zendeskgarden/react-theming';
import React, { FC } from 'react';
import { css } from 'styled-components';
import {
  SolutionContainer,
  SolutionSection,
  SolutionSectionTitle,
  SolutionSegmentLeft,
  SolutionSegmentRight
} from './styled';

export type SolutionType = {
  index: number;
  sectionTitle: string;
  title: string;
  problem: AccordionType;
  solution: AccordionType;
  imageSrc: string;
};

export type AccordionType = {
  title: string;
  description: JSX.Element;
};

export const Solution: FC<SolutionType> = ({
  index,
  problem,
  solution,
  imageSrc,
  sectionTitle,
  title
}) => {
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
            <Accordion.Panel>{solution?.description || ''}</Accordion.Panel>
          </Accordion.Section>
        </Accordion>
      </SolutionSegmentLeft>
      <SolutionSegmentRight>
        <img
          src={imageSrc}
          alt={sectionTitle}
          css={css`
            width: 710px;
            height: 470px;
            ${p => mediaQuery('down', 'md', p.theme)} {
              height: auto;
            }
          `}
        />
      </SolutionSegmentRight>
    </SolutionContainer>
  );
};
