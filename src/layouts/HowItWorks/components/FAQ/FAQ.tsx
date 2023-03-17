/* eslint-disable react/jsx-curly-newline */
import { Accordion } from '@zendeskgarden/react-accordions';
import React, { FC, useState } from 'react';
import { css } from 'styled-components';
import { FAQColumn, FAQContainer, FAQRowContainer, FAQSection, FAQSectionTitle } from './styled';

type FAQAccordionType = {
  id: number;
  title: string;
  detail: JSX.Element;
};

const faqLeftSectionData: FAQAccordionType[] = [
  {
    id: 1,
    title: 'Modules',
    detail: (
      <ul
        css={css`
          font-size: 16px;
          line-height: 180%;
          padding-left: 20px;
          list-style: disc;
        `}
      >
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Advanced Editor
          </span>{' '}
          provides the users the ability to adjust the Pitch(*), Energy(*), and duration of a
          synthesized audio right down to the Phoneme(*) level (* see definitions under Features and
          Components)
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Audio Manager
          </span>{' '}
          is the core component of Coqui Studio where the users pick AI voices to synthesize their
          text lines. The module generates emotive audio outputs, using a wide variety of convenient
          features and creative components.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Project Manager
          </span>{' '}
          helps the users can organize and keep control of all their works in the studio
        </li>
      </ul>
    )
  },
  {
    id: 2,
    title: 'Pro Package Benefits',
    detail: (
      <ul
        css={css`
          font-size: 16px;
          line-height: 180%;
          padding-left: 20px;
          list-style: disc;
        `}
      >
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Higher Quality Voice Clones
          </span>{' '}
          will provide access to higher precision cloning that can deliver any voice a user can
          think of.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Multi-user
          </span>{' '}
          features give creative unit leaders the flexibility to distribute parts of a project among
          multiple team members under the same Pro business account.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Multi-lingual Synthesis
          </span>{' '}
          provides the capacity to render audio in multiple languages, ideal for localization use
          cases
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Pro-Level Support
          </span>{' '}
          offers dedicated customer support that ensures you&apos;re not held up by any problems,
          big or small. Our team are ready to help.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Team Collaboration
          </span>{' '}
          enables cooperation among team members, sharing of workload, build supervision and
          approval of scenarios.
        </li>
      </ul>
    )
  },
  {
    id: 3,
    title: 'Voice Cloning Tips and Tricks',
    detail: (
      <>
        <p
          css={css`
            font-weight: 600;
            margin: 8px;
          `}
        >
          Prepare your environment
        </p>
        <ul
          css={css`
            font-size: 16px;
            line-height: 180%;
            padding-left: 20px;
            list-style: disc;
          `}
        >
          <li>
            Keep down background noise to a minimum whilst recording. You should choose a silent
            room to record your training material.
          </li>
          <li>You can cover the head and microphone with a cloth to filter ambient noise.</li>
          <li>
            Covering the sides of your room will avoid sound waves reflecting and creating audio
            artifacts. Thick curtains or drapes may do the trick. You can also speak into your
            curtains if you don&apos;t want to move the room around.
          </li>
          <li>
            If possible, ceiling isolation is also handy. It makes sure the sound does not echo from
            above. Our users have tried placing panels or cardboard egg boxes in their recording
            space.
          </li>
        </ul>
        <p
          css={css`
            font-weight: 600;
            margin: 8px;
          `}
        >
          Gear up for a good quality audio
        </p>
        <ul
          css={css`
            font-size: 16px;
            line-height: 180%;
            padding-left: 20px;
            list-style: disc;
          `}
        >
          <li>
            Not got recording gear? All is not lost. You can record audio using your mobile device.
            Generally, phones have better microphones than webcams for laptops.
          </li>
          <li>
            If you want to invest in recording gear, it is possible to buy an optimal microphone for
            less than 100 USD.
          </li>
          <li>
            Keep a distance from your microphone. One foot (30 cms) is ideal for a better audio
            recording.
          </li>
          <li>
            Cover your mics with a puff or pop filter (available cheap online). This will
            significantly reduce most of the plosives on your recording.
          </li>
        </ul>
        <p
          css={css`
            font-weight: 600;
            margin: 8px;
          `}
        >
          Speak clearly
        </p>
        <ul
          css={css`
            font-size: 16px;
            line-height: 180%;
            padding-left: 20px;
            list-style: disc;
          `}
        >
          <li>Avoid long pauses.</li>
          <li>
            Stuttering or stammered? Try again! You only need a couple of seconds to train your
            clone. Take as much time as you need to keep the speech clear and smooth.
          </li>
        </ul>
        <p
          css={css`
            font-weight: 600;
            margin: 8px;
          `}
        >
          Clones may sound differently
        </p>
        <ul
          css={css`
            font-size: 16px;
            line-height: 180%;
            padding-left: 20px;
            list-style: disc;
          `}
        >
          <li>
            Cloned voices will have an American English accent. Voice cloning copies only the timbre
            of your voice, not the speaking style, language, or dialect.
          </li>
          <li>
            Many of us are not familiar with how their own voice sounds to other people. You can
            download your input voice using the Voice Cloning sidebar.
          </li>
        </ul>
        <p
          css={css`
            font-weight: 600;
            margin: 8px;
          `}
        >
          Check out for more tips
        </p>
        <ul
          css={css`
            font-size: 16px;
            line-height: 180%;
            padding-left: 20px;
            list-style: disc;
          `}
        >
          <li>
            We encourage you to subscribe to our{' '}
            <span
              css={css`
                text-decoration: underline;
                cursor: pointer;
              `}
              onClick={() => window.open('https://www.youtube.com/@coqui1027/videos', '_BLANK')}
            >
              YouTube Channel
            </span>
          </li>
          <li>
            Why not join our{' '}
            <span
              css={css`
                text-decoration: underline;
                cursor: pointer;
              `}
              onClick={() => window.open('https://discord.gg/dUW6Hf9R', '_BLANK')}
            >
              Discord channels
            </span>
            ? You can reach out to us and many other fellow users of Coqui.
          </li>
        </ul>
      </>
    )
  }
];

const faqRightSectionData: FAQAccordionType[] = [
  {
    id: 4,
    title: 'Features and Components',
    detail: (
      <ul
        css={css`
          font-size: 16px;
          line-height: 180%;
          padding-left: 20px;
          list-style: disc;
        `}
      >
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            AI Voice Dropdown
          </span>{' '}
          is on the left hand side of the Line Manager and contains built-in and custom AI voices
          that the user can pick to synthesize the text.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Emotion Presets
          </span>{' '}
          contain predetermined emotions (Neutral, Happy, Angry, Sad, Surprise, and Dull) which the
          users can assign to their text.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Energy
          </span>{' '}
          is the volume of the voice and it can be edited using the Advanced Editor
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Line Manager
          </span>{' '}
          is the core functionality of the Audio Manager, where users type text and it&apos;s
          rendered to AI voice audio.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Phoneme Editor
          </span>{' '}
          is the editing mode with the highest granularity in the Advanced Editor. It’s based on
          “phonemes” of the pronounced text, which correspond to any consonant or vowel sound in a
          word.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Pitch
          </span>{' '}
          is the tone of the voice that indicates whether the voice is high or low. Fine tuning is
          available using the Advanced Editor.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Prompt-to-Voice
          </span>{' '}
          is a custom AI voice feature where users can generate a new voice by just entering a
          description of the voice.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Scene Audio Export
          </span>{' '}
          lets users export all synthesized audio of a scene as one single file.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Scene Editing
          </span>{' '}
          allows the user to manage their scripts, divided by Scenes with Scene Names and Scene
          Descriptions identifying them.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Speech Rate Editor
          </span>{' '}
          is used to edit the speed of synthesized audio i.e how slow or fast the rendered audio
          output will be. This feature is available on each Line.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Take Manager
          </span>{' '}
          lets users save and manage multiple takes on a single Line.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Timeline Editor
          </span>{' '}
          offers users more flexibility to visually manage their Lines of audio, change order of
          Lines, add dramatic pauses, and play all lines in a Scene together.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Voice Cloning
          </span>{' '}
          allows the user to create an artificial simulation of another person&apos;s voice from
          just 3 seconds of an input audio file.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Voice Fusion
          </span>{' '}
          merges two distinct AI voices together to create something totally unique.
        </li>
      </ul>
    )
  },
  {
    id: 5,
    title: 'Enterprise Package Benefits',
    detail: (
      <ul
        css={css`
          font-size: 16px;
          line-height: 180%;
          padding-left: 20px;
          list-style: disc;
        `}
      >
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            All Supported Languages
          </span>{' '}
          service provides a tailormade selection of languages that the customer audio production
          pipeline requires.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            API access
          </span>{' '}
          is available for software development teams to integrate Coqui Studio capabilities to
          their software systems programmatically.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Audit Logs
          </span>{' '}
          are used to log records of events or actions that occur within Coqui Studio.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Custom Integrations
          </span>{' '}
          are available for a user’s needs, to optimise workflow continuity over various softwares
          and platforms.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Premium Quality Voice Clones
          </span>{' '}
          are high-fidelity synthetic voices that mimic the speech and intonation of real people
          chosen by the user.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Role-Based Access (RBAC)
          </span>{' '}
          capability helps the enterprise organization to assign permissions to access to the
          company&apos;s creative resources and pipelines by choosing different user levels.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Script Versioning
          </span>{' '}
          is a process of tracking and managing changes in scripts over time.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Single Sign On (SSO)
          </span>{' '}
          uses the enterprise authentication scheme to allow multiple users to log in to Coqui
          Studio with their own single IDs.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Team Management Tools
          </span>{' '}
          lets teams that collaborate on different creative pipelines (narrative direction,
          localization, audio engineering, animation, post-production etc.) connect.
        </li>
        <li>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            Virtual Private Cloud Hosting
          </span>{' '}
          is a service that hosts Coqui Studio assets and resources on a virtual private cloud
          network that is isolated from other users of the platform.
        </li>
      </ul>
    )
  }
];

export const FAQ: FC = () => {
  const [leftSection, setLeftSection] = useState<number[]>([0]);
  const [rightSection, setRightSection] = useState<number[]>([]);
  return (
    <FAQContainer id="resources">
      <FAQSection>ASK US</FAQSection>
      <FAQSectionTitle>
        <span>Resources</span>
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
