// view.js
const WeatherView = {
  displayWeather(data) {
    document.getElementById("result").innerHTML = `
      <h3>Weather in ${data.city}</h3>
      <p>🌡️ Temperature: ${data.temperature} °C</p>
      <p>💧 Humidity: ${data.humidity}%</p>
      <p>☁️ Condition: ${data.condition}</p>
    `;
  },

  showError(message) {
    document.getElementById("result").innerHTML = `<p style="color:red;">${message}</p>`;
  }
};
