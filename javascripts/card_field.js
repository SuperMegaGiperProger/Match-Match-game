class CardField {
  constructor(node) {
    this.node = node;
    this.cards = [];
  }

  append(card) {
    this.cards.push(card);
    this.node.appendChild(card.node);
  }
}
