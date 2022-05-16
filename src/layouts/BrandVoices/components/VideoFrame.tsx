/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';

export const VideoFrame: React.FC = () => {
  return (
    <div
      className="video"
      style={{
        position: 'relative',
        paddingBottom: '56.25%' /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        src="https://streaming.n-tv.de/proxy/abr/2022/04/DVP_RTL_synthetische_Stimmen_-_lange_Ver_220413150742.ism/.mp4?filter=(trackName==%22video-web6%22||trackName==%22audio-web6%22)"
        frameBorder="0"
        title="VideoDemo"
      />
    </div>
  );
};
