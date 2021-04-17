import Route from '@ember/routing/route';
import { Tile } from 'memory-game/models/tile';
import { Card } from 'memory-game/models/card';

const CARDS = [
  new Card(1, '01.jpg', '01.m4a'),
  new Card(2, '02.jpg', '02.m4a'),
  new Card(3, '03.jpg', '03.m4a'),
  new Card(4, '04.jpg', '04.m4a'),
  new Card(5, '05.jpg', '05.m4a'),
];

export default class IndexRoute extends Route {
  model() {
    return this._generateTiles();
  }

  _generateTiles(): Tile[] {
    const count = CARDS.length * 2;
    const tiles: Tile[] = [];

    for (let i = 0; i < count; i++) {
      let added = false;

      do {
        let number = this._randomNumber();
        const matches = tiles.filter((tile) => tile.card.id === number);

        if (matches.length < 2) {
          const card = this._findCard(number);

          if (card) {
            tiles.push(new Tile(card));
            added = true;
          }
        }
      } while (added === false);
    }

    return tiles;
  }

  _findCard(id: number): Card | undefined {
    return CARDS.find((card) => card.id === id);
  }

  _randomNumber(): number {
    return Math.floor(Math.random() * CARDS.length) + 1;
  }
}
