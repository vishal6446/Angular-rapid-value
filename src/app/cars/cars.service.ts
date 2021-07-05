import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  getcars(){
    return["Tata",
    'Suzuki',
    'Mg',
    'Polo'
  ]
  }
  title1='Hai cars'
  constructor() { }
}
