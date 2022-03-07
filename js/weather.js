const API_KEY = "64ae8da12abee27ca8b16fbd19c00578";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `📍 ${data.name}`;
      const weatherNow = data.weather[0].main;
      if (weatherNow === "Clouds") {
        const weatherNowEmoji = "⛅";
        weather.innerText = `${weatherNowEmoji} ${data.main.temp}°C`;
      } else if (weatherNow === "Clear") {
        const weatherNowEmoji = "☀️";
        weather.innerText = `${weatherNowEmoji} ${data.main.temp}°C`;
      }
      console.log(url);
    });
}

function onGeoError() {
  //위치를 불러올 수 없을 때
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
