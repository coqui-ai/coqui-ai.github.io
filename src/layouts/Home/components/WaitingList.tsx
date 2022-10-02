/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';

export const WaitingList = () => {
  useEffect(() => {
    const viralLoopsScript = document.createElement('script');

    viralLoopsScript.src = 'https://app.viral-loops.com/widgetsV2/core/loader.js';
    document.head.appendChild(viralLoopsScript);
  });

  return (
    <div
      css="
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 800px;
      "
    >
      <form-widget ucid="DCEXiNZKeRKwCdGXgpwGdgMavPk" />
    </div>
  );
};
