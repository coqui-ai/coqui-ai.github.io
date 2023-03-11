import { AvatarType } from 'layouts/Home/types/avatar';
import AsyaAnaraSample from 'data/audios/ai-voices/AsyaAnara.wav';
import DamienBlackSample from 'data/audios/ai-voices/DamienBlack.wav';
import KazuhikoAtallahSample from 'data/audios/ai-voices/KazuhikoAtallah.wav';
import TammyGritSample from 'data/audios/ai-voices/TammyGrit.wav';
import VjollcaJohnnieSample from 'data/audios/ai-voices/VjollcaJohnnie.wav';

export const avatarData: AvatarType[] = [
  {
    id: 'BrendaStern',
    name: 'Asya Anara',
    tag: 'Middle Aged',
    characteristics: ['Confident', 'Bold', 'Authoritative', 'Bossy', 'Charismatic'],
    imageSrc: '',
    voiceSample: AsyaAnaraSample
  },
  {
    id: 'CraigGutsy',
    name: 'Damien Black',
    tag: 'Middle Aged',
    characteristics: ['Bold', 'Brave', 'Commanding', 'Heroic', 'Tough'],
    imageSrc: '',
    voiceSample: DamienBlackSample
  },
  {
    id: 'EthanHeedful',
    name: 'Kazuhiko Atallah',
    tag: 'Middle Aged',
    characteristics: ['Reassuring', 'Approachable', 'Helpful', 'Attentive', 'Believable'],
    imageSrc: '',
    voiceSample: KazuhikoAtallahSample
  },
  {
    id: 'GracieWise',
    name: 'Vjollca Johnnie',
    tag: 'Middle Aged',
    characteristics: ['Authoritative', 'Confident', 'Grizzled', 'Corporate', 'Serious'],
    imageSrc: '',
    voiceSample: VjollcaJohnnieSample
  },
  {
    id: 'TammyGrit',
    name: 'Tammy Grit',
    tag: 'Senior',
    characteristics: ['Aggressive', 'Angry', 'Creepy', 'Dangerous', 'Ominous'],
    imageSrc: '',
    voiceSample: TammyGritSample
  }
];
