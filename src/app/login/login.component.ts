import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Recruiter } from '../recruiter';
import { observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  users: Users = new Users();
  constructor(private loginservice: LoginService, private router: Router) {

  }

  ngOnInit(): void {

  }


  public login() {

    let resp = this.loginservice.userLogin(this.users);
    resp.subscribe(data => {
      if(data!=null){
      if (data.recruiter == null) {
        sessionStorage.setItem('username',data.jobSeeker);
        sessionStorage.setItem('role',"JobSeeker");

        this.router.navigate(['jsprofile']);
      }
      else {
        sessionStorage.setItem('username',data.recruiter);
        sessionStorage.setItem('role',"Recruiter");
        this.router.navigate(['recruiterprofile']);

       }
    }}
    );

    if(resp==null)
    {
      console.log("Fuck Off");
    }

  }
}
