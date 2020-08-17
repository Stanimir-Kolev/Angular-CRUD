import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListBookComponent } from './components/book/list-book/list-book.component';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
