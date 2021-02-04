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

![Day planner list](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/Initial-load-screen.png?raw=true "Day planner list")
<br>

2. Each row is color coded. Pink denotes the current hour of the day, Teal represents hours left/upcoming. Gray represents time elapsed/passed.

![Color blocks representing current, upcoming and past time rows](https://github.com/FAC-73/blue-monday-planner/blob/main/Assets/Images/colorCodes.png?raw=true "Color blocks representing current, upcoming and past time rows")
<br>

3. The current date is displayed in the header of the page.

![Current date](https://github.com/FAC-73/blue-monday-planner/blob/main/Assets/Images/initialScreen.png?raw=true "Current date")
<br>

4. Onload a pre-defined event is included so that the planner doesn't appear empty. 

![Pre-defined event](https://github.com/FAC-73/blue-monday-planner/blob/main/Assets/Images/initialScreen.png?raw=true "Pre-defined event")
<br>

5. To add an event to an hour clicking or focus on a row and type the name of the event into the input. 

![Add/update event](https://github.com/FAC-73/blue-monday-planner/blob/main/Assets/Images/FocusAhead.png?raw=true "Add/update event")
<br>

6. Clicking save stores the event to localStorage. If focus is lost from the input prior to clicking save, the save button pulses orange until the user actions the button. The event will not be saved to localStorage if this is not actioned, and changes are lost. <br><br>A prevent default method is used to stop the default behavior of the input to clear the content on submit.

![Save changes](https://github.com/FAC-73/blue-monday-planner/blob/main/Assets/Images/saveUpdatePrompt.png?raw=true "Save changes")
<br>

7. If the user leaves the page, refreshes or closes the browser. On subsequent reload the events are stored and shown when the page has loaded. 
<br>

8. To delete an event. Remove the text from the input and click save. Again, if focus is lost after removing text the save button will pulse to alert the user to commit the change. Otherwise it will not be saved in localStorage. 
<br>


#### HTML, CSS and Javascript & Jquery
1. Index.html - Contains basic layout structure. Main planner content is contained in a div using the container class from bootstrap to leverage the responsive grid, with the ID 'dayEventContainer'. Here javascript and Jquery dynamically appends the divs for displaying the hour, input for events, and the save button. 
Most div's leverage Bootstrap CSS classes for responsive purposes.
Semantic html is used for elements such as header, text elements.  

- For improved accessibility additional descriptions for icons has been included. 

2. styles.css - Contains layout, styling and media-queries and animations, as well as leveraging bootstrap CSS grid via the CDN. 

3. script.js - Contains variables, variable arrays and objects for declaring current time and hour. 
- Makes use of the moment.js API for pulling time and date information. Date is displayed in the header of the document. Time is stored in an array and has variables set for determining the 9am - 5pm typical work day 
- Functions for creating a row to display the time by hour. As well as add text into the input to create an even and to save it to local storage using JSON stringify method. 
- A for loop for iterating through the hours 9am - 5pm (17:00) for creating the event array.
- Two eventListeners one onClick event to store the event into localStorage through clicking the save button. The second an onChange event to determine if the input content has been modified and needs to trigger a changeClass method if changes are not saved. 
- A function to change the color of the rows determined on whether the hour is current, upcoming or passed. Using if and else if statements based on the time stored in the variable 'hour
- If, Else statements for validating whether there are saved events in localStorage on load of the document which are appended into the DOM elements. and to pass this data into an array


#### Responsive view example - On mobile
![Responsive layout](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/Mobile1.png?raw=true "Responsive views")

![Responsive layout](https://github.com/FAC-73/world-in-motion/blob/main/Assets/Images/MobileInput.PNG?raw=true "Responsive views")


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
