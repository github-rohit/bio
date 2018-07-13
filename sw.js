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
    "url": "assets/images/banner.svg",
    "revision": "601db52f41254a1e2092a87ddda0b35f"
  },
  {
    "url": "assets/images/logo_blue.png",
    "revision": "84f052acdd07bd17eee430bade709a27"
  },
  {
    "url": "assets/manifest.json",
    "revision": "c7a899f10fd173d5e6952e668db967c3"
  },
  {
    "url": "favicon.ico",
    "revision": "7a95d270c455e9f87ef3f440698285a8"
  },
  {
    "url": "index.html",
    "revision": "c1ceb1422c6f823df096034c7dd7a56f"
  },
  {
    "url": "main.62550dc402998d01660a.js",
    "revision": "b84b5f993d6f72d8d9d924bca4aa0cf0"
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
    "url": "styles.34e5e8088bedc8d33e7b.css",
    "revision": "17c1cfacca3872454982f52cbee4cbd7"
  }
]);
