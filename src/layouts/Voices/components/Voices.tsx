/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Link } from 'gatsby';
import { Loading, OrangeButton, TitleBar, CenterContent } from 'layouts/Root/components/Styled';
import styled, { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { MusicPlaylist, Trash, Add } from 'iconsax-react';
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
  margin: 54px auto 54px 20px;
  width: ${280 * 4 + 14 * 5}px;
  display: flex;
  flex-wrap: wrap;

  ${p => mediaQuery('down', 'sm', p.theme)} {
    width: 280px;
    margin: 20px auto 32px auto;
  }
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
const AddVoiceBox = styled.div`
  width: 280px;
  height: 290px;
  flex-shrink: 0;
  margin: auto;
  position: relative;

  background: #fff;
  border-radius: 8px;
  border: 1px #c4c4c4 dashed;
`;
const AddVoiceText = styled.span`
  display: inline-block;
  position: absolute;
  top: 30px;
  height: 80px;
  padding: 23px 30px;
`;
const CreateNewVoiceButton = styled(OrangeButton)`
  &:hover:enabled {
    background-color: white;
    color: #ed8f1c;
    border-color: #ed8f1c;
  }
  margin-left: 64px;
  margin-right: 64px;
  position: absolute;
  bottom: 40px;
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

const AddVoiceLink = (props: {noVoiceText: boolean}) => {
  const addNoVoiceText = props.noVoiceText || false;
  return (
    <Link
      to={`/voices/create`}
      css={css`
        margin: 7px;

        &,
        &:hover {
          text-decoration: none;
        }
      `}
    >
      <AddVoiceBox>
        <AddVoiceText>{addNoVoiceText && "You have not created a voice yet"}</AddVoiceText>
        <Add
          size={90}
          color="#292D32"
          style={{ display: 'block', position: 'absolute', top: '80px', width: '90px', left: 'calc(50% - 45px)' }}
        />
        <CreateNewVoiceButton>Create new voice</CreateNewVoiceButton>
      </AddVoiceBox>
    </Link>
  );
};

const VoiceBoxes = props => {
  return props.voices.map(voice => (
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
            <MusicPlaylist size={16} color="#012B30" variant="Bold" style={{ marginRight: 10 }} />
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

        <TrashButton onClick={() => props.trashClicked(voice)} />
      </VoiceControls>
    </VoiceBox>
  ));
};

export const Voices: React.FC = () => {
  const { data, loading } = useQuery(VOICES);
  const [isDeleting, setIsDeleting] = useState(null);
  const [deleteVoice, deleteVoiceResults] = useMutation(DELETE_VOICE, {
    update: cache => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'voices'
      });
    }
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
      {data.voices.length > 0 ? (
        <VoiceList>
          <VoiceBoxes voices={data.voices} trashClicked={voice => setIsDeleting(voice)} />
          <AddVoiceLink />
        </VoiceList>
      ) : (
        <CenterContent>
          <AddVoiceLink noVoiceText={true} />
        </CenterContent>
      )}
    </>
  );
};
