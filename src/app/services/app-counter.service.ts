import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable ({  providedIn: 'root'})

export class AppCounterService {

  constructor(private logservices: LogService) {
  }

 counter = 0;

 increase = () => {
   this.logservices.log('+++');
   this.counter++;
 }

 decrease = () => {
   this.logservices.log('---');
   this.counter--;
 }
}
