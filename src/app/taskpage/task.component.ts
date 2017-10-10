import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

import { IMyDpOptions } from 'mydatepicker';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { User } from '../user';

@Component({
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['../app.component.css'],

})
export class TaskComponent implements OnInit {
  public myDatePickerOption: IMyDpOptions = {
    dateFormat: 'yyyy.mm.dd'
  }
  CreateTaskForm: FormGroup;
  error: any;
  // user: User[];
  title: string;
  // ndate: any;


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
      console.log("TaskComponent");
      console.log(this.CreateTaskForm.value);
      this.RegisterService.addTask(this.CreateTaskForm.value)
        .subscribe(data => {
          if (data.error == 0) {
            alert("Data Entered Successfully");
            this.router.navigate(['/home'])
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
  // setDate(): void {
  //   let date = new Date();
  //   this.CreateTaskForm.patchValue({ myDate: null })
  //
  // }
}
