import { pokemonUnit } from '../api/pokeapi/pokemon.js';
import './material/materialCard.js';

class Pokemon extends HTMLElement {
  constructor() {
    super();
    this.state = {};
  }

  async findSprite() {
    const res = await pokemonUnit(this.id);
    const json = await res.json();

    this.state.sprite = json.sprites.front_default;

    const card = this.querySelector('material-card');
    card.sprite = this.state.sprite;
    card.render();
  }

  render() {
    const el = document.createElement('material-card');
    el.setAttribute('title', this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1));
    this.appendChild(el);
    el.render();
  }
}

customElements.define('pokemon-unit', Pokemon);
