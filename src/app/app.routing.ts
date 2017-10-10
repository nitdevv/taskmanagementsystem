import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './taskpage/task.component';
import { ViewComponent } from './view/view.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'create', component: TaskComponent },
      { path: 'view', component: ViewComponent },
      // { path: 'take', component: TakeComponent }
    ]
  }
];

export const routing = RouterModule.forRoot(appRoutes);
