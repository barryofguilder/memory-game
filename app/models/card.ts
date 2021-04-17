export class Card {
  id: number;
  image: string;
  sound: string;

  constructor(id: number, image: string, sound: string) {
    this.id = id;
    this.image = image;
    this.sound = sound;
  }
}
