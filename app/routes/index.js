import Route from '@ember/routing/route';
import { Card } from '../models/card';

const CARDS = [
  new Card(1, '01.jpg', null),
  new Card(2, '02.jpg', null),
  new Card(3, '03.jpg', null),
];

export default class IndexRoute extends Route {
  model() {
    return this._generateTiles();
  }

  _generateTiles() {
    const count = CARDS.length * 2;
    const tiles = [];

    for (let i = 0; i < count; i++) {
      let added = false;

      do {
        let number = this._randomNumber();
        const matches = tiles.filter((tile) => tile.card.id === number);

        if (matches.length < 2) {
          tiles.push({ card: this._findCard(number) });
          added = true;
        }
      } while (added === false);
    }

    return tiles;
  }

  _findCard(id) {
    return CARDS.find((card) => card.id === id);
  }

  _randomNumber() {
    return Math.floor(Math.random() * CARDS.length) + 1;
  }
}
