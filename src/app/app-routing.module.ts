import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JobSeekerProfileComponent } from './job-seeker-profile/job-seeker-profile.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';



const routes: Routes = [
  // { path: '' },


  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login | JobBazar' },
  },
  {
    path: 'jsprofile',
    component: JobSeekerProfileComponent,
    data: { title: 'profile | JobBazar' },
  },
  {
    path: 'recruiterprofile',
    component: RecruiterProfileComponent,
    data: { title: 'profile | JobBazar' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
