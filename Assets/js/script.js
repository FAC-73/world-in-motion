// store api key
const apiKey = "a292350487a9c686dbf7401ea7f2d780";

// variables for creating list elements and for storing array for saved cities
var inputCity = document.querySelector("#search-term");
var formInput = document.querySelector("#search-form");
var listItem = document.querySelector("#cities-list");
var cityHistoryCount = document.querySelector("#cities-count");
var cityHistory = [];


// The following function renders items in a cities list as <li> elements
function rendercityHistory() {
  listItem.innerHTML = "";
  cityHistoryCount.textContent = "cities " + "(" + cityHistory.length + ")";

  // adds it to the HTML document
  for (var i = 0; i < cityHistory.length; i++) {
    var cities = cityHistory[i];

    // creates the rows and content for city history list, sets text to the city name
    var li = document.createElement("li");   
    li.textContent = cities;

    // adds it to the HTML document
    listItem.appendChild(li);

  }
}

// Function to get stored item from JSON
function init() {
  var storedcityHistory = JSON.parse(localStorage.getItem("cityHistory"));
  if (storedcityHistory !== null) {
    cityHistory = storedcityHistory;
  }

  rendercityHistory();
}

// Function to store item in JSON
function storecityHistory() {
  window.localStorage.setItem("cityHistory", JSON.stringify(cityHistory));
}

// Function for current weather
function getWeather(city) {
  // getWeather using api and parameters, get background image based on api and search parameters
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  var imageURL = `url(https://picsum.photos/1440/1024?${city})`;

  // Fetch api data 
  fetch(queryURL)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);

      // Add data to html p tags
      $("#currentCity").text(data.name);
      $("#wind").text("Wind Speed: " + data.wind.speed + " MPH");
      $("#humidity").text("Humidity: " + data.main.humidity + "%");
      $("#temp").text("Temperature: " + data.main.temp + " °F");

      // Create image element to pass image data into
      var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

      // Add image element to document
      $("#weather-icon").append(img);

      // Show hidden elements
      $("#icon-div").show();
      $("#forecast").show();
      $("#date").show();
      $("#wind").show();
      $("#humidity").show();
      $("#UV").show();

      // Set date for current weather
      $("#date").text(new Date().toLocaleDateString());

      // Dynamically update background image using lorem picsum api
      $("#imagebg").css({ 'background-image': imageURL });

      // Run functions for forecast and UV index using city name variable and variable with data for co-ordinates
      getForecast(city);
      UVIndex(data.coord.lat, data.coord.lon);

    });
}

// Create function for 5 day forecast
function getForecast(city) {
  // getForecast using api and parameters
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

  // Fetch data from api
  fetch(queryURL)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {

      // loop over all forecasts using 3 hour increments
      console.log(data);
      $('#card-array').empty();

      // variable to hold data.list from api
      let results = data.list;
      console.log(results)

      //Set start date and check against it
      //set end date endDate = startDate + 5
      for (let i = 0; i < results.length; i++) {

        let day = Number(results[i].dt_txt.split('-')[2].split(' ')[0]);
        let hour = results[i].dt_txt.split('-')[2].split(' ')[1];
        console.log(day);
        console.log(hour);

        if (results[i].dt_txt.indexOf("12:00:00") !== -1) {

          // create variables for generating html elements and css classes for cards
          const card = $("<div>").addClass("card");
          const cardBody = $("<div>").addClass("card-body");

          // create variables for generating html elements and css classes, replace text with API data for 5 day forecast
          const cityDate = $("<h3>").addClass("card-date").text(new Date(results[i].dt_txt).toLocaleDateString());
          const temperature = $("<p>").addClass("card-details").text("Temp: " + results[i].main.temp_max + " °F");
          const humidity = $("<p>").addClass("card-details").text("Humidity: " + results[i].main.humidity + "%");
          const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results[i].weather[0].icon + ".png");

          // add elements to the html document
          cardBody.append(cityDate, image, temperature, humidity);
          card.append(cardBody);
          $("#card-array").append(card);

        }
      }
    });
}

// Create function for UV index data
function UVIndex(lat, lon) {
  var queryURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`;

  // Fetch data from api
  fetch(queryURL)
    .then(function (data) {
      return data.json();
    })

    // Create variables and define html element targets to pass data to
    .then(function (data) {
      var uv = $("#UV").text("UV Index: ");
      var badge = $("<span>").addClass("weather-info-badge-positive").text(data.value);

      // if else statements for setting badge color for UV index
      if (data.value < 3) {
        badge.addClass("weather-info-badge-positive");
      }
      else if (data.value < 7) {
        badge.addClass("weather-info-badge-warning");
      }
      else {
        badge.addClass("weather-info-badge-danger");
      }

      // add elemenets to html document
      $("#UV .weather-info").append(uv.append(badge));
    });
}

// load document
$(document).ready(function () {

  // hide non-required elements
  $("#icon-div").hide();
  $("#forecast").hide();
  $("#date").hide();
  $("#wind").hide();
  $("#humidity").hide();
  $("#UV").hide();
  // Set text on load
  $("#temp").text(" - John Ruskin");
  $("#currentCity").text("There is no such thing as bad weather, only different kinds of good weather.");

  // event listener on submission of form
  document.querySelector("#search-form").addEventListener("submit", function (e) {
    // prevent clearing of input after submission
    e.preventDefault();

    // create variable to store string from input
    let cityFromInput = document.querySelector("#search-term").value;
    // console.log(city)
    getWeather(cityFromInput);
    getForecast(cityFromInput);
    
    var citiesSearched = inputCity.value.trim();
    if (citiesSearched === "") {
      return;
    }
    // Function to add to history list
    cityHistory.push(citiesSearched);
    inputCity.value = "";

    // Run functions for adding to localStorage & displaying search history
    storecityHistory();
    rendercityHistory();

  });

  init()

      // Event handler for searching from search history list
      $("li").on("click", function() {
        getWeather($(this).text());
      });

});