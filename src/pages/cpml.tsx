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
import { LG, Paragraph, Span, UnorderedList } from '@zendeskgarden/react-typography';

import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout>
      <SEO title="Coqui Public Model License 1.0.0" />
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
                `}
              >
                <LG isBold>Coqui Public Model License 1.0.0</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>https://coqui.ai/cpml.txt</LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <Paragraph>
                  <LG>
                    This license allows only non-commercial use of a machine learning model and its
                    outputs.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Acceptance</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    In order to get any license under these terms, you must agree to them as both
                    strict obligations and conditions to all your licenses.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Licenses</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    The licensor grants you a copyright license to do everything you might do with
                    the model that would otherwise infringe the licensor&apos;s copyright in it, for
                    any non-commercial purpose. The licensor grants you a patent license that covers
                    patent claims the licensor can license, or becomes able to license, that you
                    would infringe by using the model in the form provided by the licensor, for any
                    non-commercial purpose.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Non-commercial Purpose</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Non-commercial purposes include any of the following uses of the model or its
                    output, but only so far as you do not receive any direct or indirect payment
                    arising from the use of the model or its output.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <UnorderedList>
                  <UnorderedList.Item>
                    <LG>
                      Personal use for research, experiment, and testing for the benefit of public
                      knowledge, personal study, private entertainment, hobby projects, amateur
                      pursuits, or religious observance.
                    </LG>
                  </UnorderedList.Item>
                  <UnorderedList.Item>
                    <LG>
                      Use by commercial or for-profit entities for testing, evaluation, or
                      non-commercial research and development. Use of the model to train other
                      models for commercial use is not a non-commercial purpose.
                    </LG>
                  </UnorderedList.Item>
                  <UnorderedList.Item>
                    <LG>
                      Use by any charitable organization for charitable purposes, or for testing or
                      evaluation. Use for revenue-generating activity, including projects directly
                      funded by government grants, is not a non-commercial purpose.
                    </LG>
                  </UnorderedList.Item>
                </UnorderedList>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Notices</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    You must ensure that anyone who gets a copy of any part of the model, or any
                    modification of the model, or their output, from you also gets a copy of these
                    terms or the URL for them above.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>No Other Rights</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    These terms do not allow you to sublicense or transfer any of your licenses to
                    anyone else, or prevent the licensor from granting licenses to anyone else.
                    These terms do not imply any other licenses.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Patent Defense</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    If you make any written claim that the model infringes or contributes to
                    infringement of any patent, your licenses for the model granted under these
                    terms ends immediately. If your company makes such a claim, your patent license
                    ends immediately for work on behalf of your company.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Violations</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    The first time you are notified in writing that you have violated any of these
                    terms, or done anything with the model or its output that is not covered by your
                    licenses, your licenses can nonetheless continue if you come into full
                    compliance with these terms, and take practical steps to correct past
                    violations, within 30 days of receiving notice. Otherwise, all your licenses end
                    immediately.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>No Liability</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    AS FAR AS THE LAW ALLOWS, THE MODEL AND ITS OUTPUT COME AS IS, WITHOUT ANY
                    WARRANTY OR CONDITION, AND THE LICENSOR WILL NOT BE LIABLE TO YOU FOR ANY
                    DAMAGES ARISING OUT OF THESE TERMS OR THE USE OR NATURE OF THE MODEL OR ITS
                    OUTPUT, UNDER ANY KIND OF LEGAL CLAIM. IF THIS PROVISION IS NOT ENFORCEABLE IN
                    YOUR JURISDICTION, YOUR LICENSES ARE VOID.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>Definitions</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    The <Span isBold>licensor</Span> is the individual or entity offering these
                    terms, and the <Span isBold>model</Span> is the model the licensor makes
                    available under these terms, including any documentation or similar information
                    about the model.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    <Span isBold>You</Span> refers to the individual or entity agreeing to these
                    terms.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    <Span isBold>Your company</Span> is any legal entity, sole proprietorship, or
                    other kind of organization that you work for, plus all organizations that have
                    control over, are under the control of, or are under common control with that
                    organization. <Span isBold>Control</Span> means ownership of substantially all
                    the assets of an entity, or the power to direct its management and policies by
                    vote, contract, or otherwise. Control can be direct or indirect.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    <Span isBold>Your licenses</Span> are all the licenses granted to you under
                    these terms.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    <Span isBold>Use</Span> means anything you do with the model or its output
                    requiring one of your licenses.
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
