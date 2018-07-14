class Selector {
  constructor(selector_string, type_constructor = String) {
    this.selector_string = selector_string;
    this.type_constructor = type_constructor;
  }

  get value() {
    return this.type_constructor(document.querySelector(this.selector_string).value);
  }
}

export default Selector;
