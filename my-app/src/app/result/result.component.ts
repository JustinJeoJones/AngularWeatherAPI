import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  products = [];
  constructor(private apiCallService: ApiCallService) { }

  ngOnInit(){
    this.apiCallService.getWeather().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })
  }

}
