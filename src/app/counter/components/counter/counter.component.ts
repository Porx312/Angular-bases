import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>
  <button (click)="increment(22)" >+1</button>
  <button (click)="decrement(2)" >-1</button>
  <button (click)="reset()" >reset</button>`})
export class CounterComponent {
  public title = 'Hola Mundo';
  public counter = 10;

  increment(value: number): void {
    this.counter += value;
  }

  decrement(value: number): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }
}
