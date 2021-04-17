import Component from '@glimmer/component';
import { Tile } from 'memory-game/models/tile';

export interface BoardComponentArgs {
  tiles: Tile[];
}

export default class BoardComponent extends Component<BoardComponentArgs> {}
