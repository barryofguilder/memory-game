import { tracked } from '@glimmer/tracking';
import { Card } from './card';

export class Tile {
  @tracked hasMatch = false;

  card: Card;

  constructor(card: Card) {
    this.card = card;
  }
}
