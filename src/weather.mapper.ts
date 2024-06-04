import {WeatherApiResponse} from "./weather-response.model";
export enum WeatherType  {
    SUNNY = 1,
    MOSTLY_SUNNY ,
    PARTLY_SUNNY,
    INTERMITTED_CLOUDS,
    HAZY_SUNSHINE,
    MOSTLY_CLOUDY,
    CLOUDY,
    DREARY,
    FOG = 11,
    SHOWERS,
    MOSTLY_CLOUDY_SHOWERS,
    PARTLY_SUNNY_SHOWERS,
    T_STORMS,

}
export interface CustomWeatherModel {
    minTemp: number;
    maxTemp: number;
    weatherType: WeatherType;
    date: Date;


}
function fahrenheitToCelsius(fahrenheit : number){
    return (fahrenheit - 32) * 5/9;
}
export function mapApiResponse(apiResponse: WeatherApiResponse): CustomWeatherModel {
    const entry = apiResponse.DailyForecasts[0];
    return {
        date: new Date(entry.Date),
        maxTemp: fahrenheitToCelsius(entry.Temperature.Maximum.Value),
        minTemp: fahrenheitToCelsius(entry.Temperature.Minimum.Value),
        weatherType: apiResponse.Headline.Severity
    }
}