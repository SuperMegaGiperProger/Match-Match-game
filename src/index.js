import Game from './game';
import Selector from './selector';
import { storeRadios } from './radio';
import devicons from 'devicon-2.2/devicon.json';

import './assets/stylesheets/index.css';
import './assets/images/favicon.png';

document.addEventListener('DOMContentLoaded', function() {
  storeRadios(sessionStorage);

  document.getElementById('reload_button').onclick = () => window.location.reload();

  const icons = iconClassesList();
  const cardTemplateNode = document.getElementById('template_card');
  const cardShirtSelector = new Selector('input[name=shirt]:checked');
  const cardCountSelector = new Selector('input[name="complexity"]:checked', parseInt);
  const cardFieldNode = document.getElementById('card_field');

  let game = new Game(icons, cardFieldNode, cardTemplateNode, cardShirtSelector.value, cardCountSelector.value);
});

function iconClassesList() {
  return devicons.map(devicon => `devicon-${devicon.name}-${devicon.versions.font[0]}`);
}
