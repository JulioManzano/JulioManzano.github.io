'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ebe1183004d3c578969bf15588b08916",
".git/config": "bfb485f87942308765c4b34f6be2ac7b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7e38e2b89e4bc0397db26a2d146d3aac",
".git/HEAD": "bbbebf9b9d89333cb40ff16f31bf962f",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "137ee580e25a9a153e2dcbdc47217417",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d3a6cad7bd5f1189cf57aa84f183417a",
".git/logs/refs/heads/master": "a631762649eac174ebc00903383f4cf7",
".git/logs/refs/heads/relase": "4fa2a658200227dad15236302a9d83ac",
".git/logs/refs/remotes/origin/HEAD": "94f979600844b3bcc5325d4a1c0090f3",
".git/logs/refs/remotes/origin/main": "657d35d7fee1913af55eb6adcf4c05f1",
".git/logs/refs/remotes/origin/master": "d1d95b6548144d23cae984a498fc9dba",
".git/logs/refs/remotes/origin/relase": "184cbd73a91f683d426b032bf4a7cc52",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/01/115a2bba6f0227dc29f7d17c1aaaa8056fc038": "045b4ab55d94d28c83cd83098fe1cda5",
".git/objects/03/5114bab93a7618e1e008bb0fe5819ed5947c17": "b281ea3b7f6d6d79b71572ea81d7326e",
".git/objects/06/4b76398aa8baf532c15f865734bc290f5d7d0d": "9c7a65498ca1726de5bfe087e25f2755",
".git/objects/07/7c9e2b8259a8d76ce3b49d34f20a2ae9f0bd58": "9d5d58eda0f76711bf8b2c3149d02d38",
".git/objects/0a/f8f85bf7317449eaf640329cf06bc286e1faa0": "aacfaa21746c06bc1d3193d3e37e7f48",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/9962b657e1b7e41094ac8c039db042b79e8c12": "d5ba9a661ff4508c1bf80dd260b27ece",
".git/objects/18/81b4b7813013d3f52abba1ae7e1666d0aa214d": "f3dc5af922ff624f12c0cc7faee92438",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/20/1b330c3f6ac0bcc146c102483c3148f7acd51c": "e120242d2bdcbfde9e5dbd7010afd0a8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/fa564baee55d5af4359bc8efa672aea8b069ce": "365b657999884e517d61bdc8f17a8632",
".git/objects/2b/98a7423e603ca666d1263f382c56e996740525": "f58a2ef058aaf2a4a2d7eee6eba3d220",
".git/objects/2f/d197a25fb842afa8aa0dfd4d8cef196c8b7b2c": "ccf359546da499455e8afe098967902f",
".git/objects/30/90694cca99704978cb3a1c09a9968ae94f07c9": "c694ead1593527b3110eed8224530db8",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/7036ab7b24849c999427fd65a22caecf96ac05": "e775eb46208eb7fab2e718afbead4b73",
".git/objects/3b/02dfc71e9451d9bcc85d415b6cb9acc1ec15c8": "32f2f379169ce4310fdb67b671449f89",
".git/objects/3c/7b870b607d5698baf82ae16dd0d6d08279371a": "d3e451c01799b9f51c026a7625de808a",
".git/objects/3e/6e46e6b2c7e70228b114e800ccbbf8957c623c": "aacb58ef4c0c3207364f4dd3e0b9c655",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/6f94961b657c5d432d2f0ceb3ba2761a8fa9af": "d8ec580a0eabfca73cb8e986aaf04f6b",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/4b6276a4b4de13a6a8df495c09c84df893feb5": "91a6d585db55daeefc016236c363baee",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/0244b5d0e4d07483636ccba6ed47072ee04d39": "31547d8cb8a7e1823b0576954d53fc29",
".git/objects/6e/895bf1426ecb6044641a50eb0c368c262d3f34": "6effc66d8cdfa7ce3777298cf8465abc",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7932f24d76176a2deeba49acd63be759503f36": "dfcc3086cade22cd75bdfaa5c3cbdc56",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/96/5aff84def8ace5351f0ad479b30183b1fc9a01": "eac6040f6f3c30fe7696ae74cbd8932d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a6/afe7c1ce0b95c7a0bf4dfcf490d4b4b3bf11c6": "6d48dcc7ad09939c3254ac45882532ea",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/b1/46e8fdf4eb9467ffd54d389416c24bb969ad10": "1270ae1378c1bb5f0c504c436b5b47d5",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b4/376f0b1e196b9e615d87373682672d09cdb46f": "cac4965e8bbf35246ffab250ce5892d7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/c9e0820f393660611459895cb0df992ee2851f": "b85b5bd38b5aacee4fcdd1088d6b09e4",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c9/2f0ea068f7af2348bfb27154cf39f8b9ad867c": "1b0d49c9dea4ab627e7075f1e705fbb1",
".git/objects/d3/5de7eb4dc6242af25a624eefa3f3d65737e526": "82bc8926754c99cef8409c504f3081e0",
".git/objects/df/a9e4ea07ffa63ab315ffdc36135cfb8a14c400": "739855bebe53871cffea3c46c01bd6ce",
".git/objects/e3/ad83a616d546b01e1312354138e18a8dfa1469": "a913611039ed6a759ff71059e63f868a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f7/5418a41add7244a3708a6b8ef3f86f77fffba8": "187a43da6952ae705f871c31e0a5a2c6",
".git/objects/f7/5bc3b56f9b49bb75745ff54df9ec93e20f641d": "5cf9016f68b41bc510bfa884a3113e16",
".git/objects/fd/18dd674a2f98a8c4b2726fb111e22b7ff0094e": "48b9bb9d176af5c49ad12ec604d358d8",
".git/refs/heads/master": "b2efd5deed018f009104cb459c7143bc",
".git/refs/heads/relase": "af57d343f632fb1a4450c5ce67a3f453",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d4a99e7ae9f1f823f47c61d4fbed09cc",
".git/refs/remotes/origin/master": "b2efd5deed018f009104cb459c7143bc",
".git/refs/remotes/origin/relase": "af57d343f632fb1a4450c5ce67a3f453",
"assets/AssetManifest.json": "b6392343ec673d6dd5efddeb9df11d18",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "272adae309c852fb7363766d857c119c",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/language.svg": "425d52495d3e27fff220fff90623915d",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/IMG_7344.jpg": "bb74c3d7c6f5599d40c05a866b31ffd6",
"assets/assets/images/language.png": "62da0070436cd91181b267995365b216",
"assets/assets/images/language_2.png": "50089f9468f7991dbd11f1b8444db6f8",
"assets/assets/images/profile_photo.png": "192c255521f5a1f043bd98262487dd2a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "69d20b59d7c67583c1ed641805134d34",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "bc4a0f2406aeadaf560b641c5617c18a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "79fd1b5f4b9ed5c1eb55814813698372",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7d829753126347f7c54646f6623dfda6",
"/": "7d829753126347f7c54646f6623dfda6",
"main.dart.js": "2e1cd7071eb5e82ab4343fb556897b4e",
"manifest.json": "5ab1f289992d40726806b3fe808428d9",
"version.json": "8348913928bf99adb17e6d028574ba01"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
