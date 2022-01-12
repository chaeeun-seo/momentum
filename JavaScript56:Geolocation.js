// Geolocation

// navigator.geolocation.getCurrentPosition(successFunction, errorFunction)
// first argument : function that will be called if everything is ok
// successFunction is a function that takes a GeolocationPosition object as its sole input parameter
// second argument : function that will be called if there's an error
// can get geolocation(current position)
// can get coordinates, location, GPS

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// need a service that takes lat and lng and turn them into a location
// openweathermap.org/api
// get name of the place where we are and current weather on that place
