self.oninstall = function () {
  caches.open("FerdastV1").then(function (cache) {
    cache
      .addAll(["/", "index.js"])
      .then(function () {
        console.log("catched");
      })
      .catch(function (err) {
        console.log("err", err);
      });
  });
};

self.onactivate = function () {
  console.log("activated");
};
self.onfetch = function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
};
