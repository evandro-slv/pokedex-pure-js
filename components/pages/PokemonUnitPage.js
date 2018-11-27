import BaseComponent from '../BaseComponent.js';
import * as api from '../../api/pokeapi/pokemon.js';

class PokemonUnitPage extends BaseComponent {
  constructor(props) {
    super(props);
    this.props = props || {};
    this.state = {};
    this.render();

    if (this.props.id) {
      this.findPokemon(this.props.id);
    }
  }

  async findPokemon(id) {
    try {
      const res = await api.pokemonUnit(id);
      const json = await res.json();
      this.state.pokemon = json;
      window.dispatchEvent(new CustomEvent('pokemon-unit-load', {
        detail: {
          title: api.parseName(json.name),
          showReturn: true,
        },
      }));
    } catch (e) {
      this.state.error = e;
    }

    this.render();
  }

  previousPokemon() {
    if (this.props.id > 1) {
      window.location.hash = `#/pokemons/${this.props.id - 1}`;
    }
  }

  nextPokemon() {
    window.location.hash = `#/pokemons/${this.props.id + 1}`;
  }

  render() {
    const buttonList = `
      <footer>
        <button class="material-button ${this.props.id === 1 ? 'disabled' : ''} previous" increment="-1">Previous</button>
        <button class="material-button next" increment="+1">Next</button>
      </footer>
    `;

    if (this.state.error) {
      this.innerHTML = `
        <material-card class="full-width">
          <div class="content">
            <pre>${this.state.error}</pre>
            ${buttonList}
          </div>
        </material-card>
      `;
    } else if (!this.state.pokemon) {
      this.innerHTML = `
        <material-card class="full-width">
          <div class="content loading">
            <h6>...</h6>
            <div class="placeholder"></div>
            <div class="pokemon-types">
              <pokemon-type class="loading">......</pokemon-type>
              <pokemon-type class="loading">......</pokemon-type>
            </div>
            ${buttonList}
          </div>
        </material-card>
      `;
    } else {
      this.innerHTML = `
        <material-card class="full-width">
          <div class="content">
            <h6>${api.parseName(this.state.pokemon.name)}</h6>
            <img src="${this.state.pokemon.sprites.front_default}" alt="${this.state.pokemon.name}" />
            <div class="pokemon-types">
              ${this.state.pokemon.types.map(type => `<pokemon-type class="${type.type.name}">${type.type.name}</pokemon-type>`).join('')}
            </div>
            ${buttonList}
          </div>
        </material-card>
      `;

      // <pre>${JSON.stringify(this.state.pokemon, null, '\t')}</pre>
    }

    this.querySelector('button.next').addEventListener('click', this.nextPokemon.bind(this));
    this.querySelector('button.previous').addEventListener('click', this.previousPokemon.bind(this));
  }
}

PokemonUnitPage.propTypes = {
  id: { type: 'number', isRequired: true },
};

customElements.define('pokemon-unit-page', PokemonUnitPage);

export default PokemonUnitPage;
