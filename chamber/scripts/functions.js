// this needs to run on every page to set up the mobile menu - since every page uses this javascript, I'll just put it here
document.querySelector(".dropdown").addEventListener("click", () => {
    const dropdownContent = document.querySelector(".dropdown-content");

    if (window.getComputedStyle(dropdownContent).display === "block")
        dropdownContent.style.display = "none";
    else
        dropdownContent.style.display = "block";
})

document.addEventListener("click", function (event) {
    const dropdownContent = document.querySelector(".dropdown-content");
    const dropdownIcon = document.querySelector(".fa-bars");
    if (event.target !== dropdownIcon) {
        dropdownContent.style.display = "none"; // Close modal if background is clicked
    }
});

export async function getMemberInfo(){
    // const url = "https://github.com/Teilanialicia/wdd231/blob/main/chamber/data/members.json";
    // const url = "http://localhost:5500/chamber/data/members.json"
    const url = "https://api.github.com/repos/Teilanialicia/wdd231/contents/chamber/data/members.json";

    try {
        const response = await fetch(url);
        const data = await response.json();

        const json = JSON.parse(atob(data.content));

        return json;

    } catch (error) {
        console.error(error.message);
    }
}

export async function memberCards(members, gridClassName = "member-grid") {
    const display = document.querySelector("." + gridClassName);

    // we need to set the innerHTML to "" to make sure it is empty every time we run the memberCards function, otherwise it will keep adding to what is already there.
    document.querySelector("." + gridClassName).innerHTML = ""
    
    members.forEach(member => {
        let card = document.createElement("div");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let logo = document.createElement("img");
        let name = document.createElement("p");

        card.className = "member-card";
        logo.src = member.image;
        logo.alt = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.href = member.website;
        website.textContent = "Visit website";
        name.innerText = member.name;
        name.className = "member-name-hide";

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        document.querySelector("." + gridClassName).appendChild(card);
    });
};

export function addClickListener() {
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector(".member-grid");

    gridbutton.addEventListener("click", () => {
        display.classList.add("member-grid");
        display.classList.remove("list");

        document.querySelectorAll(".member-name-show").forEach(memberName => {
            memberName.className = "member-name-hide";
        });
    });

    listbutton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("member-grid");

        document.querySelectorAll(".member-name-hide").forEach(memberName => {
            memberName.className = "member-name-show";
        });
    });
}

export async function getRandomMembers(members) {
    let randomMembers = [];
    for(let i=0; i < 3; i++) {
        const randomInt = getRandomInt(0, members.length-1);
        randomMembers.push(members[randomInt]);
        members.splice(randomInt, 1);
    }

    return randomMembers;
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function getWeather(latitude, longitude) {
    const apiKey = 'ee55d100f0f66097498f60fcc17f2840';
    const weatherCacheKey = 'weatherData';
    // 3600000
    const cacheExpiry = 3600000; // Cache duration (e.g., 1 hour in milliseconds)
    // Check for cached data and timestamp
    const cachedData = localStorage.getItem(weatherCacheKey);
    const cachedTimestamp = localStorage.getItem(`${weatherCacheKey}_timestamp`);

    // If cached data exists and is still valid
    if (cachedData && cachedTimestamp && (Date.now() - cachedTimestamp < cacheExpiry)) {
        const weatherData = JSON.parse(cachedData);
        console.log('Using cached data');
        return weatherData;
    }

    // Fetch new data from the API if no valid cached data 34.7308 -117.8107
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily,alerts&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();

        // Save the data and timestamp in localStorage
        localStorage.setItem(weatherCacheKey, JSON.stringify(weatherData));
        localStorage.setItem(`${weatherCacheKey}_timestamp`, Date.now());

        console.log('Using API data');
        return weatherData;
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

export async function getForecast(latitude, longitude) {
    const apiKey = 'ee55d100f0f66097498f60fcc17f2840';
    const forecastCacheKey = 'forecastData'
    const cacheExpiry = 3600000; // Cache duration (e.g., 1 hour in milliseconds)
    // Check for cached data and timestamp
    const cachedData = localStorage.getItem(forecastCacheKey);
    const cachedTimestamp = localStorage.getItem(`${forecastCacheKey}_timestamp`);

    // If cached data exists and is still valid
    if (cachedData && cachedTimestamp && (Date.now() - cachedTimestamp < cacheExpiry)) {
        const forecastData = JSON.parse(cachedData);
        console.log('Using cached data');
        return forecastData;
    }

    // Fetch new data from the API if no valid cached data 34.7308 -117.8107
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily,alerts&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const forecastData = await response.json();

        // Save the data and timestamp in localStorage
        localStorage.setItem(forecastCacheKey, JSON.stringify(forecastData));
        localStorage.setItem(`${forecastCacheKey}_timestamp`, Date.now());

        console.log('Using API data');
        return forecastData;
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

export async function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.showModal();
}

export async function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.close();
}