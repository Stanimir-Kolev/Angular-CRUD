import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../models/book.model';
import { ServerCommunicationService } from '../../../services/server-communication.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: Book[];
  constructor(private router: Router, private readonly serverCommunication: ServerCommunicationService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.serverCommunication.getBooks()
      .subscribe(data => {
        this.books = data.result;
      });
  }

  deleteBook(book: Book): void {
    this.serverCommunication.deleteBook(book.id)
      .subscribe(data => {
        this.books = this.books.filter(u => u !== book);
      });
  }

  editBook(book: Book): void {
    window.localStorage.removeItem('editBookId');
    window.localStorage.setItem('editBookId', book.id.toString());
    this.router.navigate(['edit-book']);
  }

  addBook(): void {
    this.router.navigate(['add-book']);
  }

}
