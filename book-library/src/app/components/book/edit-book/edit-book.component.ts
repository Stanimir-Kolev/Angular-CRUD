import { ApiResponse } from './../../../models/api-response.model';
import { ServerCommunicationService } from './../../../services/server-communication.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: Book;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private serverCommunication: ServerCommunicationService) { }

  ngOnInit(): void {
    const bookId = window.localStorage.getItem('editBookId');
    if (!bookId) {
      alert('Invalid action.');
      this.router.navigate(['list-book']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      author: ['', Validators.required],
      genres: ['', Validators.required],
      publishYear: ['', Validators.required],
    });
    this.serverCommunication.getBookById(+bookId)
      .subscribe(data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit(): void {
    this.serverCommunication.updateBook(this.editForm.value)
      .pipe()
      .subscribe(
        (data: ApiResponse) => {
          if (data.status === 200) {
            alert('Book updated successfully.');
            this.router.navigate(['list-book']);
          } else {
            alert(data.message);
          }
        },
        (error) => {
          alert(error);
        });
  }
  goToListBook(): void {
    this.router.navigate(['list-book']);
  }
}
