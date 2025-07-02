const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");
const errorMsg = document.getElementById("errorMsg");


const API_KEY = "1b56e51c35c675c64d1b94a6f25d0c1c";
let currentUnit = "metric";


searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        showError("Please enter a city name.");
        return;
    }

    fetchWeather(city);
});

document.querySelectorAll('input[name="unit"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
        currentUnit = e.target.value;
        const city = cityName.textContent.split(",")[0];
        if (city) {
            fetchWeather(city);
        }
    });
});
  

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
    )}&appid=${API_KEY}&units=${currentUnit}`;
      

    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("City not found");
            }
            return res.json();
        })
        .then((data) => {
            displayWeather(data);
        })
        .catch((err) => {
            showError(err.message);
        });
}

function displayWeather(data) {
    cityName.textContent = data.name + ", " + data.sys.country;
    const unitSymbol = currentUnit === "metric" ? "°C" : "°F";
    temperature.textContent = `${data.main.temp}${unitSymbol}`;
    description.textContent = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;

    weatherInfo.classList.remove("hidden");
    errorMsg.classList.add("hidden");
}

function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.remove("hidden");
    weatherInfo.classList.add("hidden");
}
