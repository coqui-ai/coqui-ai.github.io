import React from 'react';
import {
  AboutUsTimelineCard,
  AboutUsTimelineContainer,
  AboutUsTimelineJoiner,
  AboutUsTimelineSummary,
  AboutUsTimelineTitle,
  AboutUsTimelineWrapper,
  AboutUsTimelineYear
} from './styled';

type TimelineItem = {
  year: number;
  title: string;
  summary: string;
  color: string;
  isLastItem?: boolean;
};

const timelineItems: TimelineItem[] = [
  {
    year: 2016,
    title: 'AI Voices is founded',
    summary:
      'AI Voices is founded by a team of experts in artificial intelligence and machine learning.',
    color: '#EDF7FF'
  },
  {
    year: 2011,
    title: 'The first AI voice is launched',
    summary:
      'AI Voices partners with several leading tech companies to integrate its technology into their products.',
    color: '#FFF7ED',
    isLastItem: true
  }
];

export const AboutUsTimeline = () => {
  return (
    <AboutUsTimelineContainer>
      {timelineItems.map((t, i) => (
        <AboutUsTimelineWrapper key={i}>
          <AboutUsTimelineCard bgColor={t.color}>
            <AboutUsTimelineYear>{t.year}</AboutUsTimelineYear>
            <AboutUsTimelineTitle>{t.title}</AboutUsTimelineTitle>
            <AboutUsTimelineSummary>{t.summary}</AboutUsTimelineSummary>
          </AboutUsTimelineCard>
          {!t.isLastItem && <AboutUsTimelineJoiner />}
        </AboutUsTimelineWrapper>
      ))}
    </AboutUsTimelineContainer>
  );
};
