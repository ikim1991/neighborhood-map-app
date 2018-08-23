const staticCacheName = 'cache-v1'

const cacheFiles = [
  '/',
  './index.html',
  '../src/App.js',
  '../src/App.css',
  '../src/index.js',
  '../src/Components/Map.js',
  '../src/Components/SearchBox.js',
  '../src/Components/SearchResults.js',
]

self.addEventListener('install', (e)=>{

  e.waitUntil(
    caches.open(staticCacheName).then(cache =>{
      return cache.addAll(cacheFiles)
    })
  )
})

self.addEventListener('fetch', (e)=>{
  e.respondWith(
    caches.match(e.request)
    .then(res => {
      if (res) {
        return res;
      }
      return fetch(e.request)
    })
  )
})

self.addEventListener('activate', (e)=>{
  caches.keys().then(cache=>{
    return Promise.all(cache.map(c=>{
      if (c !== staticCacheName) {
        return caches.delete(c)
      }
    }))
  })
})
