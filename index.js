const DOM = (() =>{
  const searchButton = document.querySelectorAll(".search-button");
  const resetButton = document.querySelectorAll(".reset-button");
  searchButton.forEach(button => {
    button.addEventListener('click', currentWeather);
  });
  
  resetButton.forEach(button => {
    button.addEventListener('click', clearSearch);
  });
})();

async function currentWeather(){

  const searchCountry = document.getElementById("country").value;
  const searchCity = document.getElementById("city").value;

  try {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCountry + "," + searchCity + "&appid=6819c17f397062a2d20ab3b669ea53f7&units=metric");
    const weather = await response.json();
    console.log("fetching current weather data from API...", weather);
    return weather;
  }
  catch(error){
    console.log("something went wrong", error)

  }
}
function clearSearch(){
  document.getElementById("country").value = "";
  document.getElementById("city").value = "";
}



