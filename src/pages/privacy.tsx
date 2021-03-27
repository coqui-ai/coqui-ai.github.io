/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
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
      <SEO title="Privacy Policy " />
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
                <LG isBold>Privacy Policy of Coqui GmbH</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    This privacy policy applies to data processing by Coqui GmbH (&quot;Coqui&quot;,
                    &quot;Controller&quot;, &quot;we&quot; or &quot;us&quot;).
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    When you visit our website https://coqui.ai/ (&quot;Website&quot;), we collect
                    and process personal data of you, however, only in compliance with the
                    applicable data protection regulations. Personal data is any information
                    relating to an identified or identifiable natural person, e.g. name, address,
                    and email address. When processing your personal data, we observe the applicable
                    data protection laws, in particular the European General Data Protection
                    Regulation (&quot;GDPR&quot;) and the Federal Data Protection Act
                    (&quot;BDSG&quot;).
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    This privacy statement describes which personal data we process, for which
                    purposes and on which legal basis.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>1. Name and Contact Details of the Controller</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>Responsible for the processing of your data is:</LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                `}
              >
                <Paragraph>
                  <LG>
                    <address>
                      Coqui GmbH <br />
                      Tile-Wardenberg-Straße 6 <br />
                      10555 Berlin <br />
                      Germany <br />
                    </address>
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.sm};
                `}
              >
                <Paragraph>
                  <LG>
                    <Span isBold>Telephone:</Span> +49 (0)716 2476 3160 <br />
                    <Span isBold>EMail:</Span> privacy@coqui.ai <br />
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
                  2. Collection and Processing of Personal Data, Purposes of Processing, relevant
                  Legal Basis and Storage Period
                </LG>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>2.1. Informative Use of our Website</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    During the visit on our Website, i.e. if you do not register or otherwise
                    transfer information to us, we only collect data that your browser transmits to
                    our server (so-called server log files), however, processing only occurs to the
                    technically necessary extent. The following information is collected:
                  </LG>
                </Paragraph>
                <Paragraph>
                  <UnorderedList>
                    <UnorderedList.Item>
                      <LG>IP address of the requesting device</LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>date and time of access</LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>name and URL of the accessed file</LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>website from which the access comes (referrer URL)</LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        the browser you use and, if applicable, the operating system of your device
                        as well as the name of the access provider.
                      </LG>
                    </UnorderedList.Item>
                  </UnorderedList>
                </Paragraph>
                <Paragraph>
                  <LG>
                    The legal basis for the collection of this data is Art. 6 para. 1 lit. f) GDPR.
                    Our legitimate interest in collecting this data results from the following
                    purposes:
                  </LG>
                </Paragraph>
                <Paragraph>
                  <UnorderedList>
                    <UnorderedList.Item>
                      <LG>ensuring optimal use of our Website,</LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>ensuring a trouble free connection,</LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>evaluation of system security and stability.</LG>
                    </UnorderedList.Item>
                  </UnorderedList>
                </Paragraph>
                <Paragraph>
                  <LG>
                    The data is deleted as soon as it is no longer required to achieve the purpose
                    for which it was collected. In the case of the collection of data for making the
                    website available to you, this is the case when the respective session has
                    ended. In the case of storage of data in log files, the data is deleted after 6
                    weeks at the latest.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>2.2. Newsletter</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    If you give us your explicit consent, we will send you information about our
                    services and offers by email. For this purpose, we process your email address.
                    When you register for our newsletter, we use the double opt-in procedure. This
                    means that after you have registered with your email address, we will send you
                    an email to the specified email address in which we ask you to confirm that you
                    actually wish to receive the newsletter.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    The legal basis for sending our information is Art. 6 para. 1 lit. a) GDPR. Your
                    consent to receive our newsletter is voluntary. You can withdraw it at any time
                    with effect for the future. You can withdraw by clicking on the
                    &quot;Unsubscribe&quot; link in the respective email newsletter or by sending an
                    informal message to the contact details mentioned in section 1.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>2.3. Contacting us per email</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    When you contact us by email, the data you provide (e.g. your email address,
                    name and telephone number, if applicable) will be processed by us in order to
                    answer your questions.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    We use your data exclusively for the purpose of answering your inquiry. The
                    legal basis for this is Art. 6 para. 1 lit. f) GDPR (legitimate interest of
                    processing inquiries and other requests). Your data will be deleted after
                    processing your request, unless further storage is necessary to properly respond
                    to your inquiry.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>2.4. Optimization of Website</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG isBold>(a) Cookies</LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    On our Website, we use cookies that are temporarily stored in the working memory
                    (&quot;session cookie&quot;) or permanently stored on the hard disk
                    (&quot;permanent cookie&quot;). Cookies are small text files that are
                    automatically created by the browser and stored on your end device (laptop,
                    tablet, smartphone or similar) when you visit our Website. These files allow us
                    to design the Website more efficiently. Most of the cookies we use are Session
                    Cookies, which are only stored in the working memory, but not on your hard
                    drive, and which expire when you close your internet browser and are therefore
                    automatically deleted. Other cookies remain on the device you are using, so that
                    you will be recognized the next time you visit.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    The setting of the aforementioned cookies is necessary for the proper
                    functioning of the Website. We therefore have a legitimate interest in their
                    use. The legal basis for the related data processing is therefore Art. 6 para. 1
                    lit. f) GDPR.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    On the other hand, we use - in each case on the basis of Art. 6 para. 1 lit. a)
                    GDPR - analytical cookies to statistically record the use of the Website and to
                    optimize our offer, as well as marketing cookies to display information and
                    personalized content tailored specifically to you. These cookies are only set if
                    you have expressly consented to them. You can declare your withdrawal at any
                    time by adjusting the cookie settings in your browser.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You can also configure your browser so that no cookies are stored on your device
                    or a notice always appears before a new cookie is set. However, the complete
                    deactivation of cookies can cause that you cannot use all the functions of our
                    Website.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    The storage period of cookies depends on their purpose and is therefore
                    variable. In any case, cookies are automatically deleted after a defined period
                    of time. Below you will find more detailed information on the analytical cookies
                    and marketing cookies used on our Website.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG isBold>(b) Google Analytics</LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    We use Google Analytics, a web analytics service provided by Google Inc, 1600
                    Amphitheatre Parkway, Mountainview, CA 94043, USA (&quot;Google&quot;), to
                    design our services and Website and to optimize them on an ongoing basis.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    In this context, pseudonymised usage profiles are created and cookies are used.
                    The information generated by the cookie about your use of our Website, such as
                    browser type/version, operating system used, referrer URL (the previously
                    visited page), host name of the accessing computer (IP address), time of server
                    request, is transmitted to a Google server in the USA and stored there. The
                    transfer of data to the USA is varied out on the basis of the European Standard
                    Contractual Clauses. The information is used to evaluate the use of the Website,
                    to compile reports on advertising activities and to provide other services
                    associated with the use of the Website and the Internet for the purposes of
                    market research and the design of the Website. Your IP address is anonymised so
                    that an assignment is not possible (so-called IP masking).
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    Data processing in connection with Google Analytics is based on your explicit
                    consent pursuant to Art. 6 para. 1 lit. a) GDPR.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You may reject the setting of cookies by selecting the appropriate settings in
                    your browser. However, we would like to point out that in this case you may not
                    be able to use all functions of the Website to their full extent. You can also
                    prevent the collection of data generated by the cookie and related to your use
                    of the Website (including your IP address) by Google and the processing of this
                    data by Google by downloading and installing the browser plug-in available under
                    the following link:{' '}
                    <Anchor href="http://tools.google.com/dlpage/gaoptout?hl=de">
                      http://tools.google.com/dlpage/gaoptout?hl=de
                    </Anchor>
                    .
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    For more information on data protection with regard to Google Analytics, please
                    visit the website of Google.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <UnorderedList>
                    <UnorderedList.Item>
                      <LG>
                        Data protection overview:{' '}
                        <Anchor href="http://www.google.com/intl/de/analytics/learn/privacy.html">
                          http://www.google.com/intl/de/analytics/learn/privacy.html
                        </Anchor>
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        Privacy statement:{' '}
                        <Anchor href="http://www.google.de/intl/de/policies/privacy">
                          http://www.google.de/intl/de/policies/privacy
                        </Anchor>
                        .
                      </LG>
                    </UnorderedList.Item>
                  </UnorderedList>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>3. Storage period</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    If no other storage periods are specified in the preceding sections, we store
                    and process your personal data as long this is necessary for the aforementioned
                    purposes. If your data is not needed any longer, we will delete the data except
                    we are obliged by statutory law (commercial and tax law) to store the data for
                    time periods determined by the respective statutes.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>4. Recipients or categories of recipients of your personal data</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    We sometimes use external service providers to process your data. These service
                    providers process your data on our behalf, in accordance with our instructions
                    and under our supervision exclusively for the purposes described in this privacy
                    policy. The external service providers can be assigned to the following
                    categories in particular:
                  </LG>
                </Paragraph>
                <Paragraph>
                  <UnorderedList>
                    <UnorderedList.Item>
                      <LG>Email newsletter providers</LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>IT service providers</LG>
                    </UnorderedList.Item>
                  </UnorderedList>
                </Paragraph>
                <Paragraph>
                  <LG>
                    For sending the emails, we use the third-party provider{' '}
                    <Span isBold>MailChimp</Span>, a newsletter platform of the US provider Rocket
                    Science Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308, USA.
                    Email addresses of our newsletter recipients are stored on MailChimp&apos;s
                    servers in the USA. MailChimp uses this information to send and evaluate the
                    newsletters on our behalf. For this reason, we have concluded a data processing
                    agreement with MailChimp.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    The data processing agreement contains a reference to the European Standard
                    Contractual Clauses, which provide a guarantee for the transfer of your personal
                    data to the USA. Furthermore, according to its own information, MailChimp may
                    use the data to optimize or improve its own services, e.g. for the technical
                    optimization of the dispatch and presentation of the newsletters or for
                    commercial purposes to determine from which countries the recipients come.
                    However, MailChimp does not use the data of our newsletter recipients to contact
                    them or to pass the data on to third parties.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You can read the privacy statement of MailChimp at{' '}
                    <Anchor href="https://mailchimp.com/legal/privacy/">
                      https://mailchimp.com/legal/privacy/
                    </Anchor>
                    .
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>5. Data Security</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    We use appropriate technical and organizational measures to protect stored
                    personal data against manipulation, partial or complete loss and unauthorized
                    access by third parties. Our security measures are continuously improved in line
                    with technological developments.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>6. Your Rights</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    In relation to the processing of your personal data, you are entitled to the
                    following rights:
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG isBold>6.1. Right to Information pursuant to Art. 15 GDPR</LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You have the right to receive information from us about whether and which data
                    we process about you. This includes information on how long and for what purpose
                    we process the data, the source of the data and the recipients or categories of
                    recipients to whom we pass on the data. We can also provide you with a copy of
                    this data.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG isBold>6.2. Right to Rectification pursuant to Art. 16 GDPR</LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You have the right to request that we rectify information about you that is not
                    or no longer accurate without delay. In addition, you can request that we
                    complete your incomplete personal data. If required by law, we will also inform
                    third parties of this rectification if we have disclosed your personal data to
                    them.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG isBold>6.3. Right to Deletion pursuant to Art. 17 GDPR</LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You have the right to request that we delete your personal data without delay if
                    one of the following cases applies:
                  </LG>
                </Paragraph>
                <Paragraph>
                  <UnorderedList>
                    <UnorderedList.Item>
                      <LG>
                        your data is no longer necessary for the purposes for which it was collected
                        or otherwise processed or the purpose has been achieved;
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        you withdraw your consent and there is no other legal basis for the
                        processing;
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        you object to the processing and there are no prevailing legitimate grounds
                        for the processing; in the case of the use of personal data for direct
                        marketing, a mere objection by you to the processing is sufficient;
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>your personal data has been processed unlawfully;</LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        the deletion of your personal data is necessary to comply with a legal
                        obligation under European Union law or the law of a member state to which we
                        are subject.
                      </LG>
                    </UnorderedList.Item>
                  </UnorderedList>
                </Paragraph>
                <Paragraph>
                  <LG>
                    Your right to deletion may be restricted on the basis of statutory provisions.
                    This includes in particular the restrictions listed in Article 17 GDPR and
                    Section 35 BDSG.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG isBold>
                    6.4. Right to the Restriction of Processing pursuant to Art. 18 GDPR
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You have the right to request us to restrict the processing of your personal
                    data if one of the following reasons apply:
                  </LG>
                </Paragraph>
                <Paragraph>
                  <UnorderedList>
                    <UnorderedList.Item>
                      <LG>
                        you dispute the correctness of your personal data for a period of time that
                        allows us to verify the correctness of the personal data;
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        the processing is unlawful and you object to the deletion of the personal
                        data and request instead the restriction of the use of your personal data;
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        we no longer need your personal data for the purposes of processing;
                        however, you need them for the assertion, exercise or defence of legal
                        claims, or
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        you have objected to the processing as long as it has not yet been
                        determined whether our legitimate reasons outweigh yours.
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        If you have obtained a restriction on processing under the above list, we
                        will inform you before the restriction is withdrawn.
                      </LG>
                    </UnorderedList.Item>
                  </UnorderedList>
                </Paragraph>
                <Paragraph>
                  <LG isBold>6.5. Right to Data Portability pursuant to Art. 20 GDPR</LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You have the right to obtain personal data concerning you that you have provided
                    to us in a structured, commonly used and machine-readable format and to transmit
                    this data to others. The exercise of this right does not affect your right to
                    deletion.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG isBold>6.6. Right to Object pursuant to Art. 21 GDPR</LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    According to Art. 21 GDPR, you have in particular the right to object to the
                    processing of your data at any time on the grounds of your particular situation,
                    if we base this processing on legitimate interests on Art. 6 para. 1 lit. f)
                    GDPR. If you object, we will no longer process your personal data, except in two
                    cases:
                  </LG>
                </Paragraph>
                <Paragraph>
                  <UnorderedList>
                    <UnorderedList.Item>
                      <LG>
                        we can prove that there are compelling legitimate grounds for the processing
                        which outweigh your interests, rights and freedoms; or
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        the processing serves the assertion, exertion or defence of legal claims.
                      </LG>
                    </UnorderedList.Item>
                  </UnorderedList>
                </Paragraph>
                <Paragraph>
                  <LG>
                    In particular, if we process your personal data for direct marketing, you have
                    the right to object at any time to the processing of your data for the purpose
                    of such marketing. If you object to the processing of your data for direct
                    marketing purposes, we will no longer use your personal data for this purpose.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG isBold>6.7. Right of Withdrawal of Consent pursuant to Art. 7 GDPR</LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    You can withdraw your consent given to us at any time with effect for the
                    future. This withdrawal can be made in the form of an informal notification to
                    the above-mentioned contact addresses. If you withdraw your consent, the
                    legitimacy of the data processing carried out up to that point will not be
                    affected.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG isBold>6.8. Right to file a Complaint with the Supervisory Authority</LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    If you believe that the processing of your data by us violates applicable data
                    protection law, you have the right to file a complaint with one of the competent
                    supervisory authorities. The supervisory authority responsible for us is:
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                `}
              >
                <Paragraph>
                  <LG>
                    <address>
                      Berlin Commissioner for Data Security and Freedom of Information <br />
                      (&quot;Berliner Beauftragte für Datenschutz und Informationsfreiheit&quot;){' '}
                      <br />
                      Friedrichstr. 219 <br />
                      10969 Berlin <br />
                      Germany <br />
                    </address>
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.sm};
                `}
              >
                <Paragraph>
                  <LG>
                    <Span isBold>Telephone:</Span> +49 (0)30 1388 9-0 <br />
                    <Span isBold>Fax:</Span> +49 (0)30 2155 050 <br />
                    <Span isBold>EMail:</Span> mailbox@datenschutz-berlin.de <br />
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
