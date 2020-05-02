import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { BookstoreListComponent } from './bookstore-list/bookstore-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BookComponent,
    BookstoreComponent,
    BookstoreListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    BookstoreListComponent
  ]
})
export class BookstoresModule { }
