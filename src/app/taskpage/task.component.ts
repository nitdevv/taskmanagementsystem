import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { RegisterService } from '../service/register.service';
import { User } from '../user';

@Component({
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['../app.component.css'],

})
export class TaskComponent implements OnInit {

  CreateTaskForm: FormGroup;
  error: any;
  title: string;

  constructor(private RegisterService: RegisterService,
    private _formBuilder: FormBuilder,
    private router: Router

  ) { }
  ngOnInit() {
    this.CreateTaskForm = this._formBuilder.group({
      task: [null, [Validators.required]],
      date: [null, [Validators.required]]
    });
  }
  createTask() {
    if (this.CreateTaskForm.valid) {
      this.CreateTaskForm.value.date = this.CreateTaskForm.value.date.formatted;
      this.RegisterService.addTask(this.CreateTaskForm.value)
        .subscribe(data => {
          if (data.error == 0) {
            alert("Data Entered Successfully");
            this.router.navigate(['/home/view'])
          }
        },
        error => { })
    }
    else {
      this.validateFormFields(this.CreateTaskForm)
    }
  }
  isFieldValid(field: string) {
    return !this.CreateTaskForm.get(field).valid && this.CreateTaskForm.get(field).touched;
  }
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    }
  }
  validateFormFields(_formGroup: FormGroup) {
    Object.keys(_formGroup.controls).forEach(field => {
      const control = _formGroup.get(field);
      if (control instanceof FormGroup) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateFormFields(control);
      }
    })
  }


}
