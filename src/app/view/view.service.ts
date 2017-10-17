import { Injectable } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Injectable()

export class ViewService {
  constructor(
    private RegisterService: RegisterService) { }
  view() {
    return this.RegisterService.viewTask();

  }
  delete(id: string) {
    return this.RegisterService.deletetask(id);

  }
  edit(id: string) {
    return this.RegisterService.edittask(id);

  }
}
