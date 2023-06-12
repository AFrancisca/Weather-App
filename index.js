const DOM = (() => {
  const searchButton = document.querySelectorAll(".search-button");
  const resetButton = document.querySelectorAll(".reset-button");

  searchButton.forEach(button => {
    button.addEventListener('click', currentWeather);
  });

  resetButton.forEach(button => {
    button.addEventListener('click', clearSearch);
  });
})();

async function currentWeather() {
  const searchCountry = document.getElementById("country").value;
  const searchCity = document.getElementById("city").value;

  try {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCountry + "," + searchCity + "&appid=6819c17f397062a2d20ab3b669ea53f7&units=metric");
    const weatherData = await response.json();

    const locationElement = document.getElementById("location");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");

    locationElement.textContent = "Location: " + weatherData.name + ", " + weatherData.sys.country;
    temperatureElement.textContent = "Temperature: " + weatherData.main.temp + " °C";
    descriptionElement.textContent = "Description: " + weatherData.weather[0].description;
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

function clearSearch() {
  document.getElementById("country").value = "";
  document.getElementById("city").value = "";
  clearWeatherInfo();
}

function clearWeatherInfo() {
  const locationElement = document.getElementById("location");
  const temperatureElement = document.getElementById("temperature");
  const descriptionElement = document.getElementById("description");

  locationElement.textContent = "";
  temperatureElement.textContent = "";
  descriptionElement.textContent = "";
}



