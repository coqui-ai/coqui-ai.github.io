/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect } from 'react';
import jsonp from 'jsonp';
import SignUpInput from './SignUpInput';
import toQueryString from 'to-querystring';

const initialState = {
  status: null,
  message: null,
  ajaxURL: null
};

export const SignUpForm = (url: string) => {
  const [state, setState] = useState(initialState);

  const getAjaxUrl = (localURL: string) => {
    return localURL.replace('/post?', '/post-json?');
  };

  const subscribe = (formData: Record<string, string>) => {
    const params = toQueryString(formData);
    const ajaxURL = `${getAjaxUrl(url.url)}&${params}`;

    setState({ status: 'sending', message: null, ajaxURL });
  };

  useEffect(() => {
    if (state.ajaxURL) {
      jsonp(
        state.ajaxURL,
        {
          param: 'c'
        },
        (err, data) => {
          if (err) {
            setState({
              status: 'error',
              message: err
            });
          } else if (data.result !== 'success') {
            // eslint-disable-line no-negated-condition
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

  return (
    <SignUpInput
      status={state.status}
      message={state.message}
      onSubmitted={formData => subscribe(formData)}
    />
  );
};

export default SignUpForm;
