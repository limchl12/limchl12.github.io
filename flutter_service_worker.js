'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c5df5ab05de8bb4b5d25b38d8eaf7227",
"assets/AssetManifest.bin.json": "20c809aa7702c6e64d12ef3ab079dbc6",
"assets/FontManifest.json": "9f509b5528a6325a145d34b205eba26a",
"assets/fonts/Actor/Actor-Regular.ttf": "600a1ddb26c4a4a678d9e1d1fff01790",
"assets/fonts/Lato/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/fonts/Lato/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/fonts/PretendardVariable/Pretendard-Bold.ttf": "dfb614ebecd405875f50a918ca11c17c",
"assets/fonts/PretendardVariable/PretendardVariable.ttf": "872a6c5775ec910058a9a409a201972a",
"assets/fonts/Roboto/Roboto-Thin.ttf": "1e6f2d32ab9876b49936181f9c0b8725",
"assets/images/about_us_image_en.png": "f025030464e40cf257b729bab81af419",
"assets/images/about_us_image_ko.png": "a53fc355c00587877b4b0bdc8adec87c",
"assets/images/chkmark.png": "408f1b385374925893c934ca180e27cd",
"assets/images/email_icon.png": "9ef607cef8bff11bddf872091fdc1c93",
"assets/images/feature1.png": "4a1e46980816540042f86c254fad1c79",
"assets/images/feature2.png": "fc098a19c11e4dfba01f370a56e8385d",
"assets/images/feature3.png": "a95b544b8d1a7216f381ae6f3cc7dfb9",
"assets/images/location.png": "c323462bd5d90f21f140e975af254116",
"assets/images/location_icon.png": "e27813f84d2b4fe2e06c6e8f537724d7",
"assets/images/logo.png": "1dd023ae2e5b1b6114eee3975c9db62f",
"assets/images/our_story_image.png": "fbc2a9f2af7dfba973440cd7a73d912b",
"assets/images/platform1.png": "ab85ab6bd08015d33682671346f1af59",
"assets/images/platform2.png": "739d7fafd105744e4a6e38c6fccaa49e",
"assets/images/platform3.png": "4c478eedfb1c6a01ab3491af9d7ad257",
"assets/images/products_image_en.png": "0fd05c03cb77b19edaf52f26b3f15224",
"assets/images/products_image_ko.png": "457c8eda1bb9ce8647cda3ed903018df",
"assets/images/sono_icon.png": "3e0260c58a28778bf513876932ce9141",
"assets/images/support1.png": "bf0e96e3c472ad4458686bb1f3bb001e",
"assets/images/support2.png": "054de7bc5bb7672bbd86bf88985f078d",
"assets/images/support3.png": "1f958278318d17d5eea77b6b0b388ba1",
"assets/images/value1.png": "e28c3b96e697acf042e9fff1fd811e27",
"assets/images/value2.png": "bdb205dec3fbf91e62e7dfa886806dec",
"assets/images/value3.png": "45f9a3cb60c2519eed019025aecdd89a",
"assets/NOTICES": "2a9abc1ba0752a522e8d5344bc6c88d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "efcf60525a36f21761e0c9e52fceb4ba",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "8362f7238ee838c512dae571b6adc848",
"icons/Icon-192.png": "a372d0d033d2ec7455da406049243900",
"icons/Icon-512.png": "51af2cf60c72a8776d0eccc173894cb3",
"icons/Icon-maskable-192.png": "a372d0d033d2ec7455da406049243900",
"icons/Icon-maskable-512.png": "51af2cf60c72a8776d0eccc173894cb3",
"index.html": "9b203fef4d624b802f7f3b1c3c4409c1",
"/": "9b203fef4d624b802f7f3b1c3c4409c1",
"main.dart.js": "7d62a84052c8e05d6fd423848988d1f2",
"manifest.json": "0236db44f9de52a1996c48d3d947856b",
"robots.txt": "829f8df29ac0504c5abb28fe5c218425",
"sitemap.xml": "4d876fd5769a57078daeeb5006aede65",
"version.json": "7c52a036ed44d83f67d826e23b3b0302"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
