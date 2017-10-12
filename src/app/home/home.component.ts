import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewService } from '../view/view.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['../app.component.css'],

})
export class HomeComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _viewService: ViewService

  ) { }
  ngOnInit() { }
  task() {
    this.router.navigate(['/task']);
  }
  view() {
    this._viewService.view();
    console.log("click")
  }
  delete(id: string) {
    this._viewService.delete(id);

  }

}
