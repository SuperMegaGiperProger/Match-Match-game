import CardField from './card_field';
import Card from './card';
import Array from './array_extend';
import { CARD_ROTATE_DURATION, OPEN_CARD_DURATION } from './values';

class Game {
  constructor(icons, cardFieldNode, cardTemplateNode, cardShirt, cardCount) {
    this.icons = icons.take(Math.floor(cardCount / 2));
    this.cardTemplateNode = cardTemplateNode;
    this.cardShirt = cardShirt;
    this.field = new CardField(cardFieldNode);
    this.generateCards();
    this.openCards = new Set();
  }

  generateCards() {
    this.icons.concat(this.icons).shuffle().forEach((icon) => {
      let newCard = new Card(this.cardTemplateNode, icon, this.cardShirt);
      newCard.node.onclick = () => this.openCard(newCard);
      this.field.append(newCard);
    });
  }

  openCard(card) {
    if (this.openCards.size >= 2) return;
    this.openCards.add(card);
    card.open();
    if (this.openCards.size == 2 && this.cardSameness) this.hideCards();
    else setTimeout(() => this.openCards.delete(card), CARD_ROTATE_DURATION * 2 + OPEN_CARD_DURATION);
  }

  get cardSameness() {
    let card_a, card_b;
    [card_a, card_b] = Array.from(this.openCards);
    return card_a.icon == card_b.icon;
  }

  hideCards() {
    this.openCards.forEach(card => card.hide());
    this.openCards.clear();
  }
}

export default Game;
