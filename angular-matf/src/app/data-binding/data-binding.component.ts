import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'matf-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  helloWorld = 'Hello World';
  roll: number;

  constructor() { }

  ngOnInit() {
    this.roll = undefined;
  }

  returnFive(a?: number, b?: number): number {
    if (a === undefined || b === undefined) {
      return 5;
    } else {
      return a + b;
    }
  }

  rollForInitiative(): void {
    this.roll = Math.floor((Math.random() * 100) % 20 + 1);
  }

}
