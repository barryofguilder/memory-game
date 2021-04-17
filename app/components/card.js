import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CardComponent extends Component {
  @tracked isFaceUp = false;

  @action
  buttonClicked() {
    this.isFaceUp = !this.isFaceUp;
  }
}
