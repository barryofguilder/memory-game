export class Card {
  id: number;
  image: string;
  sound: string | null;

  constructor(id: number, image: string, sound: string | null) {
    this.id = id;
    this.image = image;
    this.sound = sound;
  }
}
