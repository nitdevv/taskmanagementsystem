import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/login/login.component'
import { RegisterComponent } from './register/register.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { routing } from './app.routing';
import { RegisterService } from '../app/service/register.service';
import { HttpModule } from '@angular/http';
import { LoginService } from '../app/service/login.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from '../app/home/home.component';
import { TaskComponent } from '../app/taskpage/task.component';
import { ViewService } from '../app/view/view.service';
import { ViewComponent } from '../app/view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FieldErrorDisplayComponent,
    HomeComponent,
    TaskComponent,
    ViewComponent

  ],
  imports: [
    BrowserModule,
    routing,
    AlertModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule

  ],
  providers: [
    RegisterService,
    LoginService,
    ViewService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
