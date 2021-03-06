import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'matf-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  helloWorld = 'Hello World';
  roll: number;
  evilScript: string;
  name = 'Charlie Brown';
  counter: number;
  bananaCounter: number;
  today = new Date();
  isWolverine = false;
  isSpiderMan = false;
  isIronMan = true;

  constructor() { }

  ngOnInit() {
    this.roll = undefined;
    this.counter = 0;
    this.bananaCounter = 15;
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

  doEvil(): void {
    this.evilScript = `
      <div>Evil Script</div>
      <script>
        alert('Evil Done!');
      </script>
    `;
  }

  counterChanged(value: number): void {
    if (value < 0) {
      value = 0;
    }

    this.counter = value;
  }

  toggleWolverineCostume() {
    this.isWolverine = !this.isWolverine;
  }

  toggleSpiderManCostume() {
    this.isSpiderMan = !this.isSpiderMan;
  }

  toggleIronManCostume() {
    this.isIronMan = !this.isIronMan;
  }
}
