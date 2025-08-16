Weather App

**Live Demo:** [Grab an Umbrella](https://grabanumbrella.netlify.app/)  

A responsive web app that shows the current weather for any city using live data from the OpenWeather API.

Features

- Search by city name
- Toggle between Celsius (°C) and Fahrenheit (°F)
- Live temperature and weather description
- Weather icon that updates dynamically
- Error handling for empty input or invalid city
- Fully responsive layout for mobile and desktop

Tech Used

- HTML
- CSS (Responsive with media queries)
- JavaScript (DOM, `fetch()`, event handling)
- JSON from OpenWeather API


What I Learned

- How to work with APIs and fetch real-time data
- DOM manipulation with user input
- Displaying dynamic content
- Adding toggles and units conversion
- Building responsive layouts with media queries
- Handling API errors and input validation

How to Use

1. Clone the repository or download the files
2. Open `index.html` in a browser using **Live Server** (recommended)
3. Enter a city name and click “Search”
4. Toggle between °C and °F using the radio buttons

Screenshot

[Screenshot of weather app](fullscreen.jpeg)
[Screenshot of mobile design](repsonsive.jpeg)

API Reference

Powered by [OpenWeather](https://openweathermap.org/api)  
To use your own API key, replace the value in `script.js`:

```js
const API_KEY = "your_api_key_here";



