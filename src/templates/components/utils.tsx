/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import md5 from 'md5';
import axios from 'axios';

export const putEmailOnList = (email: string, list: string) => {
  const md5Email = md5(email);

  return axios({
    method: 'put',
    url: `https://jn0tipwgck.execute-api.eu-central-1.amazonaws.com/production/lists/${list}/members/${md5Email}`,
    data: {
      email_address: `${email}`,
      status_if_new: 'subscribed'
    }
  });
};

export const postTagToEmailOnList = (tagName: string, email: string, list: string) => {
  const md5Email = md5(email);

  return axios({
    method: 'post',
    url: `https://jn0tipwgck.execute-api.eu-central-1.amazonaws.com/production/lists/${list}/members/${md5Email}/tags`,
    data: {
      tags: [
        {
          name: 'CoquiSTT',
          status: 'active'
        },
        {
          name: `${tagName}`,
          status: 'active'
        }
      ]
    }
  });
};
