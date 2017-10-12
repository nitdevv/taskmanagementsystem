import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';
import { RegisterService } from '../service/register.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['../app.component.css'],
})

export class ViewComponent {
  data: any;
  datas: any;


  constructor(
    private _viewService: ViewService,
    private registerService: RegisterService
  ) {
  }
  ngOnInit() {
    this.view();
  }
  view() {
    this._viewService.view().subscribe(data => {
      this.data = data.data
    });

  }
  delete(id: string) {
    this._viewService.delete(id).subscribe(data => {
      console.log(data)
      this.view();
    });

  }

}
