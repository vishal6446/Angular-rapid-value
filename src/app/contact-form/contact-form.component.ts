import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  firstNameChanged(model:NgModel){
    console.log(model);
    
  }
  formSubmitted(form:NgForm){
    console.log(form);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
