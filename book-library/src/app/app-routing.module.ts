import { DetailsBookComponent } from './components/book/details-book/details-book.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { ListBookComponent } from './components/book/list-book/list-book.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ListBookComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'list-book', component: ListBookComponent },
  { path: 'edit-book', component: EditBookComponent },
  { path: 'details-book', component: DetailsBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
