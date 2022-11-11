console.log("im a beast");
//variable declaration

var userInput = document.getElementById("user-input");
var userForm = document.getElementById("form-sbt");
var dayForcast = document.getElementById("current-forecast");

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//put the weather api here
var weatherAPI = "http://api.openweathermap.org/geo/1.0/direct?q=austin&appid="; //add api key

var apiKey = "539c07666f83fa4cdcc3f88fe2d19132";

//function is responsible for making api call with the user search term

//function is responsible for getting the lat/lon for the city passed
function fetchCoordinates(city) {
  console.log(city);
  //this will make the call to get the coordinates for that city
  var rootEndpoint = "//originalapi with no parameters";

  var apiCall = "//api call with q=thecityyouwant&appid=yourApiKey";
  // var apiCall = rootEndpoint + '?q=' + city + '&appid=' + apiKey

  console.log(apiCall);

  fetch(apiCall)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;
      fetchWeather(lat, lon);
    });
}

//function renderDayForecast() {}
//responsilbe for the dynamic creation of the cards based on the data the user inputs

// function renderCards() {
//DOM manipulation

// }

//                     city
function fetchWeather(lat, lon) {
  console.log(lat);
  console.log(lon);

  console.log(city);

  //
  var apiCall =
    weatherAPI + "lat=" + lat + "&lon=" + lon + "&units=imperial&" + "appid=";
  console.log(apiCall);
  fetch(apiCall)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {});
  //console.log(data.list[0].main.temp);

  //render the temp as an h1 to the user

  var h1El = document.createElement("h1");
  h1El.textContent = data.list[0].main.temp;

  dayForcast.append(h1El);

  //take the temp and lets display to the user
  //create an h1 element
  //add text to that h1 element
  //append to DOM
}
//functions
//this function is responsible for form submission by capturing user input
function handleFormSubmit(e) {
  e.preventDefault();
  console.log("still beastin'");
  var input = userInput.value;
  console.log(input);
  //make an API call with that search term and confirm that data is sent back
  fetchWeather(input);

  fetchCoordinates();
}
//event listeners
userForm.addEventListener("submit", handleFormSubmit);

//local storage

//create an empty array in global scope

//localStorage.getItem("cities");

//push that value (name of the city) to that array

//localStorage.setItem("cities");

//['austin', 'denver', 'seatle']

//show last one that they stored
