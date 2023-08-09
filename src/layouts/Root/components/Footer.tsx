/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { ReactComponent as FacebookIcon } from '@zendeskgarden/svg-icons/src/12/facebook-fill.svg';
import { ReactComponent as GitHubIcon } from '@zendeskgarden/svg-icons/src/12/github-fill.svg';
import { ReactComponent as LinkedInIcon } from '@zendeskgarden/svg-icons/src/12/linkedin-fill.svg';
import { ReactComponent as TwitterIcon } from '@zendeskgarden/svg-icons/src/12/twitter-fill.svg';
import { useSignupLink } from 'layouts/Home/components/SignUpLink';
import MaxWidthLayout from 'layouts/MaxWidth';
import { math } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as DiscordIcon } from '../../../data/images/general/discord-logo.svg';
import { ReactComponent as YouTubeIcon } from '../../../data/images/general/youtube.svg';
import { NewsletterForm } from './NewsletterForm';
import { Link } from './StyledNavigationLink';

const StyledFooterItem = styled(Link)`
  margin-right: ${p => p.theme.space.md};

  ${p => mediaQuery('down', 'sm', p.theme)} {
    margin-left: ${p => p.theme.space.md};
  }
  color: ${p => p.theme.palette.white};

  &:hover,
  &:focus {
    color: inherit;
  }
`;

const StyledLinksItem = styled(Link)`
  margin-top: ${p => p.theme.space.sm};
  color: ${p => p.theme.palette.white};
  font-weight: 400;

  &:hover,
  &:focus {
    color: inherit;
  }
`;

interface IFooterLayoutProps {
  isSubscribing: boolean;
}

const Footer: React.FC<IFooterLayoutProps> = ({ isSubscribing }) => {
  const signupLink = useSignupLink();

  return (
    <footer
      css={css`
        background-color: ${p => getColor('kale', 700, p.theme)};
        padding: ${p => p.theme.space.md};
        line-height: ${p => p.theme.lineHeights.md};
        color: ${p => p.theme.palette.white};
        font-size: ${p => p.theme.fontSizes.md};
      `}
    >
      <MaxWidthLayout>
        <div
          css={css`
            margin: ${p => p.theme.space.lg} auto ${p => p.theme.space.lg} auto;
            width: 1080px;

            ${p => mediaQuery('down', 'lg', p.theme)} {
              width: 982px;
            }

            ${p => mediaQuery('down', 'md', p.theme)} {
              width: 732px;
            }

            ${p => mediaQuery('down', 'sm', p.theme)} {
              width: 100%;
            }
          `}
        >
          <div
            css={css`
              /* stylelint-disable declaration-block-no-redundant-longhand-properties */
              display: grid;
              grid-template-rows: 1fr 1fr;
              grid-template-columns: 1fr 1fr;
              grid-template-areas: 'col-1 col-2' 'col-3 col-2';
              row-gap: 20px;

              ${p => mediaQuery('down', 'sm', p.theme)} {
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 2fr 1fr;
                grid-template-areas: 'col-1' 'col-2' 'col-3';
                row-gap: 20px;
              }
            `}
          >
            <div
              css={css`
                grid-area: col-1;
                width: 380px;

                ${p => mediaQuery('down', 'md', p.theme)} {
                  width: 320px;
                }

                ${p => mediaQuery('down', 'sm', p.theme)} {
                  width: 350px;
                }
              `}
            >
              <p
                css={css`
                  margin-bottom: 10px;
                  width: 260px;
                  line-height: 140%;
                  font-size: 16px;
                  font-weight: 400;

                  ${p => mediaQuery('down', 'sm', p.theme)} {
                    margin-bottom: 20px;
                  }
                `}
              >
                Sign up with your email address to receive the Coqui newsletter.
              </p>
              <NewsletterForm url="https://coqui.us1.list-manage.com/subscribe/post?u=6faea2f1f19c814566173ffb0&amp;id=f9b303df7f" />
            </div>
            <div css="grid-area: col-3">
              <p
                css={`
                  margin-bottom: 16px;
                  font-weight: 700;
                `}
              >
                Follow us
              </p>
              <div
                css={css`
                  display: flex;
                  padding-bottom: ${p => p.theme.space.md};

                  ${p => mediaQuery('down', 'sm', p.theme)} {
                    flex-direction: row;
                    align-items: center;
                    text-align: center;
                  }
                `}
              >
                {!isSubscribing && (
                  <>
                    <Link aria-label="Coqui on GitHub" to="https://github.com/coqui-ai">
                      <div
                        css={`
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        `}
                      >
                        <GitHubIcon
                          css={css`
                            margin-right: ${p => p.theme.space.lg};
                            width: ${p => p.theme.iconSizes.lg};
                            height: ${p => p.theme.iconSizes.lg};
                            color: ${p => p.theme.palette.moss};
                          `}
                        />
                      </div>
                    </Link>
                    <Link aria-label="Coqui on Twitter" to="https://twitter.com/coqui_ai">
                      <div
                        css={`
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        `}
                      >
                        <TwitterIcon
                          css={css`
                            margin-right: ${p => p.theme.space.lg};
                            width: 30px;
                            height: 30px;
                            color: ${p => p.theme.palette.moss};
                            margin-top: -2px;
                          `}
                        />
                      </div>
                    </Link>
                    <Link aria-label="Coqui on Facebook" to="https://www.facebook.com/coquiai">
                      <div
                        css={`
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        `}
                      >
                        <FacebookIcon
                          css={css`
                            margin-right: ${p => p.theme.space.lg};
                            width: ${p => p.theme.iconSizes.lg};
                            height: ${p => p.theme.iconSizes.lg};
                            color: ${p => p.theme.palette.moss};
                          `}
                        />
                      </div>
                    </Link>
                    <Link
                      aria-label="Coqui on LinkedIn"
                      to="https://www.linkedin.com/company/coqui-ai"
                    >
                      <div
                        css={`
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        `}
                      >
                        <LinkedInIcon
                          css={css`
                            margin-right: ${p => p.theme.space.lg};
                            width: ${p => p.theme.iconSizes.lg};
                            height: ${p => p.theme.iconSizes.lg};
                            color: ${p => p.theme.palette.moss};
                          `}
                        />
                      </div>
                    </Link>
                    <Link aria-label="Coqui on Discord" to="https://discord.gg/CzxHHp8mtZ">
                      <div
                        css={`
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        `}
                      >
                        <DiscordIcon
                          css={css`
                            margin-right: ${p => p.theme.space.lg};
                            width: 32px;
                            height: 32px;
                            color: ${p => p.theme.palette.moss};
                            margin-top: -4px;
                          `}
                        />
                      </div>
                    </Link>
                    <Link aria-label="Coqui on YouTube" to="https://www.youtube.com/@coqui1027">
                      <div
                        css={`
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        `}
                      >
                        <YouTubeIcon
                          css={css`
                            margin-right: ${p => p.theme.space.lg};
                            width: 45px;
                            height: 45px;
                            color: ${p => p.theme.palette.moss};
                            margin-top: -10px;
                          `}
                        />
                      </div>
                    </Link>
                    <Link aria-label="Coqui on YouTube" to="https://www.youtube.com/@coqui1027">
                      <div
                        css={`
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        `}
                      >
                        <YouTubeIcon
                          css={css`
                            margin-top: -5px;
                            color: ${p => p.theme.palette.moss};
                          `}
                        />
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div
              css={`
                grid-area: col-2;
                display: grid;
                grid-template: 100px 130px / 160px 160px;
                row-gap: 20px;
                column-gap: 100px;
                justify-content: end;

                ${p => mediaQuery('down', 'md', p.theme)} {
                  grid-template-columns: 80px 140px;
                }

                ${p => mediaQuery('down', 'sm', p.theme)} {
                  justify-content: start;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                `}
              >
                <p css="font-weight: 700">Product</p>
                <StyledLinksItem to={signupLink}>Coqui Studio</StyledLinksItem>
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                `}
              >
                <p css="font-weight: 700">Resources</p>
                <StyledLinksItem to="/tos">Terms & Conditions</StyledLinksItem>
                <StyledLinksItem to="/privacy">Privacy Policy</StyledLinksItem>
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                `}
              >
                <p css="font-weight: 700">Company</p>
                <StyledLinksItem to="/about">About us</StyledLinksItem>
                <StyledLinksItem to="/blog">Blog</StyledLinksItem>
                <StyledLinksItem to="/jobs">Jobs</StyledLinksItem>
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                `}
              >
                <p css="font-weight: 700">Support</p>
                <StyledLinksItem to="https://discord.gg/CzxHHp8mtZ">Community</StyledLinksItem>
                <StyledLinksItem to="mailto:info@coqui.ai">Contact us</StyledLinksItem>
              </div>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              margin-top: ${p => p.theme.space.md};
              border-top: ${p => p.theme.borders.sm} ${p => getColor('kale', 500, p.theme)};
              padding-top: ${p => p.theme.space.sm};

              ${p => mediaQuery('down', 'sm', p.theme)} {
                flex-direction: column;
                align-items: center;
                text-align: center;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                flex-basis: ${p => math(`${p.theme.iconSizes.md} + ${p.theme.space.md}`)};
                flex-grow: 1;
                align-items: center;
              `}
            >
              <StyledFooterItem to="https://berlinlovesyou.com/">
                Made with{' '}
                <span role="img" aria-label="heart">
                  ❤️
                </span>{' '}
                in Berlin!
              </StyledFooterItem>
            </div>
            <div
              css={css`
                ${p => mediaQuery('down', 'sm', p.theme)} {
                  margin-top: ${p => p.theme.space.sm};
                  width: 100%;
                  text-align: center;
                }
              `}
            >
              © Coqui {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </MaxWidthLayout>
    </footer>
  );
};

export default Footer;
