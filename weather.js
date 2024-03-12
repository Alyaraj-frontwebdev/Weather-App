const city_name = document.querySelector(".city-name");
const temp = document.querySelector(".temp");
const icon = document.querySelector(".icon");
const weatherStatus = document.querySelector(".status");
const humid = document.querySelector(".humid");
const windSpeed = document.querySelector(".wind-speed");
const form = document.querySelector(".form");
const inp = document.querySelector(".inp");
const bgVideo = document.querySelector('.bg-video');

async function showWeather(){
  const cityName = inp.value;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=10a54e4b21f475a2fbd5f4aa8b84dbf1`);
  const data = await response.json();
  console.log(data);

  city_name.innerHTML = `<h1>${data.name}</h1>`;
  temp.innerHTML = `<strong>${Math.round(data.main.temp)}<sup>o</sup> C</strong>`;
  weatherStatus.innerHTML = `<i>${data.weather[0].main}</i>`;
  humid.innerHTML = data.main.humidity + "%";
  windSpeed.innerHTML = data.wind.speed + " kmph";

  if(data.weather[0].main == "Clear"){
    bgVideo.src = "clear.mp4";
  }
  else if(data.weather[0].main == "Haze"){
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="white" class="bi bi-cloud-haze" viewBox="0 0 16 16">
    <path d="M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1z"/>
  </svg>`
    bgVideo.src = "haze.mp4";
  }
}

form.addEventListener("submit", showWeather);