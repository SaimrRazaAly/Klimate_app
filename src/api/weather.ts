import { API_CONFIG } from "./conf";
import { Coordinates, ForecastData, GeoCodingApi, WeatherData } from "../Types/types";

class Weather {
  private CreateUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      appid: API_CONFIG.API_KEY,
      ...params,
    });

    return `${endpoint}?${searchParams.toString()}`;
  }
  private async fetchWeather<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `ERROR IN FETCHING THE DATA >>>>>>>>>>>> ${response.statusText}`
      );
    }

    return response.json();
  }

  async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    const url = this.CreateUrl(`${API_CONFIG.BASE_URL}/weather`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });

    return this.fetchWeather<WeatherData>(url);
  }
  async getForecast({ lat, lon }: Coordinates): Promise<ForecastData> {
    const url = this.CreateUrl(`${API_CONFIG.BASE_URL}/forecast`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });

    return this.fetchWeather<ForecastData>(url);
  }
  async getReverseGeo({ lat, lon }: Coordinates): Promise<GeoCodingApi[]> {
    const url = this.CreateUrl(`${API_CONFIG.GEO}/reverse`, {
      lat: lat.toString(),
      lon: lon.toString(),
      limitL:1
    });

    return this.fetchWeather<GeoCodingApi[]>(url); 
    /* This means that the function returns a promise, and when that promise is resolved, it will give you an array ([]) of GeoCodingApi objects. */
  }
}


export const weatherAPI = new Weather();