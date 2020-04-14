import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[] = [
    new Book('American Gods', 'Neil Gaiman', 9.99),
    new Book('The Way of Kings', 'Brandon Sanderson', 8.99),
    new Book('Ringworld', 'Larry Niven', 4.89),
    new Book('Norwegian Wood', 'Haruki Murakami', 7.99),
    new Book('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', 6.89),
    new Book('Autobiografija', 'Branislav Nusic', 6.99),
    new Book('Harry Potter and the Chamber of Secrets', 'J. K. Rowling', 7.29),
    new Book('Dune', 'Frank Herbert', 9.39),
    new Book('The Hobbit', 'J. R. R. Tolkien', 10.99)
  ];

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  getBooksByAuthor(author: string): Book[] {
    return this.books.filter((book) => book.author === author);
  }
}
