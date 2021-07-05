import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent{
  comments="comment";
  // array:string[]=[]
  array:any[]=[]

  postComment(){
    this.array.push(this.comments)
    // this.array.push()
  }

}
