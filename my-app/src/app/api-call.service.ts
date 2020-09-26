import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiCallService {
  private REST_API_SERVER = "https://api.openweathermap.org/data/2.5/weather?q=";
  private ID = "&appid=f13d9a4c716f47f7fa06bc732c55e049";
  private WeatherData = [];
  constructor(private httpClient: HttpClient) { }

  public setWeather(city){
    this.httpClient.get(this.REST_API_SERVER + city + this.ID).subscribe((data: any[])=>{
      console.log(data);
      this.WeatherData = data;
    })
  }

  public getWeather(){
    return this.WeatherData;
  }
}
