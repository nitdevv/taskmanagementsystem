import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/login/login.component'
import { RegisterComponent } from './register/register.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { routing } from './app.routing';
import { RegisterService } from '../app/service/register.service'
import { HttpModule } from '@angular/http';
import { LoginService } from '../app/service/login.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FieldErrorDisplayComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    AlertModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

  ],
  providers: [
    RegisterService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
