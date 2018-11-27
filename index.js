import Router from './components/Router.js';
import MaterialTopbar from './components/material/MaterialTopbar.js';
import MaterialMenu from './components/material/MaterialMenu.js';

const main = document.querySelector('main');

const menu = new MaterialMenu({
  title: 'Pokédex',
  items: [
    { icon: 'home', title: 'Home', link: '#/' },
    { icon: 'favorite', title: 'Favorites', link: '#/' },
  ],
});

main.appendChild(menu);
main.appendChild(new MaterialTopbar({ title: 'Pokédex', showMenu: true, menu }));
main.appendChild(new Router());

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
