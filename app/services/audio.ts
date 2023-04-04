import Service from '@ember/service';
import { Howl } from 'howler';

export default class AudioService extends Service {
  howl: Howl | null = null;

  load() {
    this.howl = new Howl({
      src: ['sounds/sprite.mp3'],
      preload: true,
      sprite: {
        '01': [0, 2930],
        '02': [4026, 2900],
        '03': [8006, 2900],
        '04': [11987, 2900],
        '05': [16035, 2900],
        // '06': [],
        '07': [20038, 2900],
        // '08': [],
        // '09': [],
        '10': [24041, 2900],
        '11': [28044, 1500],
        '12': [31019, 2900],
      },
      // Required to work on iOS
      // html5: true,
    });
  }

  playSound(sound: string) {
    this.howl?.play(sound);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    audio: AudioService;
  }
}
