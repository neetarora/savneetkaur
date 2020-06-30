import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from './helpers/must-match.validator';
import { Validatornew } from './helpers/must-match.validator';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    age;
    country: any = ['India', 'Greece', 'Mexico', 'Morocco', 'Iceland', 'Barbados'];
    

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', [Validators.required,Validatornew.cannotContainSpace]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            dateofbirth: ['', Validators.required],
            countryName: ['', Validators.required]
        }, 
        {
            validator: MustMatch('password', 'confirmPassword')
        });   
    }
     // Choose city using select dropdown
  changeCountry(e) {
    console.log(e.value)
    this.countryName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get countryName() {
    return this.registerForm.get('countryName');
  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }


}

