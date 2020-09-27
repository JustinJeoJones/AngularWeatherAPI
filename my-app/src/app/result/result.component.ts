import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(public apiCallService: ApiCallService) { }
  city = "H";
  ngOnInit(){
    
  }
  getWeather(){
    this.apiCallService.getWeather();
  }
  
}


 