import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // { path: '' },
  { 
    path: 'register', 
    component: RegistrationComponent,
    data: { title: 'Register | JobBazar' },
  },

  { 
    path: 'login', 
    component: LoginComponent,
    data: { title: 'Login | JobBazar' },
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
