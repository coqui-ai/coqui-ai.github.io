/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

// Based on https://github.com/sarafhbk/react-audio-recorder/blob/master/src/react-audio-recorder/useAudioRecorder.tsx, but simplified + improved + added the custom MediaRecorder to support wav

import { useState, useRef } from 'react';
import { MediaRecorder, register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';
import { Blob } from 'buffer';

connect().then(register);

enum RECORD_STATUS {
  IDLE = 'idle',
  RECORDING = 'recording',
  PAUSED = 'paused'
}

let mediaRecorder: MediaRecorder;
let localStream: MediaStream;

export const useAudioRecorder = () => {
  const dataArray = useRef<Blob[]>([]);

  const [status, setStatus] = useState<RECORD_STATUS>(RECORD_STATUS.IDLE);
  const [audioResult, setAudioResult] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [timer, setTimer] = useState<number>(0);

  // const {
  //   timer,
  //   handleStartTimer,
  //   handlePauseTimer,
  //   handleResumeTimer,
  //   handleResetTimer
  // } = useTimer();

  const startRecording = () => {
    if (status === RECORD_STATUS.IDLE) {
      try {
        setErrorMessage('');

        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then((mediaStreamObj: MediaStream) => {
            localStream = mediaStreamObj;

            mediaRecorder = new MediaRecorder(mediaStreamObj, { mimeType: 'audio/wav' });

            mediaRecorder.onstart = () => {
              // handleStartTimer();
              setTimer(0);

              setStatus(RECORD_STATUS.RECORDING);
            };
            mediaRecorder.ondataavailable = (event: BlobEvent) => {
              dataArray.current.push(event.data);
              setTimer(t => t + 0.1);
            };
            mediaRecorder.start(100);
          })
          .catch(error => {
            setErrorMessage(error?.message);
          });
      } catch (error) {
        setErrorMessage(error?.message);
      }
    } else {
      return;
    }
  };

  const resumeRecording = () => {
    if (status === RECORD_STATUS.PAUSED) {
      mediaRecorder.resume();
      mediaRecorder.onresume = () => {
        // handleResumeTimer();
        setStatus(RECORD_STATUS.RECORDING);
      };
    } else {
      return;
    }
  };

  const pauseRecording = () => {
    if (status === RECORD_STATUS.RECORDING) {
      mediaRecorder.pause();
      mediaRecorder.onpause = () => {
        // handlePauseTimer();
        setStatus(RECORD_STATUS.PAUSED);
      };
    } else {
      return;
    }
  };

  const stopRecording = () => {
    // eslint-disable-next-line no-negated-condition
    if (status !== RECORD_STATUS.IDLE) {
      mediaRecorder.stop();
      mediaRecorder.onstop = () => {
        // handleResetTimer();
        const audioData = new Blob(dataArray.current, { type: 'audio/wav;' });

        dataArray.current = [];

        setAudioResult(window.URL.createObjectURL(audioData));
        setStatus(RECORD_STATUS.IDLE);
        localStream.getAudioTracks().forEach((track: MediaStreamTrack) => {
          track.stop();
        });
      };
    } else {
      return;
    }
  };

  return {
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    status,
    audioResult,
    errorMessage,
    timer
  };
};
