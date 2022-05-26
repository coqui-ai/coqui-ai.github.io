/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { Anchor } from '@zendeskgarden/react-buttons';
import { headerStyling, textStyling } from './Styles';
import { LG, XL, XXXL } from '@zendeskgarden/react-typography';
import { Well, Title, Paragraph } from '@zendeskgarden/react-notifications';

export const PricesFAQText: React.FC = () => {
  return (
    <Well>
      <Title
        css={css`
          ${headerStyling}
          margin-bottom: ${p => p.theme.space.lg};
        `}
      >
        <XXXL
          isBold
          css={css`
            ${headerStyling}
            margin-bottom: ${p => p.theme.space.lg};
            text-align: center;
          `}
        >
          Pricing FAQ
        </XXXL>
      </Title>
      <Title>
        <XL isBold>Can I purchase more saved voices and/or more audio clips?</XL>
      </Title>
      <Paragraph>
        <LG
          css={css`
            ${textStyling}
            margin-bottom: ${p => p.theme.space.lg};
          `}
        >
          It is always possible to purchase more saved voices and/or more audio clips. The primary
          way to do so is to subscribe to the next highest tier, e.g. moving from Creator to Pro or
          moving from Pro to Enterprise.
        </LG>
      </Paragraph>
      <Title>
        <XL isBold>Where can I learn more about the Enterprise plan?</XL>
      </Title>
      <Paragraph>
        <LG
          css={css`
            ${textStyling}
            margin-bottom: ${p => p.theme.space.lg};
          `}
        >
          As Enterprise largely consists of bespoke features tuned to your use cases, the best way
          to discover the details of Enterprise is to contact us directly at{' '}
          <Anchor href="mail:enterprise@coqui.ai">enterprise@coqui.ai</Anchor> and we can discuss
          what we can provide for you.
        </LG>
      </Paragraph>
      <Title>
        <XL isBold>How do I go over the saved audio clips per voice limit for my plan?</XL>
      </Title>
      <Paragraph>
        <LG
          css={css`
            ${textStyling}
          `}
        >
          We have found that it is not uncommon for a customer to require a single saved voice to
          have many saved audio clips, so many saved audio clips that it is over the limit of their
          current tier. If the next higher tier, e.g. Pro, allows for the desired number of audio
          clips per voice, the easiest solution is to subscribe to the next highest tier.
        </LG>
      </Paragraph>
      <Paragraph>
        <LG
          css={css`
            ${textStyling}
            margin-bottom: ${p => p.theme.space.lg};
          `}
        >
          However, it may be that the next higher tier, e.g. Pro, still does not have a high enough
          audio clips per voice limit. If this is the case, it is best to contact us directly at{' '}
          <Anchor href="mail:enterprise@coqui.ai">enterprise@coqui.ai</Anchor> and we can discuss
          what we can provide for you.
        </LG>
      </Paragraph>
    </Well>
  );
};
