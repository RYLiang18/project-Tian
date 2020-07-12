export default class Weather {
    constructor(rawWeatherData) {
        this.weatherDescription = rawWeatherData.weather[0].description;
        this.temp = rawWeatherData.main.temp;
        this.minTemp = rawWeatherData.main.temp_min;
        this.maxTemp = rawWeatherData.main.temp_max;
    }
}