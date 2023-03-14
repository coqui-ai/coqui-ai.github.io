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
  date: string;
  title: string;
  summary: string;
  color: string;
  link?: string;
  isLastItem?: boolean;
};

const timelineItems: TimelineItem[] = [
  {
    date: 'OCTOBER 2021',
    title: '',
    summary: 'Founded in October 2021 and based in Berlin',
    color: '#EDF7FF'
  },
  {
    date: 'DECEMBER 2021',
    title: '',
    summary:
      'By December 2021 there were already 725K downloads and 28K GitHub stars by Coqui open source community',
    color: '#FFF7ED'
  },
  {
    date: '2022',
    title: '',
    summary: 'During 2022 the team grew to a number of 13 and we began working on our products',
    color: '#FFF0F1'
  },
  {
    date: 'AUGUST 2022',
    title: '',
    summary: 'By August 2022 we launched our voice cloning app',
    color: '#F5FCFC'
  },
  {
    date: 'NOVEMBER 2022',
    title: '',
    summary: 'November 2022 we opened up Coqui Studio to our waiting list members',
    color: '#F5FCFC'
  },
  {
    date: 'FEBRUARY 2023',
    title: '',
    summary:
      'On Feb 2023 we officially launched Coqui Studio with multiple market leading features',
    color: '#F5FCFC'
  },
  {
    date: 'MARCH 2023',
    title: '',
    summary:
      'March 2023 we will showcase Coqui Studio capabilities to video game developers in GDC',
    color: '#F5FCFC',
    link: '/blog/general/investment-march',
    isLastItem: true
  }
];

export const AboutUsTimeline = () => {
  const openLinkInNewTab: (link: string) => void = link =>
    window.open(`${window.location.origin}${link}`, '_BLANK');

  return (
    <AboutUsTimelineContainer>
      {timelineItems.map((t, i) => (
        <AboutUsTimelineWrapper key={i} onClick={() => (t.link ? openLinkInNewTab(t.link) : {})}>
          <AboutUsTimelineCard bgColor={t.color}>
            <AboutUsTimelineYear>{t.date}</AboutUsTimelineYear>
            {t.title && <AboutUsTimelineTitle>{t.title}</AboutUsTimelineTitle>}
            <AboutUsTimelineSummary>{t.summary}</AboutUsTimelineSummary>
          </AboutUsTimelineCard>
          {!t.isLastItem && <AboutUsTimelineJoiner />}
        </AboutUsTimelineWrapper>
      ))}
    </AboutUsTimelineContainer>
  );
};
