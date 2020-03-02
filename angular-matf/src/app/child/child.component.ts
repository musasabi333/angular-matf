import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'matf-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  helloWorld = 'Hello World';

  @Input() parent: string;

  constructor() { }

  ngOnInit() {
  }

}
