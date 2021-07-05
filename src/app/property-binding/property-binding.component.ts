import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  title="Property binding Example"
  imageUrl='https://freepngimg.com/thumb/car/3-2-car-free-download-png.png'
  colSpan=""
  constructor() { }

  ngOnInit(): void {
  }

}
