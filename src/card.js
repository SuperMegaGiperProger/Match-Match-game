import { CARD_ROTATE_DURATION, OPEN_CARD_DURATION, HIDDEN_CLASS, HIDE_CARD_DELAY } from './values';

class Card {
  constructor(templateNode, icon, shirt) {
    this.node = Card._createNode(templateNode, shirt);
    this.icon = icon;
    this.shirt = shirt;
  }

  static _createNode(templateNode, shirt) {
    let node = templateNode.cloneNode();
    node.classList.add(shirt);
    node.classList.remove('display-none');
    return node;
  }

  open() {
    this.rotate(() => this.replaceClass(this.shirt, this.icon));
    setTimeout(() => this.close(), OPEN_CARD_DURATION);
  }

  close() {
    this.rotate(() => this.replaceClass(this.icon, this.shirt));
  }

  hide() {
    setTimeout(() => this.class_on(HIDDEN_CLASS), HIDE_CARD_DELAY);
  }

  replaceClass(currClass, replaceClass) {
      this.class_off(currClass);
      this.class_on(replaceClass);
  }

  rotate(betweenAction) {
    this.constrict();
    setTimeout(() => {
      betweenAction();
      this.expand();
    }, CARD_ROTATE_DURATION);
  }

  class_on(nodeClass) {
    this.node.classList.add(nodeClass);
  }

  class_off(nodeClass) {
    this.node.classList.remove(nodeClass);
  }

  constrict() {
    this.node.style.transform = 'scaleX(0)';
  }

  expand() {
    this.node.style.transform = 'scaleX(1)';
  }

  destroy() {
    this.node.remove();
  }
}

export default Card;
