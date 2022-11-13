//console.log("im a beast");
//variable declaration

var userInput = document.getElementById("user-input");
var userForm = document.getElementById("form-submit");
var dayForecast = document.querySelector("#current-forecast");
var weekForecast;
// var dayForcast = document.getElementById("current-forecast");

//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//test austin
//30.2711286 - lat
//-97.7436995 - lon

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//put the weather api here
var weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?";

//var apiKey = "539c07666f83fa4cdcc3f88fe2d19132";

var apiKey = "d91f911bcf2c0f925fb6535547a5ddc9";
//responsible for finding lat and lon from input value
function fetchCoordinates(city) {
  //console.log(city);
  var rootEndPoint = "http://api.openweathermap.org/geo/1.0/direct?";
  var apiCall = rootEndPoint + "q=" + city + "&appid=" + apiKey;
  console.log(apiCall);

  fetch(apiCall)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      //console.log(lat);
      //console.log(lon);
      fetchWeather(lat, lon);
    });
}

function fetchWeather(lat, lon) {
  console.log(lat);
  console.log(lon);
  var apiCall =
    weatherAPI +
    "lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial" +
    "&appid=d91f911bcf2c0f925fb6535547a5ddc9";
  //console.log(apiCall);

  fetch(apiCall)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      //var h1El = $("<h1>");
      var h1El = document.createElement("h1");
      var pTemp = document.createElement("p");
      //var p2 = $("<p>");
      var pWind = document.createElement("p");
      var pHumid = document.createElement("p");
      var date = document.createElement("h1");

      $(date).text(data.list[0].dt_txt);
      $(pTemp).text("Temperature: " + data.list[0].main.temp + " Farrenheit");
      $(pWind).text("Wind speed: " + data.list[0].wind.speed + " MPH");
      $(pHumid).text("Humidity: " + data.list[0].main.humidity + "%");

      dayForecast.append(date);
      dayForecast.append(pTemp);
      dayForecast.append(pWind);
      dayForecast.append(pHumid);
    });
}

function handleFormSubmit(e) {
  e.preventDefault();
  //console.log("inside handleFormSubmit function");
  var input = userInput.value;
  // fetchWeather(input);
  fetchCoordinates(input);
}
// //event listeners
userForm.addEventListener("submit", handleFormSubmit);
var cities = [];
//localStorage.setItem("input", JSON.stringify(cities));

//local storage

//create an empty array in global scope

//localStorage.getItem("cities");

//push that value (name of the city) to that array

//localStorage.setItem("cities");

//['austin', 'denver', 'seatle']

//show last one that they stored
