/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import MinWidthLayout from 'layouts/MinWidth';
import { Anchor } from '@zendeskgarden/react-buttons';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { LG, Paragraph, Span } from '@zendeskgarden/react-typography';

import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout>
      <SEO title="Coqui XTTS Commercial License FAQ" />
      <MinWidthLayout>
        <Grid
          gutters="lg"
          css={css`
            ${p => mediaQuery('down', 'md', p.theme)} {
              padding-right: ${p => p.theme.space.lg};
              padding-left: ${p => p.theme.space.lg};
            }
          `}
        >
          <Row>
            <Col
              css={css`
                margin-top: ${p => p.theme.space.base * 40}px;
                margin-bottom: ${p => p.theme.space.base * 40}px;
              `}
            >
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Coqui XTTS Commercial License FAQ</LG>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Q. How do I buy an XTTS Commercial License?</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Here&apos;s the checkout <Anchor href="https://t.co/F2OsCp00iI">link</Anchor>.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Q. Is this a one-time $365 or $1 per day purchase?</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>One-time $365. That covers you for 1-year.</LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Q. Which XTTS versions does the license cover?</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    All versions released to-date (v1.x, v2.x), plus any new versions released while
                    your license is active.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Q. Can I sell content that I produced after the license finishes?</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Yes. If you make an audiobook today with XTTS, you can sell that audiobook even
                    after your XTTS license expires.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Q. Do I need the license if my use-case isn&apos;t commercial?</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Nope. If you&apos;re using XTTS non-commercially, it&apos;s free. You&apos;re
                    already covered under the default license (the{' '}
                    <Anchor href="cpml">Coqui Public Model License</Anchor>).
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>
                  Q. Is this licensing for unlimited web-based SaaS API usage or is the license for
                  self-hosting / on-premise / locally running the model?
                </LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    It&apos;s a bring-your-own GPU deal. You can run XTTS on your servers, on a
                    macbook, on a desktop computer... wherever you want. While you have an active
                    license, they&apos;re your model weights, you run them where you want.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Q. If I fine-tune a model, is that covered under the same license?</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Yes. A fine-tuned model is covered under the XTTS commercial license. However,
                    like the base XTTS model, you will always need a license to use any fine-tuned
                    model commercially.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Q. Does the license come with dedicated support?</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    No. However, if you need dedicated support, we&apos;re happy to talk about that
                    under a custom{' '}
                    <Anchor href="mail:licensing@coqui.ai">licensing@coqui.ai</Anchor>
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>
                  Q. Does the license cover shipping the model to customer&apos;s computers? Like a
                  videogame that runs locally on the gamer&apos;s desktop?
                </LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Yes. But you&apos;ll need an active license for your users to upgrade to XTTS
                    new releases.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>
                  Q. My company isn&apos;t generating revenue yet, do we qualify for the license?
                </LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Maybe. If you have both under $1M USD in annual revenue and under $1M USD in
                    funding, then you quality. If you are over that bar, we&apos;re happy to talk
                    about a custom commercial license:{' '}
                    <Anchor href="mail:licensing@coqui.ai">licensing@coqui.ai</Anchor>
                  </LG>
                </Paragraph>
              </Row>
            </Col>
          </Row>
        </Grid>
      </MinWidthLayout>
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default PrivacyPage;
