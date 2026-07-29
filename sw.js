// Service worker mínimo — não faz cache, só existe para o navegador
// permitir a instalação do app na tela inicial (exigência do PWA).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
