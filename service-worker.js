const CACHE_STATIC_NAME = 'static';
const CACHE_DYNAMIC_NAME = 'dynamic';

self.addEventListener('install', function(event) {
    console.log('[Servies worker]', event);
    
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME).then((cache) => {
            cache.addAll([
                '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
                '//code.jquery.com/jquery-3.1.0.js',
            ]);
        }).catch((err) => {
            console.log(err);
        })
    );
    
});

self.addEventListener('activate', function(event) {
    console.log('[Servies Activate]', event);
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
                    return caches.delete(key);
                }
            }))
        }).catch(err => {
            console.log(err);
        })
    );   
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            } else {
                return fetch(event.request).then(res => {
                    return caches.open(CACHE_DYNAMIC_NAME).then(cache => {
                        cache.put(event.request.url, res.clone());
                        return res;
                    })
                }).catch(err => {
                    console.log(err);
                });
            }
        })
    )
});
