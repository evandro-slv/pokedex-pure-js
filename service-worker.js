/* eslint no-restricted-globals: "off" */

const cacheName = 'pokedex';
const staticAssets = [
  './',
  './index.html',
  './index.js',
  './index.css',
  './manifest.json',
  './api/pokeapi/pokemon.js',
  './components/material/materialCard.js',
  './components/material/menu.js',
  './components/material/topBar.js',
  './components/material/topBarMenuIcon.js',
  './components/pokemon.js',
  './components/pokemons.js',
  './static/normalize.css',
];

self.addEventListener('install', async () => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);

  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}

self.addEventListener('fetch', async (e) => {
  const { request } = e;
  const url = new URL(request.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(request));
  } else {
    e.respondWith(networkAndCache(request));
  }
});
