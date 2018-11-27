
import BaseComponent from './BaseComponent.js';
import PokemonListPage from './pages/PokemonListPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import PokemonUnitPage from './pages/PokemonUnitPage.js';

class Router extends BaseComponent {
  constructor() {
    super();
    this.changeRoute();
  }

  changeRoute() {
    this.innerHTML = '';
    window.scrollTo(0, 0);

    if (!document.location.hash || document.location.hash === '#/') {
      window.dispatchEvent(new CustomEvent('pokemon-unit-load', {
        detail: {
          title: '',
          showReturn: false,
        },
      }));

      this.render(new PokemonListPage());
    } else if (document.location.hash.match('#/pokemons/[0-9]+')) {
      const matches = /#\/pokemons\/([0-9]+)/.exec(document.location.hash);
      this.render(new PokemonUnitPage({ id: parseInt(matches[1], 10) }));
    } else {
      this.render(new NotFoundPage());
    }
  }

  render(component) {
    this.appendChild(component);
  }
}

window.onpopstate = function onWindowPopState(e) {
  document.querySelector('router-unit').changeRoute(e);
};

customElements.define('router-unit', Router);

export default Router;
