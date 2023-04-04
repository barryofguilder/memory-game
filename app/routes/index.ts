import Route from '@ember/routing/route';
import { Tile } from 'memory-game/models/tile';
import { Card } from 'memory-game/models/card';

const CARDS = [
  new Card(1, '01.jpg', '01.m4a'),
  new Card(2, '02.jpg', '02.m4a'),
  new Card(3, '03.jpg', '03.m4a'),
  new Card(4, '04.jpg', '04.m4a'),
  new Card(5, '05.jpg', '05.m4a'),
  new Card(6, '06.jpg', '05.m4a'),
  new Card(7, '07.jpg', '07.m4a'),
  new Card(8, '08.jpg', '05.m4a'),
  new Card(9, '09.jpg', '05.m4a'),
  new Card(10, '10.jpg', '10.m4a'),
  new Card(11, '11.jpg', '11.m4a'),
  new Card(12, '12.jpg', '12.m4a'),
];
const MAX_CARDS = 8;

export default class IndexRoute extends Route {
  model() {
    return this._generateTiles();
  }

  _generateTiles(): Tile[] {
    const cards: Card[] = [];

    for (let i = 0; i < MAX_CARDS; i++) {
      let added = false;

      do {
        let number = this._randomNumber();
        const card = this._findCard(number);

        if (card && !cards.some((item) => item.id === number)) {
          // Add the card twice.
          cards.push(card);
          cards.push(card);
          added = true;
        }
      } while (added === false);
    }

    const shuffledCards = this._shuffleCards(cards);

    const tiles = shuffledCards.map((card) => new Tile(card));
    tiles.forEach((tile) => (tile.isFaceUp = true));
    return tiles;
  }

  _findCard(id: number): Card | undefined {
    return CARDS.find((card) => card.id === id);
  }

  _randomNumber(): number {
    return Math.floor(Math.random() * CARDS.length) + 1;
  }

  _shuffleCards(cards: Card[]) {
    const shuffled: Card[] = [];

    while (cards.length) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      // @ts-ignore
      shuffled.push(cards[randomIndex]);
      cards.splice(randomIndex, 1);
    }

    return shuffled;
  }
}
