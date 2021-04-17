import Component from '@glimmer/component';
import { action } from '@ember/object';
import { Tile } from 'memory-game/models/tile';
import { tracked } from '@glimmer/tracking';

export interface BoardComponentArgs {
  tiles: Tile[];
}

export default class BoardComponent extends Component<BoardComponentArgs> {
  @tracked selectedTiles: Tile[] = [];
  @tracked readOnly = false;

  turnOverTiles() {
    this.selectedTiles.forEach((tile) => (tile.isFaceUp = false));
    this.selectedTiles = [];
  }

  @action
  tileSelected(tile: Tile) {
    if (this.selectedTiles.length === 2) {
      // If there are 2 tiles selected, that means they were not matches, so turn them back over.
      this.turnOverTiles();
    }

    tile.isFaceUp = true;
    this.selectedTiles.push(tile);

    if (this.selectedTiles.length === 2) {
      this.readOnly = true;

      if (this.selectedTiles[0].card.id === this.selectedTiles[1].card.id) {
        this.selectedTiles.forEach((tile) => (tile.hasMatch = true));
        this.selectedTiles = [];
      }

      this.readOnly = false;
    }
  }
}
