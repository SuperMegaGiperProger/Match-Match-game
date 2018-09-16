class Selector {
  constructor(selectorString, typeConstructor = String) {
    this.selectorString = selectorString;
    this.typeConstructor = typeConstructor;
  }

  get value() {
    return this.typeConstructor(document.querySelector(this.selectorString).value);
  }
}

export default Selector;
