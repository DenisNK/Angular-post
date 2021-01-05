import {Component} from '@angular/core';
import {Subscription, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sub: Subscription;

constructor() {
  const stream$ = new Observable( obs => {
    setTimeout ( () => {
      obs.next(1);
    }, 1500);

    setTimeout( () => {
      obs.complete();
    }, 2100); // set timeuot for working or run error

    setTimeout( () => {
      obs.error('Something went wrong');
    }, 2000);

    setTimeout(() => {
      obs.next(2);
    }, 2500);

  });

  this.sub = stream$.subscribe(
    (value) => console.log('Next', value),
    error => console.log('Error ', error),
    () => console.log('Complete')
    );
}
  stop() {
    this.sub.unsubscribe();
  }
}


