import Service from '@ember/service';
import { Howl } from 'howler';

export default class AudioService extends Service {
  playSound(sound: string) {
    const howl = new Howl({
      src: `/sounds/${sound}`,
    });
    howl.play();
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    audio: AudioService;
  }
}
