import { pokemons } from '../api/pokeapi/pokemon.js';
import BaseComponent from './BaseComponent.js';
import MaterialCard from './material/MaterialCard.js';
import PokemonUnit from './PokemonUnit.js';

class PokemonList extends BaseComponent {
  constructor(props) {
    super(props);
    this.props = props || {};
    this.props.buffer = this.props.buffer || 20;

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
        this.appendChild(new PokemonUnit({ pokemon, id: index + 1 }));
      }
    });
  }

  render() {
    for (let i = 0; i < this.props.buffer; i += 1) {
      this.appendChild(new MaterialCard({ skeleton: true }));
    }
  }
}

PokemonList.propTypes = {
  buffer: { type: 'number' },
};

customElements.define('pokemon-list', PokemonList);

export default PokemonList;
