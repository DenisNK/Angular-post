import {FormControl} from '@angular/forms';

export class MyValidators {

 static restrictedEmails(control: FormControl): {[key: string]: boolean} {
   if (['123@123.123', '321@321.321'].includes(control.value)) {
     return { restrictedEmail: true };
   }
   return null;
  }
}
