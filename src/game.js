import CardField from './card_field';
import Card from './card';
import Array from './array_extend';
import { CARD_ROTATE_DURATION, OPEN_CARD_DURATION } from './values';

class Game {
  constructor(icons, card_field_node, card_template_node, card_shirt, card_count) {
    this.icons = icons.take(Math.floor(card_count / 2));
    this.card_template_node = card_template_node;
    this.card_shirt = card_shirt;
    this.field = new CardField(card_field_node);
    this.generate_cards();
    this.open_cards = new Set();
  }

  generate_cards() {
    this.icons.concat(this.icons).shuffle().forEach((icon) => {
      let new_card = new Card(this.card_template_node, icon, this.card_shirt);
      new_card.node.onclick = () => this.open_card(new_card);
      this.field.append(new_card);
    })
  }

  open_card(card) {
    if (this.open_cards.size >= 2) return;
    this.open_cards.add(card);
    card.open();
    if (this.open_cards.size == 2 && this.card_sameness) this.hide_cards();
    else setTimeout(() => this.open_cards.delete(card), CARD_ROTATE_DURATION * 2 + OPEN_CARD_DURATION);
  }

  get card_sameness() {
    let card_a, card_b;
    [card_a, card_b] = Array.from(this.open_cards);
    return card_a.icon == card_b.icon;
  }

  hide_cards() {
    this.open_cards.forEach(card => card.hide());
    this.open_cards.clear();
  }
}

export default Game;
