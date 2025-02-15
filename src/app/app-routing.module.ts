import { JobApplicationsComponent } from './job-applications/job-applications.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { RecruiterRegistrationComponent } from './recruiter-registration/recruiter-registration.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { ManagePostedJobComponent } from './manage-posted-job/manage-posted-job.component';
import { PostJobComponent } from './post-job/post-job.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login | JobBazar' },
  },
  // {
  //   path: 'registration',
  //   component: JobSeekerRegistrationComponent,
  //   data: { title: 'Login | JobBazar' },
  // },
  {
    path: 'register',
    component: RecruiterRegistrationComponent,
    data: { title: 'Register | JobBazar' },
  },
  {
    path: 'profile',
    component: RecruiterProfileComponent,
    data: { title: 'profile | JobBazar' },
  },
  {
    path: 'postedjobs',
    component: PostedJobsComponent,
    data: { title: 'My Jobs | JobBazar' },
    
    // children: [
    //   {
    //     path: '',
    //     component: PostedJobsComponent,
    //     data: { title: 'My Jobs | JobBazar' },
    //   },

    //   {
    //     path: 'managepostedjob',
    //     component: ManagePostedJobComponent,
    //     data: { title: 'Manage Job | JobBazar' },
    //   },
    // ]
  },
  
  {
    path: 'applications/:id',
    component:JobApplicationsComponent,
    data: { title: 'Applications | JobBazar' },
  },

  {
    path: 'managepostedjob',
    component: ManagePostedJobComponent,
    // Use below syntax to pass the job id
    data: { title: 'Manage Job | JobBazar' },
  },

  {
    path: 'postjob',
    component: PostJobComponent,
    // Use below syntax to pass the job id
    data: { title: 'Manage Job | JobBazar' },
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
