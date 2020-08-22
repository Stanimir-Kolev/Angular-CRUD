import { ServerCommunicationService } from './../../../services/server-communication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private serverCommunication: ServerCommunicationService) {
  }

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      author: ['', Validators.required],
      genres: ['', Validators.required],
      publishYear: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.serverCommunication.createBook(this.addForm.value)
      .subscribe(data => {
        if (data.status === 200) {
          alert('Book add successfully.');
          this.router.navigate(['list-book']);
        } else {
          alert(data.message);
        }
      });
  }
  
  goToListBook(): void {
    this.router.navigate(['list-book']);
  }
}
