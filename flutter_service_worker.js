'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "adfc8beeac6fa07322aa1a55852ef62a",
"/manifest.json": "ce64d42f15cd19c0fcc0e4480232b366",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/list_item_sixth.jpg": "6983ad0ff41ffe2b4f924430f82cadfb",
"/assets/assets/list_item_one.jpg": "d611ce81ff98f8780f20e8acd0ae6e87",
"/assets/assets/first_comment_profile_pic.jpg": "57ecb073e8cbba3ae542623a39850b58",
"/assets/assets/story_second.jpg": "59e95dde8ace77dd4091a7b21ef29ffd",
"/assets/assets/story_first.jpg": "d5fe98e53251704c704c58e8f533fc6e",
"/assets/assets/upated_pic.jpg": "5633c36b9cc4c1dd78a7170bfe33b312",
"/assets/assets/second_comment_profile_pic.jpg": "067d55f1e80456ad1c57f5688c817bc3",
"/assets/assets/list_item_fifth.jpg": "d03883216b43a4bcbd7d0ce1fcf85077",
"/assets/assets/story_fourth.jpg": "a7ac4ffdcd65eb9734262ddb9c365f8d",
"/assets/assets/story_third.jpg": "aebc9da90216b496a12b40e774c368c6",
"/assets/assets/profile_kylie.jpg": "3fa792d3b0094051808dd268b2fe40e5",
"/assets/assets/list_item_fourth.jpg": "fb04a5351d9a9035926f8b2bea9e07f3",
"/assets/assets/list_item_third.jpg": "6fc0454750a66d9528acc3d30196d953",
"/assets/assets/list_item_second.jpg": "53f0213c6e6dc4d3e00acd6e8ecb686c",
"/assets/assets/story_fifth.jpg": "de18e4947c2e0721355bffc5ca5eda0d",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "25de04cf0a3ffa79ac103a3b7ce9fcad",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "ac065297a8229e01a6ae61ada9e4225d",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
