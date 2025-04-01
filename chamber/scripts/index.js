import { 
    getMemberInfo, 
    memberCards,
    getRandomMembers,
    getWeather,
    getForecast
} from "./functions.js";

// Create the 3 random member cards
getMemberInfo()
    .then(members => {
        return getRandomMembers(members);
    })
    .then(randomMembers => {
        memberCards(randomMembers);
    });

// Huntsville,CA
const latitude = "45.34";
const longitude = "-79.23"

getWeather(latitude, longitude)
    .then(weatherData => {
        if (weatherData)
            displayWeather(weatherData);
    });

getForecast(latitude, longitude)
    .then(forecastData => {
        if (forecastData)
                displayForecast(forecastData);
    })


// --------------------------------------------------------------------------------------------------------------------

// Display the data
function displayWeather(weatherData) {
    let weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

    const weatherCardDiv = document.getElementById("weather-current");
    weatherCardDiv.innerHTML = "";

    let weatherIconDiv = document.createElement("div");
    let weatherIcon = document.createElement("img");
    let weatherTextDiv = document.createElement("div");
    let temperature = document.createElement("p");
    let weather = document.createElement("p");
    let humidity = document.createElement("p");
    let sunriseTime = document.createElement("p");
    let sunsetTime = document.createElement("p");

    const sunrise = new Date(weatherData.sys.sunrise * 1000);
    var hoursSunrise = sunrise.getHours() < 10 ? '0' + sunrise.getHours() : sunrise.getHours();
    var minutesSunrise = sunrise.getMinutes() < 10 ? '0' + sunrise.getMinutes() : sunrise.getMinutes();
    var secondsSunrise = sunrise.getSeconds() < 10 ? '0' + sunrise.getSeconds() : sunrise.getSeconds();

    const sunset = new Date(weatherData.sys.sunset * 1000);
    var hoursSunset = sunset.getHours() < 10 ? '0' + sunset.getHours() : sunset.getHours();
    var minutesSunset = sunset.getMinutes() < 10 ? '0' + sunset.getMinutes() : sunset.getMinutes();
    var secondsSunset = sunset.getSeconds() < 10 ? '0' + sunset.getSeconds() : sunset.getSeconds();

    weatherIcon.src = weatherIconUrl;
    weatherIcon.id = "weather-icon";
    temperature.innerText = `${Math.round(weatherData.main.temp)} °C`;
    weather.innerText = String(weatherData.weather[0].description).charAt(0).toUpperCase() + String(weatherData.weather[0].description).slice(1);
    humidity.innerText = `Humidity: ${weatherData.main.humidity}`;
    sunriseTime.innerText = `Sunrise: ${hoursSunrise}:${minutesSunrise}am`;
    sunsetTime.innerText = `Sunset: ${hoursSunset}:${minutesSunset}pm`;

    // Add the icon to the weather icon div
    weatherIconDiv.appendChild(weatherIcon);

    // Add the text information to the weather text div
    weatherTextDiv.appendChild(temperature);
    weatherTextDiv.appendChild(weather);
    weatherTextDiv.appendChild(humidity);
    weatherTextDiv.appendChild(sunriseTime);
    weatherTextDiv.appendChild(sunsetTime);
    
    weatherCardDiv.appendChild(weatherIconDiv);
    weatherCardDiv.appendChild(weatherTextDiv);
}

function displayForecast(forecastData) {
    const weatherCardDiv = document.getElementById("weather-forecast");
    weatherCardDiv.innerHTML = "";

    let today = document.createElement("p");
    let tomorrow = document.createElement("p");
    let overmorrow = document.createElement("p");

    today.innerText = `Today: ${forecastData.list[0].main.temp} °C`
    tomorrow.innerText = `Tomorrow: ${forecastData.list[8].main.temp} °C`
    overmorrow.innerText = `Overmorrow: ${forecastData.list[16].main.temp} °C`

    weatherCardDiv.appendChild(today);
    weatherCardDiv.appendChild(tomorrow);
    weatherCardDiv.appendChild(overmorrow);
}