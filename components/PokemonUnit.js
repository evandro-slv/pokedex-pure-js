import { pokemonUnit } from '../api/pokeapi/pokemon.js';
import MaterialCard from './material/MaterialCard.js';
import BaseComponent from './BaseComponent.js';

class PokemonUnit extends BaseComponent {
  constructor(props) {
    super(props);
    this.props = props || {};
    this.findSprite();
    this.render();
  }

  async findSprite() {
    const res = await pokemonUnit(this.props.id);
    const json = await res.json();
    const sprite = json.sprites.front_default;

    const card = this.querySelector('material-card');
    card.sprite = sprite;
  }

  render() {
    this.appendChild(new MaterialCard({
      title: this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1),
    }));
  }
}

PokemonUnit.propTypes = {
  id: { type: 'number' },
  pokemon: { type: 'object' },
};

customElements.define('pokemon-unit', PokemonUnit);

export default PokemonUnit;
