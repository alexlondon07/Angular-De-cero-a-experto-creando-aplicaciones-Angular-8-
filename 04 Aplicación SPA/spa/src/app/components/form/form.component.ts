import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }`]
})
export class FormComponent implements OnInit {

  formatForm: FormGroup;

  user: Object = {
    name: null,
    lastname: null,
    email: null
  };

  countries = [{
    code: 'CRI',
    name: 'Costa rica'
  },
  {
    code: 'COL',
    name: 'Colombia'
  }];

  constructor(fb: FormBuilder) {
    this.formatForm = fb.group({
      'name': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'lastname': new FormControl('', [Validators.required, this.noHerrera ]),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'username': new FormControl('', Validators.required, this.userExist)
    });

    /*this.formatForm.valueChanges.subscribe(data => {
      console.log(data);
    });*/

    this.formatForm.controls['name'].valueChanges.subscribe(data => {
      console.log('name: ', data);
    });

    this.formatForm.controls['username'].statusChanges.subscribe(data => {
      console.log('username statusChanges: ', data);
    });

  }

  ngOnInit() {
  }

  save( form: NgForm) {
    console.log('NgForm', form);
    console.log('NgForm value', form.value);
    console.log('User', this.user);
  }

  saveForm() {
    console.log( this.formatForm );
    console.log( this.formatForm.value );
  }

  noHerrera ( control: FormControl ): {[s: string]: boolean} {
    if ( control.value === 'herrera' ) {
      return {
        noHerrera: true
      };
    }
    return null;
  }

  userExist( control: FormControl): Promise<any>|Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'alexlondon07') {
          resolve( { exist: true } );
        } else {
          resolve( null );
        }
      }, 3000);
    });

    return promise;
  }
}
