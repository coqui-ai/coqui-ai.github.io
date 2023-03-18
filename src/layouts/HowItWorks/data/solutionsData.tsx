import React from 'react';
import { SolutionType } from '../components/Solution/Solution';
import { SolutionSectionTitle } from '../components/Solution/styled';
import postProdImg from './post_production.png';
import postProdImg2 from './post_production_2.png';
import postProdImg3 from './post_production_3.png';
import { solutionsImagesLookup } from './solutionsImageLookup';

export const solutionData: Omit<SolutionType, 'index'>[] = [
  {
    navid: 'video-game-developers',
    sectionTitle: 'VIDEO GAME DEVELOPERS',
    title: (
      <SolutionSectionTitle>
        Solve <span>voice casting</span> problems
      </SolutionSectionTitle>
    ),
    problem: {
      title: 'Your problem',
      description: (
        <p>
          Your game needs to be engaging, and you&apos;ve got a huge number of characters to voice.
          Your deadline is approaching, and it&apos;s far too expensive to hire voice actors.
          Instead of changing your plans, give your characters the voices they deserve.
        </p>
      )
    },
    solution: {
      title: 'Our Solution',
      description: phraseClickHandler => (
        <p>
          Use Coqui Studio&apos;s intuitive{' '}
          <span onClick={() => phraseClickHandler('Audio Manager')}>Audio Manager</span> to easily
          create game scripts read by your choice of fully directable AI voices.{' '}
          <span onClick={() => phraseClickHandler('Clone Your Voice')}>Clone Your Voice</span> in
          seconds to bring your own voice into the game, or fuse your voice with AI using our{' '}
          <span onClick={() => phraseClickHandler('Voice Fusion')}>Voice Fusion</span> technology.
          <br />
          Not sure what voice to go for? Let us help. With{' '}
          <span onClick={() => phraseClickHandler('Prompt-to-Voice')}>Prompt-to-Voice</span>, type
          in what you&apos;d like your character to sound like, and we will recommend voices to
          choose from. With{' '}
          <span onClick={() => phraseClickHandler('Emotive Presets')}>Emotive Presets</span> and{' '}
          <span onClick={() => phraseClickHandler('Speech Rate')}>Speech Rate</span> adjustment
          tools get your expressive outputs fast and effectively. Our{' '}
          <span onClick={() => phraseClickHandler('Advanced Editor')}>Advanced Editor</span> offers
          emotive fine tuning to create the exact voice you need. Direct entire Scenes and{' '}
          <span onClick={() => phraseClickHandler('Export Your Audio')}>Export Your Audio</span> for
          use - all in one place.
        </p>
      )
    },
    image: solutionsImagesLookup['Audio Manager']
  },
  {
    navid: 'post-production',
    sectionTitle: 'POST-PRODUCTION',
    title: (
      <SolutionSectionTitle>
        Turn a bad recording into the <span>perfect finished product</span>
      </SolutionSectionTitle>
    ),
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
      description: phraseClickHandler => (
        <p>
          Coqui Studio allows you to{' '}
          <span onClick={() => phraseClickHandler('Clone Your Voice')}>Clone Your Voice</span> and
          will replicate it accurately in just 3 seconds. It can replace missing words, and be
          matched perfectly with the existing recording thanks to the{' '}
          <span onClick={() => phraseClickHandler('Speech Rate')}>Speech Rate</span>. Utilise the{' '}
          <span onClick={() => phraseClickHandler('Advanced Editor')}>Advanced Editor</span> to
          tweak <span onClick={() => phraseClickHandler('Pitch')}>Pitch</span> and{' '}
          <span onClick={() => phraseClickHandler('Energy')}>Energy</span>, or delve even deeper
          with the <span onClick={() => phraseClickHandler('Phenome')}>Phoneme Editor</span>. You
          can edit singular syllables and create the perfect end result from an imperfect recording.
        </p>
      )
    },
    image: solutionsImagesLookup['Voice Clone Person']
  },
  {
    navid: 'voiceover',
    sectionTitle: 'VOICEOVER',
    title: (
      <SolutionSectionTitle>
        <span>Instant</span> audio creation
      </SolutionSectionTitle>
    ),
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
      description: phraseClickHandler => (
        <p>
          Managers? We&apos;ve got you covered. Coqui Studio has a large selection of{' '}
          <span onClick={() => phraseClickHandler('AI Voice')}>AI Voice</span> characters that are
          waiting to be chosen by you, or you can use{' '}
          <span onClick={() => phraseClickHandler('Clone Your Voice Large')}>Clone Voice</span> to
          use your own voice. Pick your preference, paste your text into our{' '}
          <span onClick={() => phraseClickHandler('Audio Manager Large')}>Audio Manager</span> and
          you&apos;ll have your audio drafts ready in seconds. Choose{' '}
          <span onClick={() => phraseClickHandler('Emotion')}>emotion</span> presets and use the
          <span onClick={() => phraseClickHandler('Timeline Editor')}>Timeline Editor</span> to add
          multiple voices and generate entire conversations. That&apos;s it - hours of audio created
          in minutes.
        </p>
      )
    },
    image: solutionsImagesLookup['AI Voice']
  }
];
