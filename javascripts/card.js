class Card {
  constructor(template_node, icon, shirt) {
    this.node = Card._create_node(template_node, shirt);
    this.icon = icon;
    this.shirt = shirt;
  }

  static _create_node(template_node, shirt) {
    let node = template_node.cloneNode();
    node.classList.add(shirt);
    node.classList.remove('display-none');
    return node;
  }

  open() {
    this.rotate(() => this.replace_class(this.shirt, this.icon));
    setTimeout(() => this.close(), OPEN_CARD_DURATION);
  }

  close() {
    this.rotate(() => this.replace_class(this.icon, this.shirt));
  }

  hide() {
    setTimeout(() => this.class_on(HIDDEN_CLASS), HIDE_CARD_DELAY);
  }

  replace_class(curr_class, replace_class) {
      this.class_off(curr_class);
      this.class_on(replace_class);
  }

  rotate(between_action) {
    this.constrict();
    setTimeout(() => {
      between_action();
      this.expand();
    }, CARD_ROTATE_DURATION);
  }

  class_on(node_class) {
    this.node.classList.add(node_class);
  }

  class_off(node_class) {
    this.node.classList.remove(node_class);
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
