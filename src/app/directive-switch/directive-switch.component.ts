import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-switch',
  templateUrl: './directive-switch.component.html',
  styleUrls: ['./directive-switch.component.css']
})
export class DirectiveSwitchComponent implements OnInit {
  viewMode='list'
  constructor() { }

  ngOnInit(): void {
  }

}
