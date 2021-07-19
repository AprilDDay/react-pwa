let CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
];

self.addEventListener(install, function(event){
    //perform install apps
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            console.log('Open cache');
            return cache.addAll(urlsToCache);
        })
    );
});