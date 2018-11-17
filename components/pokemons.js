import { pokemons } from '../api/pokeapi/pokemon.js';
import './pokemon.js';
import './material/materialCard.js';

class Pokemons extends HTMLElement {
  constructor() {
    super();
    this.state = {};
    this.render();
    this.fetchPokemons();
  }

  async fetchPokemons() {
    const res = await pokemons();
    const json = await res.json();

    while (this.lastChild) {
      this.removeChild(this.lastChild);
    }

    json.results.forEach((pokemon, index) => {
      if (index < 10) {
        const el = document.createElement('pokemon-unit');
        el.pokemon = pokemon;
        el.id = index + 1;
        el.render();

        el.findSprite();

        this.appendChild(el);
      }
    });
  }

  render() {
    for (let i = 0; i < 20; i += 1) {
      const el = document.createElement('material-card');
      el.skeleton = true;
      el.render();
      this.appendChild(el);
    }
  }
}

customElements.define('pokemon-list', Pokemons);

export default Pokemons;
