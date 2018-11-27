import BaseComponent from '../BaseComponent.js';
import PokemonList from '../PokemonList.js';

class PokemonListPage extends BaseComponent {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.appendChild(new PokemonList());
  }
}

customElements.define('pokemon-list-page', PokemonListPage);

export default PokemonListPage;
