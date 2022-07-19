/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect } from 'react';

const ClientSide = ({ children }) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      css={css`
        transition: opacity 100ms;
        opacity: ${isClient ? '1.0' : '0.0'};
      `}
    >
      {children}
    </div>
  );
};

export default ClientSide;
