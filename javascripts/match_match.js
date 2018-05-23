document.addEventListener('DOMContentLoaded', function() {
  store_radios(sessionStorage);

  const icons = devicons.map(devicon => `devicon-${devicon.name}-${devicon.versions.font[0]}`);
  const card_template_node = document.getElementById('template_card');
  const card_shirt_selector = new Selector('input[name=shirt]:checked');
  const card_count_selector = new Selector('input[name="complexity"]:checked', parseInt);
  const card_field_node = document.getElementById('card_field');

  let game = new Game(icons, card_field_node, card_template_node, card_shirt_selector.value, card_count_selector.value);
})

class Selector {
  constructor(selector_string, type_constructor = String) {
    this.selector_string = selector_string;
    this.type_constructor = type_constructor;
  }

  get value() {
    return this.type_constructor(document.querySelector(this.selector_string).value);
  }
}
