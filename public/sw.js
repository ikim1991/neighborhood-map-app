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
  console.log("Service Worker Installed")

  e.waitUntil(
    caches.open(staticCacheName).then(cache =>{
      console.log("Caching Files")
      return cache.addAll(cacheFiles)
    })
  )
})

self.addEventListener('fetch', (e)=>{
  console.log("Service Worker Fetching")
  e.respondWith(
    caches.match(e.request)
    .then(res => {
      if (res) {
        console.log("Serviceworker Found in cache")
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
