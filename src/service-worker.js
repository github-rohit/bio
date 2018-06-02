importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

// Note: Ignore the error that Glitch raises about workbox being undefined.
workbox.skipWaiting();
workbox.clientsClaim();


// workbox.routing.registerRoute(
//   new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
//   workbox.strategies.staleWhileRevalidate()
// );
workbox.routing.registerNavigationRoute('index.html');
workbox.routing.registerRoute(
  new RegExp('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'),
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      })
    ]
  })
);
workbox.routing.registerRoute(
  'https://about-my-bio.firebaseio.com/bio.json',
  workbox.strategies.cacheFirst(),
);

workbox.precaching.precacheAndRoute([]);
