import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerCommunicationService } from 'src/app/services/server-communication.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {
  detailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private serverCommunication: ServerCommunicationService) { }

  ngOnInit(): void {
    const bookId = window.localStorage.getItem('detailsBookId');
    if (!bookId) {
      alert('Invalid action.');
      this.router.navigate(['list-book']);
      return;
    }
    this.detailsForm = this.formBuilder.group({
      id: [''],
      title: [''],
      author: [''],
      genres: [''],
      publishYear: [''],
    });
    this.serverCommunication.getBookById(+bookId)
      .subscribe(data => {
        this.detailsForm.setValue(data.result);
      });
  }

  goToListBook(): void {
    this.router.navigate(['list-book']);
  }
}
