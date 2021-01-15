import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {

 static restrictedEmails(control: FormControl): {[key: string]: boolean} {
   if (['123@123.123', '321@321.321'].includes(control.value)) {
     return { restrictedEmail: true };
   }
   return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
   return new Promise( resolve => {
     setTimeout (() => {
       if (control.value === 'async@mail.ru') {
         resolve( {uniqEmail: true});
     } else {
         resolve(null);
       }
       }, 1000);
   });
  }

}
