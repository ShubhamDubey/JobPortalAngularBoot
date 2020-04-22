import { RecruiterService } from './../recruiter.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.css']
})
export class RecruiterProfileComponent implements OnInit {
  profilemessage: any;
  updatepassword: any;
  profileData: any;
  updatedPassword: any;
  currentpassword: any;
  repassword: any;
  constructor(private recruiterService: RecruiterService) {
    this.profileData = new Object();


  }

  ngOnInit(): void {
    this.recruiterService.profile().subscribe(data => {
      this.profileData = data;
      this.currentpassword = this.profileData.password;
      //      console.log(typeof(data));
    }
    );
  }
  public updateProfile() {

    this.recruiterService.updateProfile(this.profileData);
    this.profilemessage = "Profile Update Successfully";
  }
  public updatePassword() {
    if (this.profileData.password === "") {
      this.updatepassword = "Enter Current Password";
    }
    else {
      if (this.repassword === this.updatedPassword && this.profileData.password === this.currentpassword) {

        this.profileData.password = this.updatedPassword;
        this.recruiterService.updatePassword(this.profileData);

        this.updatepassword = "Sucessfully update";
      }
      else {
        this.updatepassword = "Password MisMatch";
      }
    }
  }
}
