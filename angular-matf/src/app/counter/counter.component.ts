import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'matf-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
    // this.counter = 0;
  }

  decrement(): void {
    this.counter--;
    this.counterChange.emit(this.counter);
  }

  increment(): void {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
}
