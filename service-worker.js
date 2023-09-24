var cacheName = 'pwaTeste+-v1.0';

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
      
        const apiKey = "768dea59682630fa2a993bd567e29bc7";
const apiCountryURL = "https://countryflagsapi.com/png/";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

const errorMessageContainer = document.querySelector("#error-message");
const loader = document.querySelector("#loader");

const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");

// Loader
const toggleLoader = () => {
  loader.classList.toggle("hide");
};

const getWeatherData = async (city) => {
  toggleLoader();

  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  toggleLoader();

  return data;
};

// Tratamento de erro
const showErrorMessage = () => {
  errorMessageContainer.classList.remove("hide");
};

const hideInformation = () => {
  errorMessageContainer.classList.add("hide");
  weatherContainer.classList.add("hide");

  suggestionContainer.classList.add("hide");
};

const showWeatherData = async (city) => {
  hideInformation();

  const data = await getWeatherData(city);

  if (data.cod === "404") {
    showErrorMessage();
    return;
  }

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  countryElement.setAttribute("src", apiCountryURL + data.sys.country);
  umidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

  // Change bg image
  document.body.style.backgroundImage = `url("${apiUnsplash + city}")`;

  weatherContainer.classList.remove("hide");
};

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;

    showWeatherData(city);
  }
});

// Sugestões
suggestionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const city = btn.getAttribute("id");

    showWeatherData(city);
  });
});


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