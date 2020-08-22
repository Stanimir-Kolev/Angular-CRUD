import { ApiResponse } from './../../../models/api-response.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../models/book.model';
import { ServerCommunicationService } from '../../../services/server-communication.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: Array<Book>;

  displayedColumns: string[] = ['id', 'title', 'authors', 'publishYear', 'genres', 'actions'];
  dataSource: MatTableDataSource<Book>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router, private readonly serverCommunication: ServerCommunicationService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.serverCommunication.getBooks()
      .subscribe(data => {
        console.log(data.message);
        this.books = data.result;
        this.dataSource = new MatTableDataSource(this.books);
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteBook(book: Book): void {
    this.serverCommunication.deleteBook(book.id)
      .subscribe(data => {
        console.log(data.message);
        this.books = this.books.filter(u => u !== book);
      });
  }

  editBook(book: Book): void {
    window.localStorage.removeItem('editBookId');
    window.localStorage.setItem('editBookId', book.id.toString());
    this.router.navigate(['edit-book']);
  }

  detailsBook(book: Book): void {
    window.localStorage.setItem('detailsBookId', book.id.toString());
    this.router.navigate(['details-book']);
  }

  addBook(): void {
    this.router.navigate(['add-book']);
  }

}
