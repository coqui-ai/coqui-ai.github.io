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
                <LG isBold>Privacy Policy of Coqui</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>Effective Date: February 26, 2022</LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    Coqui.ai Corp. (&quot;Coqui,&quot; &quot;Controller,&quot; &quot;we,&quot; or
                    &quot;us&quot;) respects your privacy and is committed to protecting it through
                    compliance with this policy. This policy describes the information we may
                    collect when you use our website, coqui.ai (the &quot;Website&quot;), or our
                    products or services, or when you provide information to us, and our practices
                    for handling that information.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    This policy does not apply to information collected by any third party,
                    including through any third-party mobile application or website or any content
                    (including advertising) that may link to or be accessible from the Website.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    Please read this policy carefully. By accessing or using our Website, products,
                    or services, or by providing information to us, you agree to this privacy
                    policy. This policy may change from time to time (see Changes to Our Privacy
                    Policy, below). Please check this policy periodically for updates.
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
                      Coqui.ai Corp. <br />
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
                  2. Collection and Processing of Personal Data, Purposes of Processing, Relevant
                  Legal Basis and Storage Period
                </LG>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>2.1. Informative use of our Website</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    We may collect any personal information that you voluntarily provide to us,
                    either on our Website or in any other communications with us. Voice or audio
                    data: For example, if you use the &quot;Speaking in Tongues&quot; demo on our
                    Website, we will collect your voice or whatever audio you provide into that
                    function. We will retain that voice or audio only as long as necessary to
                    satisfy the initial purpose for which you provided that voice or audio. By using
                    that function, you consent to our collection and use of your voice and other
                    audio provided for that purpose and to our disclosure of that information to any
                    service provider we use to fulfill that purpose.
                  </LG>
                </Paragraph>
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
                <LG isBold>2.3. Contacting us by email</LG>
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
                    <Anchor href="https://tools.google.com/dlpage/gaoptout?hl=en">
                      https://tools.google.com/dlpage/gaoptout?hl=en
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
                        <Anchor href="https://business.safety.google/compliance/">
                          https://business.safety.google/compliance/
                        </Anchor>
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        Privacy statement:{' '}
                        <Anchor href="https://policies.google.com/privacy">
                          https://policies.google.com/privacy
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
                <LG isBold>2.5 Storage period</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    If no other storage periods are specified in the preceding sections, we store
                    and process your personal data as long as is necessary for the aforementioned
                    purposes. If your data is not needed any longer, we will delete the data except
                    when we are obliged by applicable law to not to delete the data.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>3. Third-party privacy policies and other tracking technologies</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    In visiting or using our Website, or in using our products or services, you may
                    be asked to provide your information to one of our third-party service
                    providers, such as, for example, when you sign up to receive our newsletter. Our
                    Website may link to the websites of other companies or organizations not
                    affiliated with or controlled by us, and some content or applications on our
                    Website are served by third-parties. These third parties may use cookies, alone
                    or in conjunction with web beacons or other tracking technologies, to collect
                    information about you when you use our Website or when you navigate to their
                    websites. The information they collect may be associated with your personal
                    information, or they may collect information, including personal information,
                    about your online activities over time and across different websites and other
                    online services. They may use this information to provide you with
                    interest-based (behavioral) advertising or other targeted content.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    We do not control the privacy practices of third parties. For example, we do not
                    control whether or how third parties may use your information or may use
                    tracking technologies with respect to your information. If you have any
                    questions about a third party’s privacy practices or about an advertisement or
                    other targeted content or how any third party may collect or use your
                    information, you should contact the responsible third party directly.
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
                    We may disclose aggregated information about our users, and information that
                    does not identify any individual, without restriction.
                  </LG>
                </Paragraph>
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
                    Science Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308, USA, and{' '}
                    <Span isBold>Viral Loops</Span> , a newsletter platform located at 422 Richards
                    St, Suite 170, Vancouver, BC V6B 2Z4. Email addresses of our newsletter
                    recipients are stored on MailChimp&apos;s servers in the USA. MailChimp uses
                    this information to send and evaluate the newsletters on our behalf. For this
                    reason, we have concluded a data processing agreement with MailChimp. Also,
                    email addresses of our waiting lists are stored on Viral Loops&apos; servers.
                    Viral Loops uses this information to send and evaluate the waiting lists on our
                    behalf. For this reason, we have concluded a data processing agreement with
                    Viral Loops.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    The data processing agreements contain reference to the European Standard
                    Contractual Clauses, which provide a guarantee for the transfer of your personal
                    data to the USA. Furthermore, according to its own information, MailChimp and/or
                    Viral Loops may use the data to optimize or improve its own services, e.g. for
                    the technical optimization of the dispatch and presentation of the newsletters
                    or for commercial purposes to determine from which countries the recipients
                    come. However, MailChimp and/or Viral Loops does not use the data of our
                    newsletter recipients to contact them or to pass the data on to third parties.
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
                <Paragraph>
                  <LG>
                    You can read the privacy statement of Viral Loops at{' '}
                    <Anchor href="https://viral-loops.com/privacy">
                      https://viral-loops.com/privacy
                    </Anchor>
                    .
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    In addition, we may disclose the information that we collect or you provide as
                    described in this privacy policy to any or all of the following:
                  </LG>
                </Paragraph>
                <Paragraph>
                  <UnorderedList>
                    <UnorderedList.Item>
                      <LG>
                        Our employees, contractors, service providers, software providers,
                        professional advisers, insurers, agents, and other third parties we use to
                        support our business.
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        Any party to fulfill the purpose for which you provided the information.
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        Any party to fulfill any other purpose disclosed by us when you provided the
                        information.
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>Any party with your consent.</LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        Any party to comply with or respond to any court order, subpoena, civil
                        investigative demand, legal process, law, regulation, or any government or
                        regulatory request.
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        Any party to enforce or perform any contracts, agreements, or obligations,
                        including, for example, for billing and collection purposes.
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        A buyer or other successor in the event of a merger, divestiture,
                        restructuring, reorganization, dissolution, or other sale or transfer of
                        some or all of our assets, whether as a going concern or as part of
                        bankruptcy, liquidation, or similar proceeding.
                      </LG>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                      <LG>
                        Any party if we believe disclosure is necessary or appropriate to protect
                        the rights, property, or safety of the Coqui, our employees, our customers,
                        or others. This includes, without limitation, exchanging information with
                        other parties for the purpose of fraud protection and credit risk reduction.
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
                <LG isBold>5. Data Security</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    We have implemented safeguards designed to secure your information, including
                    personal information, from accidental loss and unauthorized access, use,
                    alteration, and disclosure.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    Unfortunately, no website, software, system, or database is completely secure or
                    &quot;hacker proof.&quot; Although we try to protect your information, we cannot
                    guarantee the security of your information. Any transmission of information,
                    including personal information, is at your own risk. You are also responsible
                    for taking reasonable steps to protect your information, including personal
                    information, such as, for example, the password to your email account, against
                    unauthorized disclosure or misuse.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>6. Your California Privacy Rights</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    While it is not our practice to disclose your personal information to third
                    parties for their direct marketing purposes, California Civil Code Section §
                    1798.83 may permit certain users of our Website who are California residents to
                    request certain information regarding our disclosures, if any, of personal
                    information to third parties for their direct marketing purposes. If you are a
                    California resident with an established business relationship with us and would
                    like to request information from us about whether we have shared your
                    information to third parties for their direct marketing purposes during the
                    preceding calendar year, you may direct the request to us in writing at the
                    mailing or email address stated below (see Contact Information, below).
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    California law may require us to inform you how we respond to do-not-track (DNT)
                    signals or other mechanisms that provide consumers the ability to exercise
                    choice regarding the collection of personally identifiable information about an
                    individual consumer&apos;s online activities over time and across third-party
                    websites or online services. Because there is no industry or legal standard for
                    recognizing or honoring DNT signals or other such mechanisms, we don&apos;t
                    respond to them at this time.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>7. Nevada Consumers</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Nevada law gives Nevada consumers the right to request that a company that
                    operates a website for commercial purposes not sell their personal information
                    for monetary consideration to another party for the other party to license or
                    sell the information to additional parties. This right may apply even if
                    personal information is not currently being sold.
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG>
                    We do not sell personal information. However, if you are a Nevada consumer who
                    wishes to exercise a right to request us not to sell your personal information,
                    please direct your request to the email address identified above. We reserve the
                    right to take reasonable measures to verify the authenticity of the request and
                    the identity of the consumer making the request.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>8. Reviewing and Requesting Changes to Your Information</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    If you would like to review and request any changes to your personal information
                    on file with us, you may direct the request to us in writing at the address or
                    email address stated above. We may not accommodate such a request if we believe
                    compliance with the request would violate any law, regulation, contract, or
                    other legal obligation or cause the information to be incorrect. We reserve the
                    right to deny, in our sole discretion and for any reason, any request to review,
                    change, delete, or otherwise access any information in our records. However, if
                    your information is subject to the European Union’s General Data Protection
                    Regulation, you may have additional rights, as set forth in the &quot;Your GDPR
                    Rights&quot; section below.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>9. Your GDPR Rights</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    If we are subject to the requirements of the European Union’s General Data
                    Protection Regulation with respect to your personal data, you are entitled to
                    the following rights:
                  </LG>
                </Paragraph>
                <Paragraph>
                  <LG isBold>9.1. Right to Information pursuant to Art. 15 GDPR</LG>
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
                  <LG isBold>9.2. Right to Rectification pursuant to Art. 16 GDPR</LG>
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
                  <LG isBold>9.3. Right to Deletion pursuant to Art. 17 GDPR</LG>
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
                    9.4. Right to the Restriction of Processing pursuant to Art. 18 GDPR
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
                  <LG isBold>9.5. Right to Data Portability pursuant to Art. 20 GDPR</LG>
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
                  <LG isBold>9.6. Right to Object pursuant to Art. 21 GDPR</LG>
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
                  <LG isBold>9.7. Right of Withdrawal of Consent pursuant to Art. 7 GDPR</LG>
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
                  <LG isBold>9.8. Right to file a Complaint with the Supervisory Authority</LG>
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
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>10. Children Under the Age of 13</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    Our Website is not intended for children under 13 years of age. No one under age
                    13 may provide any personal information on our Website. We do not knowingly
                    collect personal information from children under 13. If you are under 13, do not
                    use or provide any information on our Website or provide any information about
                    yourself to us, including without limitation your name, address, telephone
                    number, or email address. If we learn we have collected or received personal
                    information from a child under 13 without verification of parental consent, we
                    will delete that information. If you believe we might have any information from
                    or about a child under 13, please contact us in writing at the mailing or email
                    address stated above.
                  </LG>
                </Paragraph>
              </Row>
              <Row
                css={css`
                  margin-top: ${p => p.theme.space.lg};
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <LG isBold>11. Changes to Our Privacy Policy</LG>
              </Row>
              <Row>
                <Paragraph>
                  <LG>
                    We will post on this page any changes to our privacy policy. The date the
                    privacy policy was last revised is identified at the top of this page. You are
                    responsible for visiting this privacy policy to check for any changes. Your
                    continued use of our Website, products, or services after we make changes to
                    this policy is deemed to be acceptance of those changes.
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
