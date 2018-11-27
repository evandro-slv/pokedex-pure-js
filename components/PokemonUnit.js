import * as api from '../api/pokeapi/pokemon.js';
import BaseComponent from './BaseComponent.js';

class PokemonUnit extends BaseComponent {
  constructor(props) {
    super(props);
    this.props = props || {};
    this.state = {};
    this.render();
    this.findSprite();
  }

  async findSprite() {
    const res = await api.pokemonUnit(this.props.id);
    const json = await res.json();
    const sprite = json.sprites.front_default;

    this.state.sprite = sprite;
    this.render();
  }

  onClickViewInfo() {
    window.location.hash = `#/pokemons/${this.props.id}`;
  }

  render() {
    if (!this.props.id) {
      this.innerHTML = `
        <material-card>
          <div class="content loading">
              <h6>...</h6>
              <div class="placeholder"></div>
          </div>
        </material-card>
      `;
    } else {
      this.innerHTML = `
        <material-card>
          <div class="content">
              <h6>${api.parseName(this.props.pokemon.name)}</h6>
              <div class="placeholder"></div>
              <button class="material-button">View Info</button>
          </div>
        </material-card>
      `;

      if (this.state.sprite) {
        const img = document.createElement('img');
        img.src = this.state.sprite;
        img.alt = this.props.title;
        this.querySelector('.placeholder').remove();
        this.querySelector('.content h6').after(img);
      }

      this.querySelector('button').onclick = this.onClickViewInfo.bind(this);
    }
  }
}

PokemonUnit.propTypes = {
  id: { type: 'number' },
  pokemon: { type: 'object' },
};

// skeleton: { type: 'boolean' },
// title: { type: 'string' },
// sprite: { type: 'string' },
// id: { type: 'number' },

customElements.define('pokemon-unit', PokemonUnit);

export default PokemonUnit;
