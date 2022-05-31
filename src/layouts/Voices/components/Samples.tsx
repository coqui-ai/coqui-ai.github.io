/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Link } from 'gatsby';
import { Loading, OrangeButton, TitleBar } from 'layouts/Root/components/Styled';
import styled, { css } from 'styled-components';
import { ArrowCircleDown2, MusicPlaylist, Pause, Trash, VideoCircle } from 'iconsax-react';
import { Button } from '@zendeskgarden/react-buttons';
import { DeleteModal } from '../../Root/components/DeleteModal';
import { useManyPlayers } from './MediaPlayers';

const SAMPLES = gql`
  query Samples($voice_id: String!) {
    voice(id: $voice_id) {
      id
      name
    }
    samples(voice_id: $voice_id) {
      id
      name
      audio_url
    }
  }
`;

const DELETE_SAMPLE = gql`
  mutation deleteSample($id: String!) {
    deleteSample(id: $id) {
      success
      errors
    }
  }
`;

const SampleList = styled.ul`
  margin: 54px auto;
  width: 80%;
`;
const SampleBox = styled.li`
  width: 100%;

  height: 134px;

  background: #012b30;
  border-radius: 8px;
  border: 1px #012b30 solid;
  margin-bottom: 18px;
`;
const SampleTitle = styled.div`
  height: 64px;
  border-bottom: 1px solid #5eae91;
  padding: 20px 38px;
  color: white;
  font-size: 24px;
  font-weight: 600;
`;
const SampleControls = styled.div`
  height: 70px;
  display: flex;
`;
const SampleControl = styled.div`
  flex-grow: ${props => props.grow || 0};
  padding: 25px 38px;
  color: #5eae91;
  border-right: 1px solid #5eae91;
  &:last-of-type {
    border-right: none;
  }
`;

export const Samples: React.FC = ({ voice_id }) => {
  const { data, loading } = useQuery(SAMPLES, { variables: { voice_id } });

  const [isDeleting, setIsDeleting] = useState(null);
  const [deleteSample, deleteSampleResults] = useMutation(DELETE_SAMPLE, {
    update: cache => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'samples',
        args: { voice_id }
      });
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'voices'
      });
    }
  });
  const { currentTrack, Player } = useManyPlayers();

  useEffect(() => {
    if (deleteSampleResults.data) {
      setIsDeleting(null);
      deleteSampleResults.reset();
    }
  }, [deleteSampleResults, setIsDeleting]);

  if (loading) return <Loading />;

  return (
    <>
      {isDeleting ? (
        <DeleteModal
          loading={deleteSampleResults.loading}
          onDelete={() => deleteSample({ variables: { id: isDeleting.id } })}
          onCancel={() => setIsDeleting(null)}
        >
          Are you sure you want to delete this audio sample?
        </DeleteModal>
      ) : (
        ''
      )}
      <TitleBar>Samples for: {data.voice.name}</TitleBar>
      <SampleList>
        {data.samples.map(sample => (
          <SampleBox key={sample.id}>
            <SampleTitle>{sample.name}</SampleTitle>
            <SampleControls>
              <SampleControl
                css={css`
                  padding: 19px 38px;
                `}
              >
                <Player src={sample.audio_url}>
                  {currentTrack === sample.audio_url ? (
                    <Pause size="32" color="#ED8F1C" variant="Bold" />
                  ) : (
                    <VideoCircle size="32" color="#ED8F1C" variant="Bold" />
                  )}
                </Player>
              </SampleControl>
              <SampleControl
                css={css`
                  padding: 16px 38px;
                `}
              >
                <a
                  href={sample.audio_url}
                  css={css`
                    color: unset !important;
                    text-decoration: unset !important;
                  `}
                >
                  Download
                  <ArrowCircleDown2
                    size="24"
                    color="#5EAE91"
                    variant="Bold"
                    css={css`
                      min-height: 24px;
                      position: relative;
                      top: 7px;
                      margin-left: 7px;
                    `}
                  />
                </a>
              </SampleControl>
              <SampleControl grow={1}></SampleControl>
              <SampleControl
                css={css`
                  padding: 19px 19px;
                `}
              >
                <Trash
                  onClick={() => setIsDeleting(sample)}
                  size="32"
                  color="#CC3340"
                  variant="Bold"
                />
              </SampleControl>
            </SampleControls>
          </SampleBox>
        ))}
      </SampleList>
    </>
  );
};
