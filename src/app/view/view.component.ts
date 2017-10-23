import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';
import { RegisterService } from '../service/register.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ModalModule } from 'ng2-modal'





@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['../app.component.css'],
})

export class ViewComponent {
  data: any;
  datas: any;
  editData: any;
  editTitleForm: FormGroup;
  isDone = false;
  index: any;
  constructor(
    private _viewService: ViewService,
    private registerService: RegisterService,
    private _formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.view();

    this._viewService.view().subscribe(data => {
      this.data = data.data
    })
    this.editTitleForm = this._formBuilder.group({
      title: [null, [Validators.required]]
    })
    this.isDone = false;
  }
  view() {
    this._viewService.view().subscribe(data => {
      this.data = data.data
    });
  }
  delete(id: string) {
    this._viewService.delete(id).subscribe(data => {
      this.view();
    });
  }
  editTitle(id: any) {
    this._viewService.view().subscribe(data => { console.log(this.editData = data) })
  }
  checkbox(id: any, task: any, i: any) {
    this._viewService.checkboxtask(id).subscribe(data => {



    })
  }
  // changeTitle(id: any, task: any) {
  //   this.registerService.edittask(id, task).subscribe((data) => { })
  //   this._viewService.view().subscribe((data) => {
  //     this.data = data.data
  //   })
  // }


}
