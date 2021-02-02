
// store api key
const apiKey = "a292350487a9c686dbf7401ea7f2d780";


// Function for current weather
function getWeather(city) {
  // getWeather using api and parameters, get background image based on api and search parameters
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  var imageURL = `url(https://picsum.photos/1440/1024?${city})`;
  // var locationAPI = `http://api.ipstack.com/${IP}?access_key=${apiKeyLocation}`;



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
      var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      // Add image element to document
      $("#weather-icon").append(img);

      // Show hidden elements
      $("#icon-div").show();
      $("#forecast").show();

      // Add list items and pass search result name 
      var listItem = $("<li>").addClass("list-item-text").text(city);
      $("#cities-list").append(listItem);

      // Set date for current weather
      $("#date").text(new Date().toLocaleDateString());

      // Dynamically update background image using lorem picsum api
      $("#imagebg").css({ 'background-image': imageURL });

    });
}

// Create function for 5 day forecast
function getForecast(city) {
  // getWeather using api and parameters
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(queryURL)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {

      // loop over all forecasts (by 3-hour increments)
      console.log(data);
      console.log(data.dt);
      $('#card-array').empty();

      // variable to hold data.list
      let results = data.list;
      console.log(results)

      //declare start date to check against
      //have end date, endDate = startDate + 5
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
          const cityDate = $("<h3>").addClass("card-date").text(new Date().toLocaleDateString());
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


// function UVIndex(lat, lon) {
//   var queryURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`;

//   fetch(queryURL)
//     .then(function (data) {
//       return data.json();
//     })

//     .then(function (data) {
//       var uv = $("<p>").text("UV Index: ");
//       var btn = $("<span>").addClass("btn btn-sm").text(data.value);

//       // change color depending on uv value
//       if (data.value < 3) {
//         btn.addClass("btn-success");
//       }
//       else if (data.value < 7) {
//         btn.addClass("btn-warning");
//       }
//       else {
//         btn.addClass("btn-danger");
//       }

//       $("#today .card-body").append(uv.append(btn));
//     }

//     bodyEl.appendChild(uvEl);
//     uvEl.appendChild(buttonEl);
//   }
// }); 

      // getForecast(city);
      // UVIndex(data.coord.lat, data.coord.lon);  









// load document
$(document).ready(function () {
  
  // $(window).load(function() {
  //  $("#search-term").text(locationAPI.city);
  // });

  $("#icon-div").hide();
  $("#forecast").hide();
  $("#date").text(new Date().toLocaleDateString());


  // Submit search
  document.querySelector("#search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let cityFromInput = document.querySelector("#search-term").value;
    // console.log(city)
    getWeather(cityFromInput);
    getForecast(cityFromInput);
  });

});










// make the list using add - done

// append the list to the webpage - done

// create HTML content for current weather - done

// append the content to the html - done

// Get weather forecast, loop over in 3 hour increments - done

// function for creating the date - done

//  create html for cards - done 

//  append the cards and add to html - done

//  get UV index from api - TO DO 

// change color depending on value - TO DO

// append to html - TO DO

// store items into localStorage with links - TO DO

// Add event listener - Done
