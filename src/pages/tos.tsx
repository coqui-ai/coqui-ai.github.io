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
      <SEO title="Coqui Online Platform Terms & Conditions" />
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
                <LG isBold>Coqui Online Platform Terms & Conditions</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>Effective Date: June 3, 2022</LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>1. Parties & Binding Online Terms & Conditions</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Please read these Coqui Online Platform Terms and Conditions (&quot;Terms,&quot;
                    &quot;Terms and Conditions,&quot; and/or &quot;Agreement&quot;) carefully before
                    using our website (coqui.ai) and/or any of our applications contained therein
                    (and/or any of our online services, whether accessed through our website or
                    otherwise, any of the foregoing services, the &quot;Service&quot;) operated by
                    Coqui.ai Corp. (&quot;Coqui&quot;, &quot;us&quot;, &quot;we&quot;, or
                    &quot;our&quot;). This Agreement is by and between Coqui and you, the person or
                    entity accessing and/or using our Service (&quot;you,&quot; &quot;your&quot;).
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    Your access to and use of the Service is conditioned upon your acceptance of and
                    compliance with these Terms. The Service, and the information contained on or
                    through the Service, may be accessed only by, as applicable persons who have
                    been authorized by Coqui to use the Service pursuant to these Terms (an
                    &quot;Authorized User&quot;). By clicking the I AGREE button during account
                    setup, you represent that you are an Authorized User and that you accept these
                    Terms and agree to be bound by them.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    If you, or any entity on whose behalf you are using this Service, do not wish to
                    be bound by these Terms, you must not use the Services. PLEASE READ THESE TERMS
                    & CONDITIONS CAREFULLY BEFORE USING THE SERVICE.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    These Terms apply to all visitors, users and others who wish to access or use
                    the Service. These Terms apply to all versions of the Service.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    By agreeing to these Terms, you also agree to the terms of our privacy policy
                    (&quot;<Link to="/privacy">Privacy Policy</Link>&quot;) simply by accessing or
                    using the Service. If you disagree with any part of the Terms or Privacy Policy,
                    then you do not have permission to access the Service.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>2. Communications</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    By creating an online account on our Service, you agree to subscribe to
                    newsletters, marketing or promotional materials and other information we may
                    send. However, you may opt out of receiving any, or all, of these communications
                    from us by following the unsubscribe link or instructions provided in any email
                    we send.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>3. Audio & Other Content</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Our Service allows you to post, link, store, share and otherwise make available
                    certain information, including in particular, audio containing speech which you
                    may record and upload (&quot;Content&quot;). You are responsible for the Content
                    that you upload or otherwise post on or through the Service, including its
                    legality, reliability, and appropriateness.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    By uploading or posting Content on or through the Service, you represent and
                    warrant that: (i) the Content is yours (you own it) and/or you have the right to
                    use it and the right to grant us the rights and license as provided in these
                    Terms, and (ii) that the posting of your Content on or through the Service does
                    not violate the privacy rights, publicity rights, copyrights, contract rights or
                    any other rights of any person or entity. We reserve the right to terminate your
                    account if we find you to be infringing on a copyright or otherwise violating
                    any of the aforementioned representation and warranties.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    We take no responsibility and assume no liability for Content you or any third
                    party uploads or posts on or through the Service. However, by posting Content
                    using the Service you grant us a perpetual right and license to use, modify,
                    perform, display (if applicable), reproduce, and distribute such Content on and
                    through the Service. Coqui’s Service includes software which (algorithmically or
                    otherwise) generates &quot;models&quot; based on the Content you upload, and
                    stores such models on its servers. Any such models derived from any Content
                    (including speech) which you upload as well as any other derivations from the
                    Content (whether the models, data, usage insight, Feedback, or other
                    derivations) are and shall remain the property of Coqui (the
                    &quot;Derivations&quot;).
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    Coqui has the right but not the obligation to monitor and edit all Content
                    provided by users including your use.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    In addition, any and all access to Content found on or through this Service is
                    reserved solely for Coqui’s control on its Service (or used by others with
                    permission). You may not distribute, modify, transmit, reuse, download, repost,
                    copy, or use said Content, whether in whole or in part, for commercial purposes
                    or for personal gain, without express advance written permission from us.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>4. Accounts</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    When you create an account with us, you guarantee that you are above the age of
                    18 and that the information you provide us is accurate, complete, and current at
                    all times. Inaccurate, incomplete, or obsolete information may result in the
                    immediate termination of your account on the Service.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You are responsible for maintaining the confidentiality of your account,
                    including your password and login credentials, and including but not limited to
                    the restriction of access to your computer and/or account. You agree to accept
                    responsibility for any and all activities or actions that occur under your
                    account and/or password, whether your password is with our Service or a
                    third-party service. You must notify us immediately (by email or otherwise) upon
                    becoming aware of any (actual, threatened, or potential) breach of security or
                    unauthorized use of your account.
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
                  5. Intellectual Property; Acceptable Use & Service Access Restrictions
                </LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    The Service including any of its underlying algorithms (excluding Content
                    provided by Authorized Users of the Service), features and functionality, and
                    any and all improvement and/or Derivations thereto, are and will remain the
                    exclusive property (including intellectual property) of Coqui (and, if
                    applicable, its licensors). The Service is protected by copyright, trademark,
                    and other laws of both the United States and foreign countries. Our trademarks
                    and trade dress may not be used (whether in connection with any product or
                    service or otherwise) without the prior written consent of Coqui and except as
                    permitted herein. You are granted access to the Service under and subject to a
                    restricted and fully revocable license grant by us.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You agree that you will not (a) modify, copy, decompile, disassemble or reverse
                    engineer, or cause any other party to modify, copy, decompile, disassemble or
                    reverse engineer our software, technology, and/or the Service; (b) unless you
                    obtain our explicit permission in advance, sublicense any of our intellectual
                    property to third parties or sell, resell, rent, sublicense or lease the Service
                    to third parties; (c) otherwise violate the license grant or restrictions set
                    forth herein; (d) use the Service to store or transmit malicious code nor upload
                    any Content which you do not have rights in or to; (e) interfere with or disrupt
                    the integrity or performance of the Service or third-party data contained
                    therein, (f) attempt to gain unauthorized access to the Services or their
                    related systems or networks; (g) misappropriate any of our software, technology
                    or other services; (h) use the Service or permit enable or assist a third party
                    to use the Service to create competing products or services.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>6. Confidentiality</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    You may have access to information that is confidential to Coqui, including but
                    not limited to the Service and content, and any information related to the
                    Service and content (“quot;Coqui Confidential Information”quot;). Coqui
                    Confidential Information shall not include information which: (a) is or becomes
                    a part of the public domain through no act or omission of the other party; or
                    (b) was in the other party’s lawful possession prior to the disclosure and had
                    not been obtained by the other party either directly or indirectly from the
                    disclosing party; or (c) is lawfully disclosed to the other party by a third
                    party without restriction on disclosure; or (d) is independently developed by
                    the other party. You agree not to make Coqui’s Confidential Information
                    available in any form to any unauthorized third parties. You agree to take all
                    reasonable steps to ensure that Coqui’s Confidential Information is not
                    disclosed or distributed by its employees or agents in violation of the
                    provisions of this Agreement.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>7. Feedback</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    You may from time-to-time submit feedback, comments, suggestions, questions,
                    ideas, or other information to us concerning the Service or our products,
                    services, technology, techniques, processes or materials (&quot;Feedback&quot;).
                    We may in connection with any of the Service and its products and services
                    freely use, copy, disclose, license, distribute and otherwise exploit such
                    Feedback in any manner without any obligation, payment, royalty or restriction
                    whether based on intellectual property rights or otherwise.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>8. Links to Other Websites/Third Party Services; Third Party Content</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Our Service may contain links to (and/or otherwise inter-operate with) third
                    party web sites or services that are not owned or controlled by Coqui.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    Coqui has no control over, and assumes no responsibility for the content,
                    privacy policies, or practices of any third party web sites or services. We do
                    not warrant the offerings of any of these entities/individuals or their
                    websites.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You acknowledge and agree that Coqui shall not be responsible or liable,
                    directly or indirectly, for any damage or loss caused or alleged to be caused by
                    or in connection with use of or reliance on any such content, goods or services
                    available on or through any such third party web sites or services.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    We strongly advise you to read the terms and conditions and privacy policies of
                    any third party web sites or services that you visit, and use any such third
                    party web sites or services only if you are in agreement with the terms
                    governing those third party services. If you click-through to any third-party
                    services, either directly or indirectly through the Service (collectively, the
                    &quot;Linked Sites&quot;), you acknowledge and agree that you shall be subject
                    to the terms and conditions of usage applicable to such Linked Sites. If you do
                    not comply with a third party service terms and conditions, we may be required
                    to terminate your access to such third party’s content and/or the Service if we
                    cannot separate the third party content from our Service. We shall have no
                    liability for any reduction of or inaccessibility to the Service and you will
                    not be entitled to any remedy as a result of your access termination of either a
                    third party service or our Services where applicable.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>9. Termination</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    We may terminate or suspend your account and bar access to the Service
                    immediately, without prior notice or liability, under our sole discretion, for
                    any reason whatsoever and without limitation, including but not limited to as a
                    result of a breach of any provision under these Terms.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    If you wish to terminate your account, please reach out to your account
                    administrator or <Anchor href="mail:support@coqui.ai">support@coqui.ai</Anchor>
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    All provisions of these Terms which by their nature should survive termination
                    (e.g., Section 5, Section 6, Section 10, and Section 11 hereunder) shall survive
                    termination, including, without limitation, intellectual property/ownership
                    provisions, warranty disclaimers, indemnity and limitations of liability.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>10. Indemnification</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    You agree to defend, indemnify and hold harmless Coqui and its licensee and
                    licensors, and its and their employees, contractors, agents, officers and
                    directors, from and against any and all damages, obligations, losses,
                    liabilities, costs or debt, and expenses (including but not limited to
                    attorney’s fees), for any third party claim against Coqui arising out of a) your
                    use and access of the Service, by you and/or any person using your account and
                    password; b) a breach of these Terms, and/or c) Content posted on the Service.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>11. Limitation of Liability</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    IN NO EVENT SHALL COQUI, NOR ANY OF ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS,
                    SUPPLIERS, AND/OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                    CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF
                    PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, INCLUDING EVEN IF
                    RESULTING FROM (i) YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE
                    SERVICE; (ii) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (iii)
                    ANY CONTENT OBTAINED FROM THE SERVICE; AND (iv) UNAUTHORIZED ACCESS, USE, OR
                    ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY,
                    CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT
                    WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY
                    SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTUAL PURPOSE. IN NO CASE
                    SHALL COQUI’S MAXIMUM LIABILITY ARISING OUT OF THIS AGREEMENT, WHETHER BASED
                    UPON WARRANTY, CONTRACT, NEGLIGENCE, TORT, STRICT LIABILITY OR OTHERWISE, EXCEED
                    IN THE AGGREGATE THE ACTUAL PAYMENTS RECEIVED BY COQUI FROM YOU OVER THE PRIOR
                    TWELVE MONTHS FROM THE DATE ON WHICH A CLAIM AROSE. IN THE EVENT THAT APPLICABLE
                    LAW DOES NOT ALLOW THE LIMITATION OF LIABILITY AS SET FORTH ABOVE IN THIS
                    SECTION OR THE DISCLAIMER SET FORTH BELOW, THIS LIMITATION WILL BE DEEMED
                    MODIFIED SOLELY TO THE EXTENT NECESSARY TO COMPLY WITH APPLICABLE LAW. YOU
                    EXPRESSLY ACKNOWLEDGE AND AGREE THAT COQUI HAS AGREED TO GRANT YOU ACCESS TO THE
                    SERVICE IN PART IN RELIANCE UPON THE LIMITATIONS OF LIABILITY SPECIFIED HEREIN.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>12. Disclaimer</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Your use of the Service is at your sole risk. The Service is provided on an
                    &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided
                    without warranties of any kind, whether express or implied, including, but not
                    limited to, implied warranties of merchantability, fitness for a particular
                    purpose, non-infringement or course of performance.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    Coqui, its subsidiaries, affiliates, and its licensors do not warrant that a)
                    the Service will function uninterrupted, secure or available at any particular
                    time or location; b) any errors or defects will be corrected; c) the Service is
                    free of viruses or other harmful components; or d) the results of using the
                    Service will meet your requirements and/or business objectives.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>13. Governing Law</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    These Terms shall be governed and construed in accordance with the laws of
                    Delaware, United States, without regard to its conflict of law provisions.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    Our failure to enforce any right or provision of these Terms will not be
                    considered a waiver of those rights. If any provision of these Terms is held to
                    be invalid or unenforceable by a court, the remaining provisions of these Terms
                    will remain in effect. These Terms constitute the entire agreement between us
                    and you regarding our Service, and supersede and replace any prior agreements we
                    might have had between us regarding the Service.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>14. Modifications</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    We reserve the right, at our sole discretion, to modify or replace these Terms
                    at any time. In such event we will update our Terms with the revised date. If a
                    change of any of these Terms is material we will provide reasonable notice to
                    you prior to any new terms taking effect, so that you can elect to stop using
                    the Service in the event you do not agree to the material change of these Terms.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    By continuing to access or use our Service after any modifications of our Terms
                    become effective, you agree to be bound by these Terms as amended/revised. If
                    you do not agree to the new terms, you are no longer authorized to use the
                    Service.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>15. Contact Us</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>If you have any questions about these Terms, please contact us:</LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.sm};
                `}
              >
                <Paragraph>
                  <LG>
                    <Span isBold>By email:</Span> support@coqui.ai <br />
                    <Span isBold>
                      By visiting this page on our website:
                    </Span> https://coqui.ai/tos <br />
                    <Span isBold>By mail:</Span>
                    <br />
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-left: ${p => p.theme.space.xs};
                `}
              >
                <Paragraph>
                  <LG>
                    <address>
                      Coqui.ai Corp. <br />
                      Tile-Wardenberg-Straße 6 <br />
                      10555 Berlin <br />
                      Germany <br />
                    </address>
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
