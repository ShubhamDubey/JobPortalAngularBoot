import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService, public router: Router) {

  }

  ngOnInit(): void {

  }
  public logout() {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }
  public redirectTo() {
    console.log("Redirect call");
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['/postedjobs']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
