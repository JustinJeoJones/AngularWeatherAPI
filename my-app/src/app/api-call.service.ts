import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiCallService {
  private REST_API_SERVER = "https://api.openweathermap.org/data/2.5/weather?q=";
  private ID = "&appid=f13d9a4c716f47f7fa06bc732c55e049";
  private unit = "&units=imperial";
  private WeatherData = [];

  public displayCity = "";
  public displayDescription = "";
  public displayTemp = "";
  public displayFeel = "";
  public displayWind = "";

  constructor(private httpClient: HttpClient) { }

  public setWeather(city){
    this.httpClient.get(this.REST_API_SERVER + city + this.unit + this.ID).subscribe((data: any[])=>{
      console.log(data);
      this.displayCity = data['name'];
      this.displayDescription = data['weather'][0]['description'];
      this.displayTemp = data['main']['temp'];
      this.displayFeel = data['main']['feels_like'];
      this.displayWind = data['wind']['speed'];
      this.WeatherData = data;
    })
  }

  public getWeather(){
    return this.WeatherData;
  }
  public getH(){
    return "h";
  }
}
