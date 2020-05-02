import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('assets/books.json');
  }

  getBooksByAuthor(author: string): Observable<Book[]> {
    return this.http.get<Book[]>('assets/books.json').pipe(
      map(books => books.filter(book => book.author.toLowerCase().includes(author.toLowerCase())))
    );
  }

  addBook(book: Book): void {
    this.http.post<Book>('https://bookstores.com/api/book/', book).subscribe();
  }
}
