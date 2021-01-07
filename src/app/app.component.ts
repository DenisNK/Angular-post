import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({

        email: new FormControl('', [
          Validators.email,
          Validators.required
      ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(5)
      ]),
        address: new FormGroup({
          country: new FormControl('ua'),
          city: new FormControl('', [Validators.required])
      })
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
}
