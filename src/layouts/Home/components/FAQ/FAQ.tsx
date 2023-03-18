/* eslint-disable react/jsx-curly-newline */
import { Accordion } from '@zendeskgarden/react-accordions';
import { getColor } from '@zendeskgarden/react-theming';
import { Link } from 'gatsby';
import React, { FC, useState } from 'react';
import { css } from 'styled-components';
import { StyledNavigationLink } from '../StyledNavigationLink';
import { FAQColumn, FAQContainer, FAQRowContainer, FAQSection, FAQSectionTitle } from './styled';

type FAQAccordionType = {
  id: number;
  title: string;
  detail: JSX.Element;
};

const faqLeftSectionData: FAQAccordionType[] = [
  {
    id: 1,
    title: 'Do you support languages other than English?',
    detail: (
      <p>
        No, we do not support languages other than English in the Starter Package right now. We are
        working on our research to extend to other languages for our Starter and Pro packages. We
        can however offer tailor made multinational support to our Enterprise clients. Read more on
        our Enterprise package.
      </p>
    )
  },
  {
    id: 2,
    title: 'What is Synthesis Time?',
    detail: (
      <p>
        Synthesis Time is time Coqui Studio spends editing audio. When you edit a particular line,
        the play button begins to spin. This indicates that the line is synthesized. The length of
        the rendered audio is discounted from the “Synthesis Time”. If you keep the “automatically
        renew credits” option enabled in your account page, when you run out of credits we will
        automatically charge you for the last package you manually purchased, to make sure you can
        continue using Coqui Studio without interruptions.
      </p>
    )
  },
  {
    id: 3,
    title: 'Will you provide Open Source support for the features of Coqui Studio?',
    detail: (
      <p>
        No. Coqui TTS{' '}
        <span
          css={css`
            text-decoration: underline;
            cursor: pointer;
          `}
          onClick={() => window.open('https://github.com/coqui-ai', '_BLANK')}
        >
          open source repository
        </span>{' '}
        helps developers and generative AI enthusiasts to develop their own text-to-speech models
        for the languages they want. We feel ourselves obliged to share our knowledge with the
        global community. We share our code because we want to facilitate expanding the
        implementation of generative AI technologies for voice generation and help individuals and
        businesses all around the world.
        <br />
        <br />
        Coqui Studio on the other hand, is our commercial product that serves creative industries,
        such as game developers, animation studios, or post-production companies. However, we also
        strongly believe that there could be various commercial (or other) collaboration
        opportunities with our open source community members. We are always open to hear your
        thoughts.{' '}
        <Link
          to="#contact"
          css={css`
            text-decoration: underline;
            cursor: pointer;
          `}
        >
          So drop us a line.
        </Link>{' '}
        Or join us on{' '}
        <span
          css={css`
            text-decoration: underline;
            cursor: pointer;
          `}
          onClick={() => window.open('https://discord.gg/CzxHHp8mtZ', '_BLANK')}
        >
          Discord
        </span>
        . Let&apos;s talk!
      </p>
    )
  }
];

const faqRightSectionData: FAQAccordionType[] = [
  {
    id: 4,
    title: 'How is my work charged?',
    detail: (
      <p>
        You pay for only what you use. As opposed to subscription services, our topup model does not
        charge our users when they do not use Coqui Studio. You have a Free Trial of 30 minutes to
        immediately start to use Coqui Studio for free. In the Starter Package, there are 4 hours or
        50 hours plans available. Once you complete the transaction, your account will be topped up
        with the respective plan of purchase. You can review your balance of available “Synthesis
        Time” in your Account page.
      </p>
    )
  },
  {
    id: 5,
    title: 'Do you have APIs?',
    detail: (
      <p>
        Yes, we do. We provide API access to our Enterprise clients. You may review our Enterprise
        package under the{' '}
        <Link
          to="/how-it-works/#resources"
          css={css`
            text-decoration: underline;
            cursor: pointer;
            color: ${p => getColor('yellow', 600, p.theme)};
          `}
        >
          Resources section
        </Link>
        . If you do not request all of the Enterprise features and services but only the API access,{' '}
        <Link
          to="#contact"
          css={css`
            text-decoration: underline;
            cursor: pointer;
            color: ${p => getColor('yellow', 600, p.theme)};
          `}
        >
          Drop us a line. Let&apos;s talk!
        </Link>
      </p>
    )
  }
];

export const FAQ: FC = () => {
  const [leftSection, setLeftSection] = useState<number[]>([0]);
  const [rightSection, setRightSection] = useState<number[]>([]);

  return (
    <div
      id="faq"
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
      `}
    >
      <FAQContainer>
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
    </div>
  );
};
