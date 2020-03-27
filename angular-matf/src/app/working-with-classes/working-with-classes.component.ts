import { Component, OnInit } from '@angular/core';

import { Jedi } from './jedi/jedi';

@Component({
  selector: 'matf-working-with-classes',
  templateUrl: './working-with-classes.component.html',
  styleUrls: ['./working-with-classes.component.css']
})
export class WorkingWithClassesComponent implements OnInit {

  jedi: Jedi[];

  constructor() { }

  ngOnInit() {
    this.jedi = [
      new Jedi('Yoda', 18000, 'https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png'),
      new Jedi('Obi-Wan Kenobi', 13500, 'https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg'),
      new Jedi('Luke Skywalker', 23300, 'https://vignette.wikia.nocookie.net/starwars/images/d/dd/Lukeonskiff.png'),
      new Jedi('Ben Solo', 22400, 'https://vignette.wikia.nocookie.net/starwars/images/b/bc/KyloRenVFcover-TROS.png'),
      new Jedi('Anakin Skywalker', 27800, 'https://vignette.wikia.nocookie.net/starwars/images/0/06/Anakin_podracer.jpg')
    ];

    this.sortJedi();
  }

  sortJedi(): void {
    this.jedi.sort((j1, j2) => j1.midichlorianCount > j2.midichlorianCount ? -1 : 1);
  }

  sort(j1: Jedi, j2: Jedi): number {
    if (j1.midichlorianCount > j2.midichlorianCount) {
      return -1;
    } else {
      return 1;
    }
  }

  addJedi(name: string, midichlorianCount: number, picture: string): void {
    this.jedi.push(new Jedi(name, midichlorianCount, picture));
    this.sortJedi();
  }

}
