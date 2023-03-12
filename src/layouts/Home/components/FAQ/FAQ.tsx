import { Accordion } from '@zendeskgarden/react-accordions';
import React, { FC } from 'react';
import { FAQColumn, FAQContainer, FAQRowContainer, FAQSection, FAQSectionTitle } from './styled';

type FAQAccordionType = {
  id: number;
  title: string;
  detail: string;
};

const faqLeftSectionData: FAQAccordionType[] = [
  {
    id: 1,
    title: 'What makes your company different from others in the industry?',
    detail:
      'We are a leading provider of innovative solutions that help businesses grow and succeed. Our team of experts works tirelessly to develop cutting-edge products and services that are tailored to meet the unique needs of each of our clients.'
  },
  { id: 2, title: 'What kind of products and services do you offer?', detail: '' },
  { id: 3, title: 'What makes your company different from others in the industry?', detail: '' }
];

const faqRightSectionData: FAQAccordionType[] = [
  { id: 4, title: 'What makes your company different from others in the industry?', detail: '' },
  { id: 5, title: 'How can I get started with your company?', detail: '' },
  { id: 6, title: 'How can I contact your company if I have questions or concerns?', detail: '' }
];

export const FAQ: FC = () => {
  return (
    <FAQContainer>
      <FAQSection>ASK US</FAQSection>
      <FAQSectionTitle>
        Frequently asked <span>questions</span>
      </FAQSectionTitle>
      <FAQRowContainer>
        <FAQColumn>
          <Accordion level={4} isBare>
            {faqLeftSectionData.map(d => (
              <Accordion.Section key={d.id}>
                <Accordion.Header>
                  <Accordion.Label>{d.title}</Accordion.Label>
                </Accordion.Header>
                <Accordion.Panel>{d.detail}</Accordion.Panel>
              </Accordion.Section>
            ))}
          </Accordion>
        </FAQColumn>
        <FAQColumn>
          <Accordion level={4} isBare>
            {faqLeftSectionData.map(d => (
              <Accordion.Section key={d.id}>
                <Accordion.Header>
                  <Accordion.Label>{d.title}</Accordion.Label>
                </Accordion.Header>
                <Accordion.Panel>{d.detail}</Accordion.Panel>
              </Accordion.Section>
            ))}
          </Accordion>
        </FAQColumn>
      </FAQRowContainer>
    </FAQContainer>
  );
};
