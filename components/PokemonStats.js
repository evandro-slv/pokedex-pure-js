
import BaseComponent from './BaseComponent.js';

class PokemonStats extends BaseComponent {
  constructor(props) {
    super(props);
    this.props = props || {};

    if (this.props.stats) {
      this.render();
    } else {
      this.renderLoading();
    }
  }

  render() {
    this.innerHTML = `
      <h6>Stats</h6>
      <ul>
        ${this.props.stats.slice(0).reverse().map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
      </ul>
    `;
  }

  renderLoading() {
    this.innerHTML = `
      <h6>Stats</h6>
      <ul>
        <li>hp: ...</li>
        <li>attack: ...</li>
        <li>defense: ...</li>
        <li>special-atack: ...</li>
        <li>special-defense: ...</li>
        <li>speed: ...</li>
      </ul>
    `;
  }
}

PokemonStats.propTypes = {
  stats: { type: 'Array' },
};

customElements.define('pokemon-stats', PokemonStats);

export default PokemonStats;
