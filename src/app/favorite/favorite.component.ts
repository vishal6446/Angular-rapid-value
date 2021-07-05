import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
@Input('isFavorite') isFavorite:boolean=false;
@Output('change') change=new EventEmitter;
constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log('Star Clicked');
    this.isFavorite=!this.isFavorite;
    this.change.emit();
    
  }

}
