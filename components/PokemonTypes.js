
import BaseComponent from './BaseComponent.js';

class PokemonTypes extends BaseComponent {
  constructor(props) {
    super(props);
    this.props = props || {};

    if (this.props.types) {
      this.render();
    } else {
      this.renderLoading();
    }
  }

  render() {
    this.innerHTML = ` 
      ${this.props.types.map(type => `<pokemon-type class="${type.type.name}">${type.type.name}</pokemon-type>`).join('')}
    `;
  }

  renderLoading() {
    this.innerHTML = ` 
      <pokemon-type class="loading">......</pokemon-type>
      <pokemon-type class="loading">......</pokemon-type>
    `;
  }
}

PokemonTypes.propTypes = {
  types: { type: 'Array' },
};

customElements.define('pokemon-types', PokemonTypes);

export default PokemonTypes;
