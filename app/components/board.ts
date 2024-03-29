import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { Tile } from 'memory-game/models/tile';
import AudioService from 'memory-game/services/audio';

export interface BoardComponentArgs {
  tiles: Tile[];
}

export default class BoardComponent extends Component<BoardComponentArgs> {
  @service declare audio: AudioService;

  @tracked selectedTiles: Tile[] = [];
  @tracked readOnly = false;
  @tracked elapsedTime = 0;
  @tracked flipCount = 0;

  constructor(owner: unknown, args: BoardComponentArgs) {
    super(owner, args);

    this.audio.load();

    // TODO: Start timer
  }

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

    if (this.selectedTiles.includes(tile)) {
      return;
    }

    this.flipCount++;
    tile.isFaceUp = true;
    this.selectedTiles.push(tile);

    if (this.selectedTiles[0] !== undefined && this.selectedTiles[1] !== undefined) {
      this.readOnly = true;

      if (this.selectedTiles[0].card.id === this.selectedTiles[1].card.id) {
        this.selectedTiles.forEach((tile) => (tile.hasMatch = true));
        this.audio.playSound(this.selectedTiles[0].card.sound);
        this.selectedTiles = [];
      }

      this.readOnly = false;
    }
  }
}
