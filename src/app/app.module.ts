import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login/login.component';
import { JobSeekerProfileComponent } from './job-seeker-profile/job-seeker-profile.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { JobSeekerRegistrationComponent } from './job-seeker-registration/job-seeker-registration.component';
import { RecruiterRegistrationComponent } from './recruiter-registration/recruiter-registration.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { ManagePostedJobComponent } from './manage-posted-job/manage-posted-job.component';
import { PostJobComponent } from './post-job/post-job.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    JobSeekerProfileComponent,
    RecruiterProfileComponent,
    JobSeekerRegistrationComponent,
    RecruiterRegistrationComponent,
    PostedJobsComponent,
    ManagePostedJobComponent,
    PostJobComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
