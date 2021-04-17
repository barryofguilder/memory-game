import Component from '@glimmer/component';
import { action } from '@ember/object';
import { Tile } from 'memory-game/models/tile';

export interface TileComponentArgs {
  tile: Tile;
  onTileSelected: (tile: Tile) => void;
  readOnly: boolean;
}

export default class TileComponent extends Component<TileComponentArgs> {
  get disabled() {
    return this.args.readOnly || this.args.tile.hasMatch;
  }

  @action
  buttonClicked() {
    if (this.args.onTileSelected) {
      this.args.onTileSelected(this.args.tile);
    }
  }
}
