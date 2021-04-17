import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Tile } from 'memory-game/models/tile';

export interface CardComponentArgs {
  tile: Tile;
}

export default class CardComponent extends Component<CardComponentArgs> {
  @tracked isFaceUp = false;

  @action
  buttonClicked() {
    this.isFaceUp = !this.isFaceUp;
  }
}
