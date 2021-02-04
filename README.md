# world-in-motion
Weather dashboard that leverages 3rd party API data that will run in the browser and features dynamically updated HTML and CSS.



![Weather Dashboard](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/WeatherDashboard-animation.png?raw=true "Weather Dashboard")

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
     <li>
      <a href="https://fac-73.github.io/world-in-motion/">View project</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

![Weather Dashboard](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/Initial-load-screen.png?raw=true "Weather Dashboard")
<br><br>

**Built using Javascript, Jquery, HTML, CSS and leveraging a 3rd party API from OpenWeather. This Weather Dashboard application provides allows users to search for a city and pull the current weather and the 5-day-forecast using the OpenWeather API. Past city searches are stored using localStorage and displayed in a list. Clicking the city displays the information again**


### Built With

* [HTML](https://www.w3schools.com/)
* [CSS](https://www.w3schools.com/)
* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Javascript](https://www.w3schools.com/)
* [Jquery](https://jquery.com/)
* [FontAwesome](https://fontawesome.com/)
* [OpenWeather](https://openweathermap.org/api)
* [LoremPicsum](https://picsum.photos/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps. You can also download the source files provided. You will need a text editor such as Visual Studio Code, Xcode or similar to edit the source code.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/FAC-73/world-in-motion.git
   ```

2. Pull the latest
   ```sh
   git pull
   ```


<!-- USAGE EXAMPLES -->
## Usage

![Weather Dashboard](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/WeatherDashboard-animation.png?raw=true  "Weather Dashboard")

#### What's included
1. HTML, CSS and Javascript (incl. Jquery) files include the source code for running the Weather Dashboard Application
2. This project demonstrates ways in which javavscript and jquery can be used to manipulate the DOM elements, store and pass data to and from variables, and dynamically update HTML and trigger interactions through the use of Jquery eventListeners and the the OpenWeather API. 


## Project deliverables

#### Included functionality
1. The weather dashboard includes a search input for querying weather by city. It also displays the current weather for the location, as well as the UV index. A 5 day forecast is displayed using a dynamic javascript card array. 

![On load view](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/Initial-load-screen.png?raw=true "on load view")
<br>

2. When a city is searched the string is stored in localStorage and a history list is appended to the document. 

![History list](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/history-list.png?raw=true "History list")
<br>

3. The current date is displayed next to the current city along with a descriptive weather icon pulled from the API. 
<br>

4. Weather for the current day is is displayed in the p tags within the main container. Data from the API is passed into the p tag with the correct ID corresponding to the data type. i.e Wind speed, Humidity, Temperature.

![Current weather](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/casablanca.png?raw=true "Current weather")
<br>

5. UV Index information is displayed in a semantically colored badge to represent low levels in green vs. high levels in red

![UV Badge](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/capeTown.png?raw=true "UV Badge")
<br>

6. A 5 day forcast is dynamically displayed in a list of 5 cards. Each card includes an icon, a date, temperature and humidity details. 

![Save changes](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/history-list.png?raw=true "Save changes")
<br>

7. If the user leaves the page, refreshes or closes the browser. On subsequent reload the events are stored and shown when the page has loaded. 
<br>

8. A final bonus item was to include the loremPicsum API for the background image. Where possible a location image is shown in the background to accompany the search term. 
<br>


#### HTML, CSS and Javascript & Jquery
1. Index.html - Contains basic layout structure. Main weather information is contained in a div using the container class from bootstrap and leverages the responsive grid. 
<br>
Javascript and Jquery dynamically append the divs and html elements for displaying the current weather details, cards and list items. 
Most div's leverage Bootstrap CSS classes for responsive purposes.
Semantic html is used for elements such as header, text elements.  

- For improved accessibility additional descriptions for icons has been included. 

2. styles.css - Contains layout, styling, and bootstrap CSS CDN is used to leveraging the responsive grid css.

3. script.js - Contains variables, variable arrays and objects for declaring current time and hour. 
- Makes use of the OpenWeather API for pulling current weather and UV index and 5-day forecast. Current date is displayed in the header of the document. 5-day forecast cards includes dates for each day. 
- Functions for creating a rows to display search history. Javascript Fetch call to get data from the OpenWeather API when a search is submitted and return the JSON data. 
- A function to store searches into localStorage using the JSON stringify method
- A for loop for creating the card array for the 5-day forecast based on the start date
-  Functions for adding JSON data from API into dynamically generated HTML elements using Jquery and appending to the document. 
- Function to call for UV index data from API and append it to the document in the form of a badge along with with semantic colors representing low or high levels of UV. Adding a CSS class based on the value. 
- Two eventListeners one submit event to trigger the search/api fetch call and to store the event into localStorage. The second an onClick event on the search history list that re-displays the weather information for that previous search. 


#### Responsive view example - On mobile
![Responsive layout](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/responsive.png?raw=true "Responsive views")



#### Pushing to GitHub

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/FeatureName`)
3. Commit your Changes (`git commit -m 'Add some FeatureName`)
4. Push to the Branch (`git push origin feature/FeatureName`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. 

See [LICENSE](https://github.com/FAC-73/world-in-motion/blob/main/LICENSE) for more information.



<!-- CONTACT -->
## Contact

Kay Davis

Project repo link: [https://fac-73.github.io/world-in-motion](https://fac-73.github.io/world-in-motion/)
<br>
Project website: [https://github.com/FAC-73/world-in-motion](https://github.com/FAC-73/world-in-motion)
