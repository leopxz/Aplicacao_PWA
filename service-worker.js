var chacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {
    self.skipwaiting();

event.waitUntil(
    caches.open(cacheName)
        .then(cache => cache.addAll([

            './index.html',

        './assets/css/bootstrap.min.css',

        './assets/js/bootstrap.min.js',

        './assets/js/jquery.min.js',

        './assets/js/popper.min.js',

           
        './assets/AppIcons/android/mipmap-hdpi/ic_launcher.png',
        './assets/AppIcons/android/mipmap-mdpi/ic_launcher.png',
        './assets/AppIcons/android/mipmap-xhdpi/ic_launcher.png',
        './assets/AppIcons/android/mipmap-xxhdpi/ic_launcher.png',
        './assets/AppIcons/android/mipmap-xxxhdpi/ic_launcher.png',


            './assets/AppIcons/appstore.png',
            './assets/AppIcons/playstore.png',
            './assets/AppIcons/image/icon_16.png',
            './assets/AppIcons/image/icon_20.png',
            './assets/AppIcons/image/icon_29.png',
            './assets/AppIcons/image/icon_32.png',
            './assets/AppIcons/image/icon_40.png',
            './assets/AppIcons/image/icon_48.png',
            './assets/AppIcons/image/icon_50.png',
            './assets/AppIcons/image/icon_55.png',
            './assets/AppIcons/image/icon_57.png',
            './assets/AppIcons/image/icon_58.png',
            './assets/AppIcons/image/icon_60.png',
            './assets/AppIcons/image/icon_64.png',
            './assets/AppIcons/image/icon_66.png',
            './assets/AppIcons/image/icon_72.png',
            './assets/AppIcons/image/icon_76.png',
            './assets/AppIcons/image/icon_80.png',
            './assets/AppIcons/image/icon_87.png',
            './assets/AppIcons/image/icon_88.png',
            './assets/AppIcons/image/icon_92.png',
            './assets/AppIcons/image/icon_100.png',
            './assets/AppIcons/image/icon_102.png',
            './assets/AppIcons/image/icon_114.png',
            './assets/AppIcons/image/icon_120.png',
            './assets/AppIcons/image/icon_128.png',
            './assets/AppIcons/image/icon_144.png',
            './assets/AppIcons/image/icon_152.png',
            './assets/AppIcons/image/icon_167.png',
            './assets/AppIcons/image/icon_172.png',
            './assets/AppIcons/image/icon_180.png',
            './assets/AppIcons/image/icon_196.png',
            './assets/AppIcons/image/icon_216.png',
            './assets/AppIcons/image/icon_256.png',
            './assets/AppIcons/image/icon_512.png',


            './images/logoSH.png',
            './imagens/pic00.png',
            './imagens/pic01.png',
            './imagens/pic02.png',
            './imagens/pic03.png',
            './imagens/pic04.png',
            './imagens/pic05.png',
            './imagens/pic06.png',
            './imagens/pic07.png',
            './imagens/pic08.png',
            './imagens/pic09.png',


        ]))
        );
      });
      
      self.addEventListener('message', function (event) {
        if (event.data.action === 'skipWaiting') {
          self.skipWaiting();
        }
      });
      
      self.addEventListener('fetch', function (event) {
        //Atualizacao internet
        event.respondWith(async function () {
          try {
            return await fetch(event.request);
          } catch (err) {
            return caches.match(event.request);
          }
        }());
      
        //Atualizacao cache
        /*event.respondWith(
          caches.match(event.request)
            .then(function (response) {
              if (response) {
                return response;
              }
              return fetch(event.request);
            })
        );*/
      
      });