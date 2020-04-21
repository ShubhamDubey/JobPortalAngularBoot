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
  irk() {
    console.log("Hello");
  }
  irk1() {
    console.log("Hello1");
  }
  login() {

    let resp = this.loginservice.userLogin(this.users);

    resp.subscribe(data => {
      console.log(data);
      if (data != null) {
        if (data.role == "Recruiter") {

          sessionStorage.setItem('session', JSON.stringify(data));
          sessionStorage.setItem('role', "Recruiter");
          this.router.navigate(['postedjobs']);
        }
        // else {
        //   sessionStorage.setItem('session', JSON.stringify(data));
        //   sessionStorage.setItem('role', "JobSeeker");

        //   this.router.navigate(['jsprofile']);

        // }
      }
    }
    );

    if (resp == null) {

    }

  }
}
