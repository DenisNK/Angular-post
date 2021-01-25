import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `Counter: {{counter}}`
})
export class CounterComponent {
  counter = 0;

  increment(): void {
    this.counter++;
  }
  decrement(): void {
    this.counter-- ;
  }
}
