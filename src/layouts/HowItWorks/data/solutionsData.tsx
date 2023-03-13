import React from 'react';
import { SolutionType } from '../components/Solution/Solution';
import postProdImg from './post_production.png';
import postProdImg2 from './post_production_2.png';
import postProdImg3 from './post_production_3.png';

export const solutionData: Omit<SolutionType, 'index'>[] = [
  {
    sectionTitle: 'VIDEO GAME DEVELOPERS',
    title: 'Solve voice casting problems',
    problem: {
      title: 'Your problem',
      description: (
        <p>
          Use Coqui Studio&apos;s intuitive Audio Manager to easily create game scripts read by your
          choice of fully directable AI voices. Clone Your Voice in seconds to bring your own voice
          into the game, or fuse your voice with AI using our Voice Fusion technology.
          <br />
          <br />
          Your game needs to be engaging, and you&apos;ve got a huge number of characters to voice.
          Your deadline is approaching, and it&apos;s far too expensive to hire voice actors.
          Instead of changing your plans, give your characters the voices they deserve.
        </p>
      )
    },
    solution: {
      title: 'Our Solution',
      description: (
        <p>
          Use Coqui Studio&apos;s intuitive Audio Manager to easily create game scripts read by your
          choice of fully directable AI voices. Clone Your Voice in seconds to bring your own voice
          into the game, or fuse your voice with AI using our Voice Fusion technology.
          <br />
          Not sure what voice to go for? Let us help. With Prompt-to-Voice, type in what you&apos;d
          like your character to sound like, and we will recommend voices to choose from. With
          Emotive Presets and Speech Rate adjustment tools get your expressive outputs fast and
          effectively. Our Advanced Editor offers emotive fine tuning to create the exact voice you
          need. Direct entire Scenes and Export Your Audio for use - all in one place.
        </p>
      )
    },
    imageSrc: postProdImg
  },
  {
    sectionTitle: 'POST-PRODUCTION',
    title: 'Turn a bad recording into the perfect finished product',
    problem: {
      title: 'Your problem',
      description: (
        <p>
          Plosives, proximity issues, background noises,clipping, sibilance... these are the daily
          struggles of any audio engineer dealing with live recordings. When the recording needs to
          be enhanced for digital distribution how do you fix a lost word? Or even multiple seconds
          of a whole sentence? Well, we&apos;ve got an answer.
        </p>
      )
    },
    solution: {
      title: 'Our Solution',
      description: (
        <p>
          Coqui Studio allows you to Clone Your Voice and will replicate it accurately in just 3
          seconds. It can replace missing words, and be matched perfectly with the existing
          recording thanks to the Speech Rate Editor. Utilise the Advanced Editor to tweak Pitch and
          Energy, or delve even deeper with the Phoneme Editor. You can edit singular syllables and
          create the perfect end result from an imperfect recording.
        </p>
      )
    },
    imageSrc: postProdImg2
  },
  {
    sectionTitle: 'VOICEOVER',
    title: 'Instant audio creation',
    problem: {
      title: 'Your problem',
      description: (
        <p>
          You&apos;ve had enough of recording and rerecording your employee onboarding videos. Now
          the compliance team requested 15 more videos. There is an incoming audit. The deadline is
          next week. Not enough? Your German office is now expanding its services to the
          international audience. They have the translations but they need to be localised to
          English. As the head of global e-learning, you simply can&apos;t do it all in time.
        </p>
      )
    },
    solution: {
      title: 'Our Solution',
      description: (
        <p>
          Managers? We&apos;ve got you covered. Coqui Studio has a large selection of AI Voice
          characters that are waiting to be chosen by you, or you can use Clone Voice to use your
          own voice. Pick your preference, paste your text into our Audio Manager and you&apos;ll
          have your audio drafts ready in seconds. Choose emotion presets and use the Timeline
          Editor to add multiple voices and generate entire conversations. That&apos;s it - hours of
          audio created in minutes.
        </p>
      )
    },
    imageSrc: postProdImg3
  }
];
