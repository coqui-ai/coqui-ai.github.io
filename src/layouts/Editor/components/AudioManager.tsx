/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import styled, { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';

const LINES = gql`
  query lines($scene_id: String!) {
    lines(scene_id: $scene_id) {
      id
      text
      voice
      emotion
      emotion_intensity
      order
      speed
      takes
    }
  }
`;


const AudioManager = ({ project_id, scene_id }) => {
  return (
    <p>Project {project_id} - Scene {scene_id}</p>
  );
};

export default AudioManager;
