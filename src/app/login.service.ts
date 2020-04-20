import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }
  public userLogin(user): Observable<any> {
console.log(user);
    return this.http.post(this.baseUrl + "users/login", user);
  }

  isUserLoggedIn() {

    let user = sessionStorage.getItem('username')
    // console.log(!(user=== null))

    return !(user === null)
  }

  checkRole(): boolean {
    let role = sessionStorage.getItem("role");
    return (role === "Recruiter");
  }


  logOut() {

    sessionStorage.removeItem('username')
  }
}
