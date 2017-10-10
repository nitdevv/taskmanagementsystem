import { Injectable } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Injectable()

export class ViewService {
  constructor(
    private RegisterService: RegisterService) { }
  view() {
    return this.RegisterService.view();

  }
}
