import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { BookstoreListComponent } from './bookstore-list/bookstore-list.component';

@NgModule({
  declarations: [
    BookComponent,
    BookstoreComponent,
    BookstoreListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookstoreListComponent
  ]
})
export class BookstoresModule { }
