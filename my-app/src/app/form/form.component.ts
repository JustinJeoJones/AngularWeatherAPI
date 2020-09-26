import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private apiCallService: ApiCallService) { }
  city = "";
  
  ngOnInit(): void {
  }
  onKey(event: any) { // updates city
    this.city = event.target.value;
  }
  onClick(){ //get weather data
    this.apiCallService.setWeather(this.city);
  }

}
