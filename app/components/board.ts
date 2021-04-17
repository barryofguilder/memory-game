import Component from '@glimmer/component';
import { action } from '@ember/object';
import { Tile } from 'memory-game/models/tile';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';

export interface BoardComponentArgs {
  tiles: Tile[];
}

export default class BoardComponent extends Component<BoardComponentArgs> {
  @tracked selectedTiles: Tile[] = [];
  @tracked readOnly = false;

  @action
  tileSelected(tile: Tile) {
    this.selectedTiles.push(tile);

    if (this.selectedTiles.length === 2) {
      console.log('2 tiles selected');

      this.readOnly = true;
      let match = false;

      if (this.selectedTiles[0].card.id === this.selectedTiles[1].card.id) {
        console.log('found a match');

        match = true;
        this.selectedTiles.forEach((tile) => (tile.hasMatch = true));
        this.selectedTiles = [];
        this.readOnly = false;
      } else {
        console.log('no match');

        later(
          this,
          () => {
            if (!match) {
              console.log('resetting tiles');
              this.selectedTiles.forEach((tile) => (tile.isFaceUp = false));
              this.selectedTiles = [];
            }
            this.readOnly = false;
          },
          2000
        );
      }
    }
  }
}
