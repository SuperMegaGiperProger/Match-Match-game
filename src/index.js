import Game from './game';
import Selector from './selector'
import { store_radios } from './radio';
import devicons from 'devicon-2.2/devicon.json';

import './assets/stylesheets/index.css';
import './assets/images/favicon.png';

document.addEventListener('DOMContentLoaded', function() {
  store_radios(sessionStorage);

  document.getElementById('reload_button').onclick = () => window.location.reload();

  const icons = iconClassesList();
  const card_template_node = document.getElementById('template_card');
  const card_shirt_selector = new Selector('input[name=shirt]:checked');
  const card_count_selector = new Selector('input[name="complexity"]:checked', parseInt);
  const card_field_node = document.getElementById('card_field');

  let game = new Game(icons, card_field_node, card_template_node, card_shirt_selector.value, card_count_selector.value);
})

function iconClassesList() {
  return devicons.map(devicon => `devicon-${devicon.name}-${devicon.versions.font[0]}`);
}
