'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f65b9a3e087a8f1eee19ecf2e97c65d1",
".git/config": "64ce692018374c63b24ff543937dc876",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dea83a7a68de62205b04614ca1c0696f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c52fbf8fc2790667ce06711cc84ea9f6",
".git/logs/refs/heads/master": "c52fbf8fc2790667ce06711cc84ea9f6",
".git/logs/refs/remotes/origin/main": "659c81b00ad1b5e5c36f40c1c57f89f0",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/05/7127bbf0661c02208f730e5bed71a2727cb312": "3f23d9d8a730938e8f8e4096709b03f7",
".git/objects/05/e8763c793f2986f4c4c2b3c8f24435e46d84f4": "f01412e97c9248e03d09fa476649b3d9",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/11/9c8e973a364559bb862ffd0d6d712767891ef1": "31167b17af48a1caabab46cb8ed1430e",
".git/objects/18/5ecdf0a5f32b4d8139393aa2379be775bc4e37": "2c03ef605a3f46faa1f1cb88f1214dfb",
".git/objects/18/8484c2e736293963dd0d3d2bdaaa5a9abea1ff": "7ca2f42fc05a92b0bde92c15ef19f2fd",
".git/objects/24/0a874155088eba6eb961ae75773c94e8816736": "808f63fc2962070e05eca1419624876e",
".git/objects/25/50064ba6a960af776a8dcb3d8f341b60edf56d": "6215c69cf27900eda021aef294e9f8b6",
".git/objects/2f/34eb009b1983134fb42f915c4819e86cad2988": "9f013d91c9c9bc6b1c1b76cb0eceab21",
".git/objects/2f/352f89e34cad93a21bc4228209650dcc4443fb": "d13ade28288e1313036637085be01575",
".git/objects/32/b0811eae2cbfeb5f6ddaf34015ecaa726b006a": "844321c0f81a25c6fbd183ab8a5ca332",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/f0e588d091c89ec892e9320d33224a39fc056c": "e8fe2ac22379fc4bb23d6f223673424a",
".git/objects/41/00ebcc9a4381d86fb0cc11cc9e7cdfb57f01bd": "7156aeb1a5ddf1379cb5a5644553fa02",
".git/objects/4c/ab725085fa8c75bf5c0457ebc5f990c2b2933b": "2eede0465f87030a6353dd3fd33e7390",
".git/objects/4f/625203fe4ecf291885df29a23bdd5cbd1b067b": "9693f96704ab5f38b609f05d98e283d4",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/52626abb2840b519df974b5b94049081eca19d": "c1a08c596bfe975e3366461c8c3b1665",
".git/objects/53/a9c957714057f0369ae05ced4a6d8e0eaed1c2": "325193151733d4f7251c42180d558433",
".git/objects/58/fb116ab28858de29250216759350503058b847": "19fad20ea5770c4279018c90d0decf35",
".git/objects/59/44915147dd2719fd76e2379791fac07d9349e4": "22381d1fb78d3c195541810b91234bd6",
".git/objects/5d/73357b72faade3d68e62e23aa8b267aa95a177": "889c6dceef6403955d901c957e058ebf",
".git/objects/5d/7948baee89fdf6b805ee0464fb95ad24ee497f": "9dc83e78a6790b5283b4853cdbeac089",
".git/objects/5d/bcd2cd325ad5f9f03c5817ec640d79c0785edb": "2a20382726764272abe55b392d461df1",
".git/objects/5f/8c449fcc13b59c9b3463bdc6719803ea34e714": "c70c41f2ab3a483cca31436b73ca2036",
".git/objects/5f/9b7ce88132922b081ca9d4e10752d9765cd115": "9a0738592541a8d9ce802cf1d89872e8",
".git/objects/64/18f823a08706dd68ee300bce100dcc50848442": "ea9960bac052c328324322ce99170754",
".git/objects/64/237ad618ac1e56a796004e9f557a663efdfea5": "51c2852fdb2328607e2cbfacdf59b6d6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/e97b889596da4b427f4230fe5ccf1b0a098de7": "215f5cda7eeb0c332acf3e1db32af270",
".git/objects/6e/f5c186098c2fb6453a7058bb23dc3d6e9447ca": "74448c9b0c16e6fe8d56fddc137ee281",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/80/09bc2c969d1f0d0e9eefbbfb35b921d1fb77e0": "63250bf1df393b3bb4f226519647cbc7",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/8c/3d20f1a7cc9e3f49798abc830c939f2b927343": "be15f1059688cca3bcb10d2d92c1b1e4",
".git/objects/8d/70d560ae389f8b5abddb51663dbeb895521bf0": "7f38d8146df682befbfed1c328039888",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/5df0f267b393ea317b7d99cea88b5b604356d7": "ef2d4fb202140a6b68af9a7db3be0041",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/98/2570fa0caa71a8ef3f43cd867e423388afaf9b": "47d3652d94f04f9c4924561499a0f754",
".git/objects/9a/2e6344372d07eef6d8afd36f828093df3df116": "2a53f49a4fe8305295edd1b724b049b1",
".git/objects/a0/77fd14d3bb6891fadc2f371fc66c063c47c6f5": "23417bd1434c19a8f6a1d75677a93282",
".git/objects/a1/1cf86cc2a27b59b6203ee0e8bd390c68ad5c6e": "6f2f0146ae87b903edfbf9eb158af357",
".git/objects/a5/c30c014bb22b970eb139cee63ad3b71b7673e2": "5bd2b14a3e95b01b95d33c85c20f4329",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/aa/85066d79357343acbea669f58ce68532ae4de1": "e22c4050aa36178d125cdaa09c420c70",
".git/objects/ab/d150f26ed3bf5783e5aeeda6388d8842d6dece": "d6a9f2812e74106f539fce6eef4290a7",
".git/objects/ad/4e8f889220e7a20ede4d83d7e3dfe5c1cc857a": "a0458ddbd31e86231b682bfd49cb226c",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b7/bdb9e916fc8aca4ea44ffac89b9f3821c0f0aa": "01383dc4b80edcc34f7d2763204075cc",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/c6/fa3edb87a15bab494c5bc8e56b07723c7bdb29": "76d02fdbce20c2583297306fe5a99e53",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/343812a1b1a772f92ff673e572b4dd19824f69": "446053f95b27a74b7c47431191765dcf",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cc/98045960d0edf46d95bf7707b16c05a827883c": "f43368c78b532e07bcb8ac3f7b52e08c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/cecb0a68fa9cbc3392e3351343305c8c744dbe": "e4be9049fa7eed862e29896b5a5ed27f",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/634c7559d4b54753f0346d3f8e7601dd23f412": "02211437c586597f44e74b6d6098dad7",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dc/aac8f62a19c7e7bea7b86e75e218cdc9b8ca43": "4f439dc971e9f0bf2c67e731bb5f75ee",
".git/objects/e1/919fd2f3617b5059ce01480a92c7bea62b3be4": "6155f6785ba47179a13ddbe53d41f5e9",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f0/b9cdd6f05f46b38d89388160a2b86b859c3dd1": "bb2cba9ef24fe9051e3bac32c5e704ad",
".git/objects/f1/38c94caa8d22539ae3e01183fb497ccd50bb3a": "16f74d733a92c7179dbd864d1476c800",
".git/objects/f1/9c7ac53fd953a9a6ff99214b69c3bf8b814e73": "878628e60d4fd75427ce8f83ab297d25",
".git/objects/f3/1d9762610f7c2945d484535e81ffd3ae173612": "6dde45a86b2d85697342713e6991f338",
".git/objects/f3/300102345f203a81d985ca82da3a4feb03821c": "12198300e0788ca4475d813f7b16ba2c",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/ee76d01218ffd539f8fd5a5c8d61e838ad67d5": "701ed5d9eb17fc6e65d2e0a152f9017e",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fb/07fc65e8e568c60dfd985fb6fcdfd114da4d64": "b1ab81f0fade99f15a8ab4858d03b0e1",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/627502dd8906cc3b08d9debf28d342bf3697d4": "2666e1ee07c2ce7e3971f3d176e8d245",
".git/refs/heads/master": "a5d75a83de5543945b924df127604f2c",
".git/refs/remotes/origin/main": "a5d75a83de5543945b924df127604f2c",
"assets/AssetManifest.bin": "c5df5ab05de8bb4b5d25b38d8eaf7227",
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
"CNAME": "625b61e1c8dd99d7d274eec567bb6a04",
"favicon.png": "efcf60525a36f21761e0c9e52fceb4ba",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "807f9739055a6b4065540313da7b2e4a",
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
