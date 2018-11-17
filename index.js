import Pokemons from './components/pokemons.js';
import TopBar from './components/material/topBar.js';
import Menu from './components/material/menu.js';

const main = document.querySelector('main');

const menu = new Menu({
  title: 'Pokédex',
  items: [
    { icon: 'bookmarks', title: 'Bookmarks' },
    { icon: 'favorite', title: 'Favorites' },
    { icon: 'history', title: 'History' },
    { icon: 'payment', title: 'Payment' },
  ],
});

main.appendChild(menu);
main.appendChild(new TopBar({ title: 'Pokédex', showMenu: true, menu }));
main.appendChild(new Pokemons());

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
