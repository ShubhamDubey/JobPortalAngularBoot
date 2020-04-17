import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-recruiter-registration',
  templateUrl: './recruiter-registration.component.html',
  styleUrls: ['./recruiter-registration.component.css']
})
export class RecruiterRegistrationComponent implements OnInit {
recruiter:Users=new Users();
  constructor(public registrationService:RegistrationService,public router:Router) { }

  ngOnInit(): void {
  }
 public register(){
   this.recruiter.jobSeeker=null;
  let resp=this.registrationService.recruiterRegistration(this.recruiter);
  resp.subscribe(data=>{console.log(data);});
 }
}
