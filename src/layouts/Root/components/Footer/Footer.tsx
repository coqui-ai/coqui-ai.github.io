import { Button } from '@zendeskgarden/react-buttons';
import { MediaInput, Message } from '@zendeskgarden/react-forms';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import DOMPurify from 'dompurify';
import { Link } from 'gatsby';
import jsonp from 'jsonp';
import React, { FC, useEffect, useRef, useState } from 'react';
import { css } from 'styled-components';
import toQueryString from 'to-querystring';
import logoLight from './coqui_logo_light_cropped.png';
import discord from './discord_logo.png';
import fb from './facebook_logo.png';
import github from './github_logo.png';
import linkedin from './linkedin.png';
import {
  FooterContainer,
  FooterLinksRow,
  FooterRow,
  FooterSectionColumnLeft,
  FooterSectionColumnMiddle,
  FooterSectionColumnRight,
  FooterSignatureRow,
  FooterSignatureText,
  FooterSignUpTitle,
  FooterSocialsImg,
  FooterSocialsRow,
  FooterStyledLinksItem,
  SaveTimeContainer
} from './styled';
import twitter from './twitter_logo.png';
import yt from './youtube_logo.png';

type FooterPropsType = {
  hasSaveTimeBanner?: boolean;
};

type SignUpType = {
  status?: string | null;
  message?: string | null;
  ajaxURL?: string | null;
};

const url =
  'https://coqui.us1.list-manage.com/subscribe/post?u=6faea2f1f19c814566173ffb0&amp;id=f9b303df7f';

const initialState: SignUpType = {
  status: null,
  message: null,
  ajaxURL: null
};

const SignUp = () => {
  const inputElement: any = useRef();
  const [state, setState] = useState(initialState);

  const getAjaxUrl = (localURL: string) => {
    return localURL.replace('/post?', '/post-json?');
  };

  const subscribe = (formData: Record<string, string>) => {
    const params = toQueryString(formData);
    const ajaxURL = `${getAjaxUrl(url)}&${params}`;

    setState({ status: 'sending', message: null, ajaxURL });
  };

  useEffect(() => {
    if (state.ajaxURL) {
      jsonp(
        state.ajaxURL,
        {
          param: 'c'
        },
        (err: any, data: any) => {
          if (err) {
            setState({
              status: 'error',
              message: err
            });
          } else if (data.result !== 'success') {
            setState({
              status: 'error',
              message: data.msg
            });
          } else {
            setState({
              status: 'success',
              message: data.msg
            });
          }
        }
      );
    }
  }, [state.ajaxURL]);

  const submit = (event: any) => {
    event.preventDefault();
    inputElement.current &&
      inputElement.current.value.indexOf('@') > -1 &&
      subscribe({
        EMAIL: inputElement.current.value
      });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <MediaInput
          end={
            <Button
              onClick={submit}
              role="button"
              css={css`
                border-width: 0;
                background-color: ${p => getColor('yellow', 600, p.theme)};
                color: #fff;
                border-radius: 30px;
                font-weight: 400;
                padding: 18px 24px;
                width: fit-content;
              `}
            >
              Subscribe
            </Button>
          }
          type="email"
          name="member[email]"
          placeholder="Enter your email address"
          ref={inputElement}
          wrapperProps={{
            style: {
              background: '#F9F9F9',
              borderRadius: '50px',
              padding: '8px 12px 8px 24px',
              width: '350px',
              height: '65px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            },
            ...css`
              ${p => mediaQuery('down', 'sm', p.theme)} {
                width: auto;
              }
            `
          }}
          css={css`
            color: #000;
            font-size: 16px;
            &::placeholder {
              font-size: 16px;
              color: #000;
            }

            ${p => mediaQuery('down', 'sm', p.theme)} {
              padding-top: 10px;
              padding-bottom: 10px;
              width: auto;
            }
          `}
        />
        {state.status === 'sending' && <Message validation="success">Sending...</Message>}
        {state.status === 'error' && (
          <Message validation="error">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(state.message) }} />{' '}
          </Message>
        )}
        {state.status === 'success' && (
          <Message validation="success">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(state.message) }} />{' '}
          </Message>
        )}
      </form>
    </div>
  );
};

const Logo: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: left;

        ${p => mediaQuery('down', 'md', p.theme)} {
          flex-grow: 1;
          justify-content: center;
          align-items: center;
        }
      `}
    >
      <Link aria-label="Coqui" to="/">
        <div
          css={`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 125px;
          `}
        >
          <img src={logoLight} alt="coqui logo light" />
        </div>
      </Link>
    </div>
  );
};

// const SaveTime: FC = () => {
//   return <SaveTimeContainer>Hi</SaveTimeContainer>;
// };

export const Footer: FC<FooterPropsType> = ({ hasSaveTimeBanner }) => {
  return (
    <FooterContainer
      id="footer"
      css={css`
        ${p => mediaQuery('down', 'sm', p.theme)} {
          padding: 2rem 1rem;
        }
      `}
      hasBanner={!!hasSaveTimeBanner}
    >
      <FooterRow>
        {/* <SaveTime /> */}
        <FooterSectionColumnLeft
          css={css`
            ${p => mediaQuery('up', 'lg', p.theme)} {
              align-items: flex-start;
              justify-content: flex-start;
            }
          `}
        >
          <Logo />
        </FooterSectionColumnLeft>
        <FooterSectionColumnMiddle
          css={css`
            ${p => mediaQuery('up', 'lg', p.theme)} {
              align-items: flex-end;
            }
            ${p => mediaQuery('up', 'xl', p.theme)} {
              align-items: center;
            }
          `}
        >
          <FooterLinksRow>
            <FooterStyledLinksItem to="/how-it-works">How it works</FooterStyledLinksItem>
            <FooterStyledLinksItem to="/jobs">Jobs</FooterStyledLinksItem>
            <FooterStyledLinksItem to="/privacy">Privacy</FooterStyledLinksItem>
            <FooterStyledLinksItem to="/tos">Terms</FooterStyledLinksItem>
          </FooterLinksRow>
          <FooterSocialsRow>
            <span
              aria-label="Coqui linkedin"
              onClick={() => window.open('https://www.linkedin.com/company/coqui-ai', '_BLANK')}
            >
              <FooterSocialsImg src={linkedin} alt="linkedin logo" />
            </span>
            <span
              aria-label="Coqui Twitter"
              onClick={() => window.open('https://twitter.com/coqui_ai', '_BLANK')}
            >
              <FooterSocialsImg src={twitter} alt="twitter logo" />
            </span>
            <span
              aria-label="Coqui Facebook"
              onClick={() => window.open('https://www.facebook.com/coquiai', '_BLANK')}
            >
              <FooterSocialsImg src={fb} alt="facebook logo" />
            </span>
            <span
              aria-label="Coqui Youtube"
              onClick={() => window.open('https://www.youtube.com/@coqui1027', '_BLANK')}
            >
              <FooterSocialsImg src={yt} alt="youtube logo" />
            </span>
            <span
              aria-label="Coqui Github"
              onClick={() => window.open('https://github.com/coqui-ai', '_BLANK')}
            >
              <FooterSocialsImg src={github} alt="github logo" />
            </span>
            <span
              aria-label="Coqui Discord"
              onClick={() => window.open('https://discord.gg/CzxHHp8mtZ', '_BLANK')}
            >
              <FooterSocialsImg src={discord} alt="discord logo" />
            </span>
          </FooterSocialsRow>
        </FooterSectionColumnMiddle>
        <FooterSectionColumnRight
          css={css`
            ${p => mediaQuery('up', 'lg', p.theme)} {
              align-items: flex-end;
            }
          `}
        >
          <FooterSectionColumnLeft>
            <FooterSignUpTitle>Subscribe to our Newsletter</FooterSignUpTitle>
            <SignUp />
          </FooterSectionColumnLeft>
        </FooterSectionColumnRight>
      </FooterRow>
      <FooterSignatureRow>
        <FooterSignatureText>Made by Atomic Digital Marketing.</FooterSignatureText>
        <FooterSignatureText>
          <a href="https://berlinlovesyou.com/">
            Made with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            in Berlin!
          </a>
        </FooterSignatureText>
        <FooterSignatureText>© Coqui 2023. All Rights Reserved</FooterSignatureText>
      </FooterSignatureRow>
    </FooterContainer>
  );
};
