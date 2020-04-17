import { Component, OnInit } from '@angular/core';
import { JobSeeker } from '../job-seeker';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-job-seeker-registration',
  templateUrl: './job-seeker-registration.component.html',
  styleUrls: ['./job-seeker-registration.component.css']
})
export class JobSeekerRegistrationComponent implements OnInit {
jobSeeker:Users=new Users();

  constructor(public registrationService:RegistrationService,public router:Router ) { }

  ngOnInit(): void {
  }
public register()
{
  this.jobSeeker.recruiter=null;
    //console.log(this.jobSeeker);
  //  let resp=
    let resp=this.registrationService.jobSeekerRegistration(this.jobSeeker);
   resp.subscribe(data=>{console.log(data);});
}
}