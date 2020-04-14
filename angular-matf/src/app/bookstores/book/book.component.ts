import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'matf-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  @Input() book: Book;

  @HostBinding('class') class;

  bookType: number;
  infoVisible: boolean;

  @HostListener('mouseover') showInfo() {
    this.infoVisible = true;
  }

  @HostListener('mouseout') hideInfo() {
    this.infoVisible = false;
  }

  ngOnInit() {
    this.bookType = Math.floor(Math.random() * 100 % 4 + 1);
    this.class = 'book' + this.bookType;
  }

}
