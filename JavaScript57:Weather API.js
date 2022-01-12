// Weather API

// navigator.geolocation.getCurrentPosition(successFunction, errorFunction)
// first argument : function that will be called if everything is ok
// successFunction is a function that takes a GeolocationPosition object as its sole input parameter
// second argument : function that will be called if there's an error
// can get geolocation(current position)
// can get coordinates, location, GPS

const API_KEY = "put api key of your own";

// how I can call URLs from JS
// fetch(url)
// nothing will show up on the console
// if I go to the network, it shows basically what is going on with wifi
// if I use fetch, I don't have to go to the url, js will call the url for me

// I want to get name(where I am), weather(array), main.temp
// main.temp is Farenheit >> I want to change it to Celsius
// should go to API weather map and see how I can change that
// url&units=metric : add &units=metric to url

// tell js what to do when it fetches
// fetch is a promise
// promise means sth that is not gonna happen immediately and takes some time
// respose.json is all the thing that we get by fetch

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// need a service that takes lat and lng and turn them into a location
// openweathermap.org/api - API - Current weather data (API doc) - By geographic coordinates
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// put latitude in {lat} and longitude in {lon} and my API keys in {API key}
// put full URL
// get name of the place where we are and current weather on that place
// By geographic coordinates : can send some coordinates to [API call] URL and this URL will reply with information

// API : how we can communicate with all the servers.
