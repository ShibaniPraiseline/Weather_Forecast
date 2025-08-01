// controller.js
const WeatherController = {
  async handleSearch() {
    const city = document.getElementById("cityInput").value;
    try {
      const weatherData = await WeatherModel.fetchWeather(city);
      WeatherView.displayWeather(weatherData);
    } catch (error) {
      WeatherView.showError(error.message);
    }
  }
};
