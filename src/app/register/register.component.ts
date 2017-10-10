import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  registeruser: any = {};
  user: any = {};
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private RegisterService: RegisterService,
    private router: Router

  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: ['', Validators.required],
      con_password: ['', Validators.required]

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
    if (this.form.valid) {
      this.RegisterService.registerUser(this.form.value)
        .subscribe(data => {
          if (data.error == 1) {
            this.error = data.message;
            alert(this.error);

            console.log("this.error", this.error)
          } else {
            console.log("scuccess")
            alert('Registration SuccessFull');
            this.router.navigate(['/login']);
          }
        },
        error => {
          if (error.status == 400) {
            alert("user already exit")
          }
          this.reset();
        });
    }
    else {
      this.validateAllFormFields(this.form);
    }
  }
}
