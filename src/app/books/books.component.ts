import { Component, OnInit } from '@angular/core';
import { BookServices } from './books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
books;
  constructor(service:BookServices) { 
    this.books=service.getBooks()
  }

  ngOnInit(): void {
  }

}
