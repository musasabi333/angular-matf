import { Component, OnInit } from '@angular/core';

export interface Person {
  name: string;
  surname: string;
}

@Component({
  selector: 'matf-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  person: Person = {name: '', surname: ''};
  person1: Person = {name: 'Slim', surname: 'Shady'};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(`Congratulations ${this.person.name}!`);
  }

}
