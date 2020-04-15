import { Component, OnInit } from '@angular/core';

import { Observable, from, range, interval } from 'rxjs';
import { map, filter, reduce, scan } from 'rxjs/operators';

@Component({
  selector: 'matf-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  pokemon: string[] = [];
  from = [];
  range = [];
  interval: Date;
  countdown = 10;

  map = [];
  filter = [];
  reduce = [];
  scan = [];

  constructor() { }

  ngOnInit() {
    this.newObservable1();
    this.newObservable2();
    this.newObservable3();
    this.newObservable4();

    this.operators1();
    this.operators2();
    this.operators3();
    this.operators4();
  }

  newObservable1() {
    const pokemon$ = new Observable<string>((subscriber) => {
      subscriber.next('Bulbasaur');
      subscriber.next('Charmander');
      subscriber.next('Squirtle');
      subscriber.next('Pikachu');

      subscriber.complete();
    });

    pokemon$.subscribe(
      value => this.pokemon.push(value),
      error => {
        console.error(error);
        this.pokemon.push(error);
      },
      () => this.pokemon.push('complete')
    );
  }

  newObservable2() {
    const from$ = from([1, 2, 3, 4, 5]);

    from$.subscribe(
      value => this.from.push(value),
      error => console.error(error),
      () => this.from.push('complete')
    );
  }

  newObservable3() {
    const range$ = range(1, 10);

    range$.subscribe(
      value => this.range.push(value),
      error => console.error(error),
      () => this.range.push('complete')
    );
  }

  newObservable4() {
    const interval$ = interval(1000);

    interval$.subscribe(
      value => this.interval = new Date(),
      error => console.error(error),
      () => console.log('complete')
    );

    const countdown$ = interval(1000);

    const countdownSubscription = countdown$.subscribe(
      value => {
        this.countdown--;
        if (this.countdown === 0) {
          countdownSubscription.unsubscribe();
        }
      },
      error => console.error(error),
      () => console.log('complete')
    );
    // setTimeout(() => countdownSubscription.unsubscribe(), this.countdown * 1000);
  }

  operators1() {
    const o$ = range(1, 5).pipe(
      map(x => 2 * x)
    );

    o$.subscribe(
      value => this.map.push(value)
    );
  }

  operators2() {
    const o$ = range(1, 5).pipe(
      filter(x => x % 2 === 0)
    );

    o$.subscribe(
      value => this.filter.push(value)
    );
  }

  operators3() {
    const o$ = range(1, 9).pipe(
      reduce((acc, x) => acc + x, 0)
    );

    o$.subscribe(
      value => this.reduce.push(value)
    );
  }

  operators4() {
    const o$ = interval(10).pipe(
      scan((acc, x) => acc + x, 0)
    );

    const s = o$.subscribe(
      value => this.scan.push(value)
    );

    setTimeout(() => s.unsubscribe(), 100);
  }

}
