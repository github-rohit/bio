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

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "0831cba6a670e405168b84aa20798347"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.eot",
    "revision": "45c73723862c6fc5eb3d6961db2d71fb"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.svg",
    "revision": "76a4f23c6be74fd309e0d0fd2c27a5de"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.ttf",
    "revision": "7c87870ab40d63cfb8870c1f183f9939"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.woff",
    "revision": "dfb02f8f6d0cedc009ee5887cc68f1f3"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.woff2",
    "revision": "4b5a84aaf1c9485e060c503a0ff8cadb"
  },
  {
    "url": "assets/fonts/FontAwesome.otf",
    "revision": "668743fe7258676f8ef8f9b47d2a623e"
  },
  {
    "url": "assets/images/banner_4.png",
    "revision": "2362109faa3d4d99aa4c0727a80362f4"
  },
  {
    "url": "assets/images/logo_blue.png",
    "revision": "84f052acdd07bd17eee430bade709a27"
  },
  {
    "url": "assets/js/fetch.js",
    "revision": "7bfef8ad2a7b719e67e4495aa746c847"
  },
  {
    "url": "assets/js/promise.js",
    "revision": "94d27232bf21d22b01e8ae7a638644ce"
  },
  {
    "url": "assets/manifest.json",
    "revision": "c7a899f10fd173d5e6952e668db967c3"
  },
  {
    "url": "banner_4.2362109faa3d4d99aa4c.png",
    "revision": "2362109faa3d4d99aa4c0727a80362f4"
  },
  {
    "url": "favicon.ico",
    "revision": "7a95d270c455e9f87ef3f440698285a8"
  },
  {
    "url": "index.html",
    "revision": "fd33f449f842eabb1d0b1d18d4355c35"
  },
  {
    "url": "main.4741e9a0af67f9af8774.js",
    "revision": "831ea55039c7e06271c20b0ab1fa896d"
  },
  {
    "url": "polyfills.f80b7e6581d9215d226e.js",
    "revision": "f0e72134e65c597764db9af7618675ee"
  },
  {
    "url": "runtime.a66f828dca56eeb90e02.js",
    "revision": "f2c1a0d5e113c332e6bbe7887eb378b2"
  },
  {
    "url": "styles.e5bd907bbe84b54de83d.css",
    "revision": "fd6d1622d065540c24b61fc090de4ce9"
  }
]);
