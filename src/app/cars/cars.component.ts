import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  title='List of cars'
  cars;
  name;
  constructor(service:CarsService) { 
    this.cars=service.getcars()
    this.name=service.title1
  }

  ngOnInit(): void {
  }

}
