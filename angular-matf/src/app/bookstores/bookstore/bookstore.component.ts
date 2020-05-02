import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'matf-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css'],
  providers: [ BooksService ]
})
export class BookstoreComponent implements OnInit {

  @Input() name: string;

  books: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(
      books => this.books = books,
      error => console.error(error)
    );
  }

  addBook(name: string, author: string, price: number): void {
    this.books.push(new Book(name, author, price));
  }

  filter(author: string): void {
    if (author === undefined || author === '') {
      this.booksService.getBooks().subscribe(
        books => this.books = books,
        error => console.error(error)
      );
    } else {
      this.booksService.getBooksByAuthor(author).subscribe(
        books => this.books = books,
        error => console.error(error)
      );
    }
  }

}
