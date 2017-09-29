import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RegisterService } from '../service/register.service'
import { User } from '../user'
@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['../app.component.css'],

})

export class RegisterComponent implements OnInit {
  form: FormGroup;
  registeruser = {};
  @Input() user: User;

  constructor(
    private formBuilder: FormBuilder,
    private RegisterService: RegisterService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required]
    });

  }
  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  // onSubmit() {
  //   console.log(this.form);
  //   if (this.form.valid) {
  //     console.log('form submitted');
  //   } else {
  //     this.validateAllFormFields(this.form);
  //   }
  // }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset() {
    this.form.reset();
  }

  onSubmit() {
    this.RegisterService.signup(this.registeruser).subscribe(data => console.log(this.registeruser = data));

  }

}
