// model.js
const WeatherModel = {
  apiKey: "4b47bae8c10d4b27263ee22cf8e3e169", // from OpenWeatherMap, etc.
  apiUrl: "https://api.openweathermap.org/data/2.5/weather",

  async fetchWeather(city) {
    const response = await fetch(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error("Weather data not found.");
    }
    const data = await response.json();
    return {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      condition: data.weather[0].main,
    };
  }
};
