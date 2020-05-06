import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'matf-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  name = new FormControl('Slim');

  personForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    surname: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  boardGame = this.formBuilder.group({
    name: ['', Validators.required, Validators.maxLength(100)],
    creator: [''],
    info: this.formBuilder.group({
      numberOfPlayers: [1, Validators.pattern('[1-9][0-9]*')],
      duration: [1, Validators.pattern('[1-9][0-9]*')]
    })
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  getNewName() {
    this.name.setValue('Bob');
  }

  updateProfile() {
    this.personForm.patchValue({
      name: 'Bob',
      address: {
        street: '123 Main Street'
      }
    });
  }

}
