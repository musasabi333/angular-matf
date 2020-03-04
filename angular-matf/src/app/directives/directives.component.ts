import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'matf-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  peoples = ['Elves', 'Men', 'Dwarves', 'Hobbits', 'Ents', 'Orcs', 'Trolls'];
  selectedCat = false;
  selectedDog = false;

  selected: string;

  constructor() { }

  ngOnInit() {
  }

  setValue(people: string): void {
    this.selected = people;
  }

}
