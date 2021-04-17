import { tracked } from '@glimmer/tracking';
import { Card } from './card';

export class Tile {
  @tracked isFaceUp = false;
  @tracked hasMatch = false;

  card: Card;

  constructor(card: Card) {
    this.card = card;
  }
}
