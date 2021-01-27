import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box', [
      state('start', style ({background: 'blue'})),
      state('end', style({
        background: 'red',
        transform: 'scale(2.2)'
      })),
      state('special', style({
        background: 'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%',
      })),
      transition('start => end', animate(600)),
      transition('end => start', animate('900ms ease-in-out')),
      /*transition('special <=> *', animate(500)), /!*переход из любого состояния в любое другое*!/*/
      transition('special <=> *', [
        style({background: 'green'}),
        animate(1000, style({background: 'pink'})),
        animate(750)
      ]), /*переход из любого состояния в любое другое*/
    ])
  ]
})
export class AppComponent {
  boxState = 'start';

  animate(): void {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }
}
