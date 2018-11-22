import PokemonList from './components/PokemonList.js';
import MaterialTopbar from './components/material/MaterialTopbar.js';
import MaterialMenu from './components/material/MaterialMenu.js';

const main = document.querySelector('main');

const menu = new MaterialMenu({
  title: 'Pokédex',
  items: [
    { icon: 'bookmarks', title: 'Bookmarks' },
    { icon: 'favorite', title: 'Favorites' },
    { icon: 'history', title: 'History' },
    { icon: 'payment', title: 'Payment' },
  ],
});

main.appendChild(menu);
main.appendChild(new MaterialTopbar({ title: 'Pokédex', showMenu: true, menu }));
main.appendChild(new PokemonList());

async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./service-worker.js');
    } catch (e) {
      throw new Error('Service worker registration failed', e);
    }
  }
}

window.addEventListener('load', () => {
  registerServiceWorker();
});
