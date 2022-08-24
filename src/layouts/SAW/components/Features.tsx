/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { css } from 'styled-components';
import { FeaturesVideo } from './FeaturesVideo';
import { FeaturesHeader } from './FeaturesHeader';
import { LG } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';
import StandardWidthLayout from 'layouts/StandardWidth';
import SAWVideoMp4 from '../../../data/videos/product/saw/saw.mp4';
import SAWVideoWebM from '../../../data/videos/product/saw/saw.webm';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';

export const Features: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('import');

  return (
    <div
      css={css`
        background-color: ${p => p.theme.palette.tofu};
      `}
    >
      <StandardWidthLayout>
        <FeaturesHeader />
        <Tabs
          selectedItem={selectedTab}
          onChange={setSelectedTab}
          css={css`
            text-align: center;
          `}
        >
          <TabList>
            <Tab item="import">
              <LG>
                Import Script
                <span
                  css={css`
                    color: ${p => getColor('yellow', 600, p.theme)};
                  `}
                >
                  ➔
                </span>
              </LG>
            </Tab>
            <Tab item="edit">
              <LG>
                Edit Script
                <span
                  css={css`
                    color: ${p => getColor('yellow', 600, p.theme)};
                  `}
                >
                  ➔
                </span>
              </LG>
            </Tab>
            <Tab item="cast">
              <LG>
                Cast AI Voice Actors
                <span
                  css={css`
                    color: ${p => getColor('yellow', 600, p.theme)};
                  `}
                >
                  ➔
                </span>
              </LG>
            </Tab>
            <Tab item="direct">
              <LG>
                Direct AI Voice Actors
                <span
                  css={css`
                    color: ${p => getColor('yellow', 600, p.theme)};
                  `}
                >
                  ➔
                </span>
              </LG>
            </Tab>
            <Tab item="deploy">
              <LG>
                Deploy to Game Engine
                <span
                  role="img"
                  aria-label="Fire"
                  css={css`
                    color: ${p => getColor('red', 600, p.theme)};
                  `}
                >
                  🔥
                </span>
              </LG>
            </Tab>
          </TabList>
          <TabPanel item="import">
            <FeaturesVideo
              mp4File={SAWVideoMp4}
              webmFile={SAWVideoWebM}
              startTime={14.68}
              stopTime={20.44}
            />
          </TabPanel>
          <TabPanel item="edit">
            <FeaturesVideo
              mp4File={SAWVideoMp4}
              webmFile={SAWVideoWebM}
              startTime={20.68}
              stopTime={28.48}
            />
          </TabPanel>
          <TabPanel item="cast">
            <FeaturesVideo
              mp4File={SAWVideoMp4}
              webmFile={SAWVideoWebM}
              startTime={28.68}
              stopTime={36.78}
            />
          </TabPanel>
          <TabPanel item="direct">
            <FeaturesVideo
              mp4File={SAWVideoMp4}
              webmFile={SAWVideoWebM}
              startTime={37.08}
              stopTime={45.44}
            />
          </TabPanel>
          <TabPanel item="deploy">
            <FeaturesVideo
              mp4File={SAWVideoMp4}
              webmFile={SAWVideoWebM}
              startTime={45.66}
              stopTime={51.36}
            />
          </TabPanel>
        </Tabs>
      </StandardWidthLayout>
    </div>
  );
};
