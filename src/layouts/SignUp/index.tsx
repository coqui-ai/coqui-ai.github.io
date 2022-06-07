/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { SignUp } from './components/SignUp';
import StandardWidthLayout from 'layouts/StandardWidth';
import { getColor } from '@zendeskgarden/react-theming';

const SignUpLayout: React.FC = () => {
  return (
    <div
      css={css`
        background-color: ${p => getColor('yellow', 600, p.theme)};
      `}
    >
      <StandardWidthLayout>
        <SignUp />
      </StandardWidthLayout>
    </div>
  );
};

export default SignUpLayout;
