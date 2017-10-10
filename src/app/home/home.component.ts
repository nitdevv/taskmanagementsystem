import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['../app.component.css'],

})
export class HomeComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,

  ) { }
  task() {
    this.router.navigate(['/task']);
  }

}
