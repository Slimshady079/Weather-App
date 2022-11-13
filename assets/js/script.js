//console.log("im a beast");
//variable declaration

var userInput = document.getElementById("user-input");
var userForm = document.getElementById("form-submit");
// var dayForcast = document.getElementById("current-forecast");

//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//test austin
//30.2711286 - lat
//-97.7436995 - lon

//put the weather api here
var weatherAPI = "https://api.openweathermap.org/data/3.0/onecall?";

var apiKey = "539c07666f83fa4cdcc3f88fe2d19132";

function fetchWeather(city) {
  console.log(city);
}

var apiCall =
  weatherAPI +
  "lat=30.2711286" +
  "&lon=-97.7436995" +
  "&appid=539c07666f83fa4cdcc3f88fe2d19132";
console.log(apiCall);

fetch(apiCall)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

function handleFormSubmit(e) {
  e.preventDefault();
  console.log("still beastin'");
  var input = userInput.value;

  fetchWeather(input);
}
// //event listeners
userForm.addEventListener("submit", handleFormSubmit);

//local storage

//create an empty array in global scope

//localStorage.getItem("cities");

//push that value (name of the city) to that array

//localStorage.setItem("cities");

//['austin', 'denver', 'seatle']

//show last one that they stored
