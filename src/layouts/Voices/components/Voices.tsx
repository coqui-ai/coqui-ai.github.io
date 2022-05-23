/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Link } from 'gatsby';
import { Loading, OrangeButton, TitleBar } from 'layouts/Root/components/Styled';
import styled, { css } from 'styled-components';
import { MusicPlaylist, Trash } from 'iconsax-react';
import { Button } from '@zendeskgarden/react-buttons';
import { DeleteModal } from '../../Root/components/DeleteModal';

const VOICES = gql`
  {
    voices {
      id
      name
      samples_count
    }
  }
`;

const DELETE_VOICE = gql`
  mutation deleteVoice($id: String!) {
    deleteVoice(id: $id) {
      success
      errors
    }
  }
`;

const VoiceList = styled.ul`
  margin: 54px auto;
  width: ${280 * 4 + 14 * 5}px;
  display: flex;
  flex-wrap: wrap;
`;
const VoiceBox = styled.li`
  width: 280px;
  height: 290px;
  margin: 7px;
  flex-shrink: 0;

  background: #012b30;
  border-radius: 8px;
  border: 1px #012b30 solid;
`;
const VoiceTitle = styled.div`
  height: 135px;
  border-bottom: 1px solid rgba(143, 186, 186, 0.1);
  padding: 31px 34px;
  color: white;
  font-size: 24px;
  line-height: 129.52%;
`;
const VoiceControls = styled.div`
  padding: 23px 34px;
  line-height: 54px;
  & a,
  & button {
    display: inline-block;
  }
`;

const SamplesButton = styled(Button)`
  &:hover:enabled {
    background-color: #90bbbb;
    color: #012b30;
    border-color: #012b30;
  }
  font-weight: 700;
  background-color: #012b30;
  color: #90bbbb;
  border-color: #90bbbb;
`;

const TrashButton = props => (
  <Button
    {...props}
    css={css`
      background-color: #303f2c;
      border-color: #303f2c;
      width: 40px;
      padding: 0;
      margin-left: 10px;
    `}
  >
    <Trash
      size="24"
      color="#FF8A65"
      variant="Bold"
      css={css`
        position: relative;
        top: 7px;
      `}
    />
  </Button>
);

export const Voices: React.FC = () => {
  const { data, loading } = useQuery(VOICES);
  const [isDeleting, setIsDeleting] = useState(null);
  const [deleteVoice, deleteVoiceResults] = useMutation(DELETE_VOICE, {
    refetchQueries: [VOICES]
  });

  useEffect(() => {
    if (deleteVoiceResults.data) {
      setIsDeleting(null);
      deleteVoiceResults.reset();
    }
  }, [deleteVoiceResults, setIsDeleting]);

  if (loading) return <Loading />;

  return (
    <>
      {isDeleting ? (
        <DeleteModal
          loading={deleteVoiceResults.loading}
          onDelete={() => deleteVoice({ variables: { id: isDeleting.id } })}
          onCancel={() => setIsDeleting(null)}
        >
          Are you sure you want to delete this voice and your audio files?
        </DeleteModal>
      ) : (
        ''
      )}
      <TitleBar>My Voices</TitleBar>
      <VoiceList>
        {data.voices.map(voice => (
          <VoiceBox key={voice.id}>
            <VoiceTitle>{voice.name}</VoiceTitle>
            <VoiceControls>
              <Link
                to={`/voices/${voice.id}/synthesize`}
                css={css`
                  &,
                  &:hover {
                    text-decoration: none;
                  }
                `}
              >
                <OrangeButton>
                  <MusicPlaylist
                    size={16}
                    color="#012B30"
                    variant="Bold"
                    style={{ marginRight: 10 }}
                  />
                  Synthesize Voice
                </OrangeButton>
              </Link>
              <Link
                to={`/voices/${voice.id}/samples`}
                css={css`
                  &,
                  &:hover {
                    text-decoration: none;
                  }
                `}
              >
                <SamplesButton>{voice.samples_count} Audio Files</SamplesButton>
              </Link>

              <TrashButton onClick={() => setIsDeleting(voice)} />
            </VoiceControls>
          </VoiceBox>
        ))}
      </VoiceList>
    </>
  );
};
