import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiCallService {
  private REST_API_SERVER = "https://api.openweathermap.org/data/2.5/weather?q=hudsonville&appid=f13d9a4c716f47f7fa06bc732c55e049";
  constructor(private httpClient: HttpClient) { }

  public getWeather(){
    return this.httpClient.get(this.REST_API_SERVER);//this.REST_API_SERVER
  }
}
