import { RecruiterService } from './../recruiter.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.css']
})
export class RecruiterProfileComponent implements OnInit {
message:any;
profileData: any;
updatedPassword:any;
repassword:any;
  constructor(private recruiterService: RecruiterService) {
    this.profileData = new Object();


  }

  ngOnInit(): void {
    this.recruiterService.profile().subscribe(data => {
      this.profileData = data;
      //      console.log(typeof(data));
    }
    );
  }
  public updateProfile() {

    this.recruiterService.updateProfile(this.profileData);
    this.message="Profile Update Successfully";
    }
  public updatePassword()
  {
    if(this.repassword=== this.updatePassword)
    {
      let passwordData=new Map();
      passwordData.set("id",this.profileData.id);
      passwordData.set("updatepassword",this.updatePassword);
      this.recruiterService.updatePassword(passwordData);
    }
    else
    {
      this.message="Password MisMatch";
    }
  }
}
