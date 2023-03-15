/* eslint-disable react/jsx-curly-newline */
import { Accordion } from '@zendeskgarden/react-accordions';
import React, { FC, useState } from 'react';
import { FAQColumn, FAQContainer, FAQRowContainer, FAQSection, FAQSectionTitle } from './styled';

type FAQAccordionType = {
  id: number;
  title: string;
  detail: string;
};

const faqLeftSectionData: FAQAccordionType[] = [
  {
    id: 1,
    title: 'Do you support languages other than English?',
    detail:
      'No, we do not support languages other than English in the Starter Package right now. We are working on our research to extend to other languages for our Starter and Pro packages. We can however offer tailor made multinational support to our Enterprise clients. Read more on our Enterprise package.'
  },
  {
    id: 2,
    title: 'What is Synthesis Time?',
    detail:
      'Synthesis Time is time Coqui Studio spends editing audio. When you edit a particular line, the play button begins to spin. This indicates that the line is synthesized. The length of the rendered audio is discounted from the “Synthesis Time”. If you keep the "automatically renew credits" option enabled in your account page, when you run out of credits we will automatically charge you for the last package you manually purchased, to make sure you can continue using Coqui Studio without interruptions.'
  },
  {
    id: 3,
    title: 'Will you provide Open Source support for the features of Coqui Studio?',
    detail:
      "No. Coqui TTS open source repository (link to external github link in a new tab) helps developers and generative AI enthusiasts to develop their own text-to-speech models for the languages they want. We feel ourselves obliged to share our knowledge with the global community. We share our code because we want to facilitate expanding the implementation of generative AI technologies for voice generation and help individuals and businesses all around the world.Coqui Studio on the other hand, is our commercial product that serves creative industries, such as game developers, animation studios, or post-production companies. However, we also strongly believe that there could be various commercial (or other) collaboration opportunities with our open source community members. We are always open to hear your thoughts. So drop us a line. Or join us on Discord. Let's talk!"
  }
];

const faqRightSectionData: FAQAccordionType[] = [
  {
    id: 4,
    title: 'How is my work charged?',
    detail:
      'You pay for only what you use. As opposed to subscription services, our topup model does not charge our users when they do not use Coqui Studio. You have a Free Trial of 30 minutes to immediately start to use Coqui Studio for free. In the Starter Package, there are 4 hours or 50 hours plans available. Once you complete the transaction, your account will be topped up with the respective plan of purchase. You can review your balance of available “Synthesis Time” in your Account page.'
  },
  {
    id: 5,
    title: 'Do you have APIs?',
    detail:
      "Yes, we do. We provide API access to our Enterprise clients. You may review our Enterprise package under the Resources section (Link to Resources bookmark on How it works page). If you do not request all of the Enterprise features and services but only the API access, Drop us a line. Let's talk!"
  }
];

export const FAQ: FC = () => {
  const [leftSection, setLeftSection] = useState<number[]>([0]);
  const [rightSection, setRightSection] = useState<number[]>([]);

  return (
    <FAQContainer id="faq">
      <FAQSection>ASK US</FAQSection>
      <FAQSectionTitle>
        Frequently asked <span>questions</span>
      </FAQSectionTitle>
      <FAQRowContainer>
        <FAQColumn>
          <Accordion
            level={4}
            isBare
            expandedSections={leftSection}
            onChange={(index: number) =>
              leftSection.indexOf(index) > -1 ? setLeftSection([]) : setLeftSection([index])
            }
          >
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
          <Accordion
            level={4}
            isBare
            expandedSections={rightSection}
            onChange={(index: number) =>
              rightSection.indexOf(index) > -1 ? setRightSection([]) : setRightSection([index])
            }
          >
            {faqRightSectionData.map(d => (
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
