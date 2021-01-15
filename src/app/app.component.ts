import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({

        email: new FormControl('den@den.den', [
          Validators.email,
          Validators.required,
          MyValidators.restrictedEmails
      ]),
        password: new FormControl(12345678, [
          Validators.required,
          Validators.minLength(5)
      ]),
        address: new FormGroup({
          country: new FormControl('ua'),
          city: new FormControl('', [Validators.required])
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.form.valid) {
  console.log('Form=', this.form);
  const formData = {...this.form.value};
  console.log(formData);
    }
  }

  SetCapital() {
    const cityMap = {
      ru: 'Moscow',
      ua: 'Kyiev',
      by: 'Minsk'
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    this.form.patchValue({address: {city}
    });
  }

  addSkill() {
    const control = new FormControl( '', Validators.required);
    // (<FormArray> this.form.get('skills')).push();
    (this.form.get('skills') as FormArray).push(control);
  }
}
