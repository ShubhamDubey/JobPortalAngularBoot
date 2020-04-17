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
message:string;
  constructor(public registrationService:RegistrationService,public router:Router) {
    this.message="Recruiter Registration";
   }

  ngOnInit(): void {
  }
 public register(){
   this.recruiter.jobseeker=null;
  let resp=this.registrationService.recruiterRegistration(this.recruiter);
  resp.subscribe(data=>{console.log(data);});
  if(resp!=null)
  {
    this.router.navigate['login'];
  }
  else
  {
    this.message='Try Again Later';
  }
 }
}
