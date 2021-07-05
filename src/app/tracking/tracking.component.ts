import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
 courses:Course[]=[];
 canSave=true;
  constructor() { }
  ngOnInit(): void {
  }
  loadCourses(){
    this.courses=[
      {id:1,name:'Course #1'},
      {id:1,name:'Course #2'},
      {id:1,name:'Course #3'},
      {id:1,name:'Course #4'}
    ]
  }
  trackCourse(index:number,course:Course){
    return course ? course.id:undefined;
  }
  changeState(){
    this.canSave=!this.canSave
  }
}
interface Course{
  id:number,
  name:string
}

