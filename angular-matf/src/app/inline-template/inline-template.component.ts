import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'matf-inline-template',
  template: `
    <h1>Inline Template</h1>
    <div>
      Hello from {{inline}}!
    </div>
  `,
  styleUrls: ['./inline-template.component.css']
})
export class InlineTemplateComponent implements OnInit {

  inline = 'inline template';

  constructor() { }

  ngOnInit() {
  }

}
