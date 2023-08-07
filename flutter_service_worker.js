'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "3a7ec7db41d241d1b1e75652f52b3349",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e57cf5b88e34a162b7deab10ee8b8dab",
".git/HEAD": "cdc6e77564d392632d1d3162ecd18e1f",
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
".git/index": "d916a182df223f6ba6083b7f16079069",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d871f5dc78fa8bf7604d192075b35578",
".git/logs/refs/heads/develop": "0267299f5f0f8ec5096c21098ea2d702",
".git/logs/refs/remotes/origin/develop": "37e301c9d98c85e2e2a988ff2626f233",
".git/logs/refs/remotes/origin/main": "ffc3ed1f1d4a80f4a9416135ac5c0f7b",
".git/logs/refs/remotes/origin/release": "f1e823a7bad706e82b559ea5334ccfab",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/30/2a7c3a2372dbcd25c5973289b93e5e60c26b7c": "0e50e6330279fec88ff842912c0f0800",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/46/aba720fccecc4320b05c263f37677852034263": "bfdce433450f5d2d5331a7f8efc33cf1",
".git/objects/4d/5216e686fdf80170dc7ce5c1b6e01ad6456a64": "a8cd3ee16af568aa024c0b33383d75bc",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/61e0a508eb5932505d8e89762cb2d521ff9f17": "4d1feab83bab7c0e5cb6c0b569eb9f76",
".git/objects/60/1868edeebb49e8b07287866ac14d39db106463": "ac1bc35b278a45263f154a2b73fc459a",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/7d/51319cb99d93d816896305e4db1881ece138cd": "09f325733b40423872dd533840edd9e4",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b8/ef405613d995390b2f601715490f7849cd1159": "a26efc95cf9b7965f6425f02a6da806d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/de/d15a1915170801a7f636c9089784b6d61eeed5": "10e6e38d676f72a42f86b9fcea701c25",
".git/objects/f6/6b19e257d6eec1d1f3b6845bafbe3cfd590adc": "48a9090f4fa2c4c86a20d6faa7bab754",
".git/objects/pack/pack-432dd3c3407d164889013b04865d9ba684e3831f.idx": "336ea5c5282a8a8e6ad37c61eb2b04f1",
".git/objects/pack/pack-432dd3c3407d164889013b04865d9ba684e3831f.pack": "800deaae9751c06013580d39787a9690",
".git/refs/heads/develop": "cafd851168eecc7b39d8617ff6a06232",
".git/refs/remotes/origin/develop": "cafd851168eecc7b39d8617ff6a06232",
".git/refs/remotes/origin/main": "d4a99e7ae9f1f823f47c61d4fbed09cc",
".git/refs/remotes/origin/release": "e83faf843b0877e0a3e633abafd3df04",
"assets/AssetManifest.json": "961ddf8269a0ead97b2456e55a42bb60",
"assets/AssetManifest.smcbin": "793af0d5fcaf1da519c3161c48e06a4b",
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
"assets/assets/images/loading.gif": "e6da4217ea8dcab62274b50d528a7286",
"assets/assets/images/profile_photo.png": "641f7ae50585ad85001f3cee6f1c8a2e",
"assets/assets/pdf/SendHelp.pdf": "5585b62171cf27279a60189316679530",
"assets/assets/projects/bit_node/about.png": "f54cddf98f1ddd19b943c654f180d07b",
"assets/assets/projects/bit_node/file_share.png": "f37f24b8f17bdc956f2ce06c0cfc6721",
"assets/assets/projects/bit_node/find_files.png": "af0ca877975344b5c39cdef7dab26f80",
"assets/assets/projects/bit_node/settings.png": "6b2c380ed1b469a1e1e9d7420c2d94b8",
"assets/assets/projects/ferreteria/create_client.png": "3bb651b89c5d24f70f44f49bb93946d7",
"assets/assets/projects/ferreteria/search.png": "b5a72816b5d874df2ed309c2561d8284",
"assets/assets/projects/ferreteria/sell_menu.png": "619abba64aee8cfd4c24608a76f033a4",
"assets/assets/projects/lantern/c_flash.png": "d7cd4fc86ba61a6768da53d00cbaac5f",
"assets/assets/projects/lantern/c_general.png": "99f685b655325382be2a624774421ca8",
"assets/assets/projects/lantern/c_pantalla.png": "ee7106711cb3f404f6bf90e648261ec6",
"assets/assets/projects/lantern/f_intermitencia.png": "09b6a75557bb48258f35f9a2f17e1866",
"assets/assets/projects/lantern/lantern_off.png": "fbb24d6e5d4ec894425796090db83b1a",
"assets/assets/projects/lantern/lantern_on.png": "59d0848aac758f92f287cf9126a804ab",
"assets/assets/projects/local_city/categories/alcohol.png": "db18674b145b26514921e7a2eee673ca",
"assets/assets/projects/local_city/categories/alfajores.png": "8ebb0449409eb190944422fc77b281a6",
"assets/assets/projects/local_city/categories/bebidas.png": "147ee33007355b915fa500f5a6bb9ade",
"assets/assets/projects/local_city/categories/caramelos.png": "87912a939583e259050d2f62e15d4347",
"assets/assets/projects/local_city/categories/chocolates.png": "aa2d5a134e2487b41641603718588266",
"assets/assets/projects/local_city/categories/condimentos.png": "a6891601b20ddb099796f97c30006657",
"assets/assets/projects/local_city/categories/cosmeticos.png": "a00dcd0705cba25fbed1303a046d299b",
"assets/assets/projects/local_city/categories/enlatados.png": "8362b9dca761e283c1eec9e20897366f",
"assets/assets/projects/local_city/categories/fiambres.png": "fa1c71ddfada0459b47208745b02ef7e",
"assets/assets/projects/local_city/categories/fyv.png": "34ac97ba764f6c28eb5d675558cf868c",
"assets/assets/projects/local_city/categories/galletas.png": "5619860c691575dd3e1f038eb71eae30",
"assets/assets/projects/local_city/categories/higiene.png": "85d6429dc64235f3caa9e93c54df402b",
"assets/assets/projects/local_city/categories/infusiones.png": "5f2de9022e5192ad942c6c47273bc562",
"assets/assets/projects/local_city/categories/joyeria.png": "76a3f1ea3df12a1ceeea73a23cc3465f",
"assets/assets/projects/local_city/categories/jugos.png": "2d1443cc7c8d2fd67c206a19f1593ace",
"assets/assets/projects/local_city/categories/juguetes.png": "e318bdc1f3ee7c7c2122083f49fb62fc",
"assets/assets/projects/local_city/categories/lacteos.png": "34678fed4e95916b2c6109d26a6de511",
"assets/assets/projects/local_city/categories/limpieza.png": "58255bb6538f26697b45c671f9e17b89",
"assets/assets/projects/local_city/categories/ofertas.png": "75b0ce7732370e8ede5e2ee3ce3a2785",
"assets/assets/projects/local_city/categories/panaderia.png": "472fe2390595c444e8b33efe392e9f25",
"assets/assets/projects/local_city/categories/pastas.png": "9de29d8686a407f5bb48a4e55b399ba5",
"assets/assets/projects/local_city/categories/snacks.png": "a7e7809cc6aeea7104fd91d0c56a054f",
"assets/assets/projects/local_city/categories/tapers.png": "a1371410b2a6cf197bf7020228b80fd4",
"assets/assets/projects/local_city/categories/todos.png": "892c7fa31d85c1f798190aa232e2d924",
"assets/assets/projects/local_city/categories/vinos.png": "e4eb0c2b126087a517e53b1f20440a08",
"assets/assets/projects/local_city/categories_black/alcohol.png": "8014a67a9160d6f2d487c79d6efcd1ff",
"assets/assets/projects/local_city/categories_black/limpieza.png": "ecf263028adb1e69d1fc6f08a7b6a8bf",
"assets/assets/projects/local_city/categories_black/pastas.png": "81bd057fdc523ab2dd7080a0e21ede19",
"assets/assets/projects/local_city/categories_black/snacks.png": "e3cdd69145472d5043075bdf9fde6f8a",
"assets/assets/projects/local_city/images/alcohol.jpg": "2a4260d39c337eda4f2a642f98e1a7ec",
"assets/assets/projects/local_city/images/buger.png": "f06d38650ab7143c9fb2ba17c5b3abd9",
"assets/assets/projects/local_city/images/facebook_icon.jpg": "9dc93ecc98a83bb632e3d1c59b717172",
"assets/assets/projects/local_city/images/facebook_icon.png": "f983daf744d6e61f52fc6c9ecd43e617",
"assets/assets/projects/local_city/images/facebook_icon_white.png": "432875824c383fde0018fb00b0be7022",
"assets/assets/projects/local_city/images/google_icon.png": "0ae3468edf52a9acfff7580b0f1d8776",
"assets/assets/projects/local_city/images/google_icon_white.png": "e2bbad39aee443e043dce7d52da1fae7",
"assets/assets/projects/local_city/images/logo_login.png": "7c844158675e8d2a2214bbad4c3942e8",
"assets/assets/projects/local_city/images/logo_small.jpg": "f3e5d77a1db07697acd5681347a23a87",
"assets/assets/projects/local_city/images/lomito.jpg": "e24504fcb348b4d5a827bb18e1a3cd8d",
"assets/assets/projects/local_city/images/pizza.jpg": "bca420dca844fabee6d1a800a1e496e5",
"assets/assets/projects/local_city/images/pizza_pn.png": "83d99fc53aa178a8b835a95d1a115734",
"assets/assets/projects/tu_pedido_vd/custom_pop.jpg": "ea2c21072480826d002f229bed8b05bd",
"assets/assets/projects/tu_pedido_vd/v_comerciantes.jpg": "1b18915a8127252f73e397bee4c449d0",
"assets/assets/projects/tu_pedido_vd/v_comerciante_order_grid.jpg": "ace03c72245c385d9daa40dc0ad3b6f1",
"assets/assets/projects/tu_pedido_vd/v_comerciante_order_list.jpg": "5d808f2e456b4243085533ffadd2dd29",
"assets/assets/projects/tu_pedido_vd/v_confirm_order.jpg": "c705ca489bcb4ddc9b50ca0cf449c472",
"assets/assets/projects/tu_pedido_vd/v_login.jpg": "0d833d755cec88a182e345d73e6dbcca",
"assets/assets/projects/tu_pedido_vd/v_producto.jpg": "cc96cf09adbc4fbbf34960ec9f3b8b46",
"assets/assets/projects/tu_pedido_vd/v_select_categories_1.jpg": "b41a246be9101bc887c3feec36de089a",
"assets/assets/projects/tu_pedido_vd/v_select_categories_2.jpg": "7700b8bd8b884253156ef801256c75fb",
"assets/assets/projects/tu_pedido_vd/v_select_flavor.jpg": "97fb2d45d3913befff5e81ddee1c6adf",
"assets/assets/projects/tu_pedido_vd/v_select_ubication.jpg": "498aab7ae84d21698afd96507f2635a0",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/fonts/MaterialIcons-Regular.otf": "11a4590a83b52beae66389c0114a5dbb",
"assets/NOTICES": "7a40a7395bdaf82df4c81b02aef8ae10",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c1a470de1484658e84990382c9987fef",
"/": "c1a470de1484658e84990382c9987fef",
"main.dart.js": "d79c027c1ad1a42cf6f28d9e4967e5a7",
"manifest.json": "5ab1f289992d40726806b3fe808428d9",
"version.json": "8348913928bf99adb17e6d028574ba01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
