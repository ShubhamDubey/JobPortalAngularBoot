import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8080/api/users/';
  constructor(private http: HttpClient) { }

  public jobSeekerRegistration(jobSeeker) {
    // console.log("service calling");
    // console.log(jobSeeker);
    return this.http.post('http://localhost:8080/api/users/addJobSeeker', jobSeeker);
  }

  public recruiterRegistration(recruiter) {
    // console.log("service calling");
    // console.log(recruiter);
    return this.http.post(this.baseUrl + 'addRecruiter', recruiter);
  }
}
