/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getCookieConsentValue } from 'react-cookie-consent';
import TagManager from 'react-gtm-module';

export const consentedToGoogleAnalytics = () => {
  if (getCookieConsentValue()) {
    TagManager.initialize({
      gtmId: 'GTM-WLMK6W9'
    });

    const redditScript = document.createElement('script');

    redditScript.innerHTML = `
      !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','t2_gfvxpqe7', {"optOut":false,"useDecimalCurrencyValues":true,"aaid":"<AAID-HERE>","email":"<EMAIL-HERE>","externalId":"<EXTERNAL-ID-HERE>","idfa":"<IDFA-HERE>"});rdt('track', 'PageVisit');
    `;
    document.head.appendChild(redditScript);

    const twitterScript = document.createElement('script');

    twitterScript.innerHTML = `
      !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
      },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
      a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
      twq('config','ocbev');
    `;
    document.head.appendChild(twitterScript);
  }
};
