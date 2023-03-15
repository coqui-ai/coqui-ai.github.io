import audioManagerSrc from './assets/audio_manager.png';
import cloneSrc from './assets/clone.png';
import fusionSrc from './assets/voice_fusion.png';
import promptSrc from './assets/prompt.png';
import emotionSrc from './assets/emotion.png';
import speechSrc from './assets/speech.png';
import advancedSrc from './assets/advanced.png';
import exportSrc from './assets/export.png';
import pitchSrc from './assets/pitch.png';
import aiSrc from './assets/ai.png';
import cloneYourVoiceSrc from './assets/clone_your_voice.png';
import audioManagerLgSrc from './assets/audio_manager_large.png';
import timelineSrc from './assets/timeline_editor.png';
import emotionLgSrc from './assets/emotion_large.png';

export type SolutionsPhraseType =
  | 'Audio Manager'
  | 'Clone Your Voice'
  | 'Voice Fusion'
  | 'Prompt-to-Voice'
  | 'Emotive Presets'
  | 'Speech Rate'
  | 'Advanced Editor'
  | 'Export Your Audio'
  | 'Pitch'
  | 'Energy'
  | 'Audio Manager Large'
  | 'Timeline Editor'
  | 'Clone Your Voice Large'
  | 'Phenome'
  | 'AI Voice'
  | 'Emotion';

export const solutionsImagesLookup = {
  'Audio Manager': {
    imageSrc: audioManagerSrc,
    caption:
      'Audio Manager is the core component of Coqui Studio where the users pick AI voices to perform their text lines.'
  },
  'Audio Manager Large': {
    imageSrc: aiSrc,
    caption:
      'Audio Manager is the core component of Coqui Studio where the users pick AI voices to perform their text lines.'
  },
  'Timeline Editor': {
    imageSrc: timelineSrc,
    caption:
      'Audio Manager is the core component of Coqui Studio where the users pick AI voices to perform their text lines.'
  },
  'Clone Your Voice': {
    imageSrc: cloneSrc,
    caption:
      "Voice Cloning allows the user to create an artificial simulation of another person's voice from just 3 seconds of an input audio file."
  },
  'Clone Your Voice Large': {
    imageSrc: cloneYourVoiceSrc,
    caption:
      "Voice Cloning allows the user to create an artificial simulation of another person's voice from just 3 seconds of an input audio file."
  },
  'Voice Fusion': {
    imageSrc: fusionSrc,
    caption:
      'Voice Fusion merges two distinct AI voices together to create something totally unique.'
  },
  'Prompt-to-Voice': {
    imageSrc: promptSrc,
    caption:
      'Prompt-to-Voice is a custom AI voice feature where users can generate a new voice by just entering a description of the voice.'
  },
  'Emotive Presets': {
    imageSrc: emotionSrc,
    caption:
      'Emotion Presets contain predetermined emotions (Neutral, Happy, Angry, Sad, Surprise, and Dull) which the users can assign to their text.'
  },
  Emotion: {
    imageSrc: emotionLgSrc,
    caption:
      'Emotion Presets contain predetermined emotions (Neutral, Happy, Angry, Sad, Surprise, and Dull) which the users can assign to their text.'
  },
  'Speech Rate': {
    imageSrc: speechSrc,
    caption:
      'Speech Rate Editor is used to edit the speed of spoken audio i.e how slow or fast the rendered audio output will be. This feature is available on each Line.'
  },
  'Advanced Editor': {
    imageSrc: advancedSrc,
    caption:
      'Advanced Editor provides the users the ability to adjust the Pitch(*), Energy(*), and duration of the performed audio right down to the Phoneme(*) level (* see definitions under Features and Components)'
  },
  'Export Your Audio': {
    imageSrc: exportSrc,
    caption:
      'Scene Audio Export lets users export all performed audio of a scene as one single file.'
  },
  Pitch: {
    imageSrc: pitchSrc,
    caption:
      'Pitch is the tone of the voice that indicates whether the voice is high or low. Fine tuning is available using the Advanced Editor.'
  },
  Energy: {
    imageSrc: pitchSrc,
    caption: 'Energy is the volume of the voice and it can be edited using the Advanced Editor'
  },
  Phenome: {
    imageSrc: pitchSrc,
    caption:
      "Phoneme Editor is the editing mode with the finest granularity in the Advanced Editor. It's based on “phonemes” of the pronounced text, which correspond to any consonant or vowel sound in a word."
  },
  'AI Voice': {
    imageSrc: aiSrc,
    caption:
      'AI Voice Dropdown is on the left hand side of the Line Manager and contains built-in and custom AI voices that the user can pick to speak the text.'
  }
};
