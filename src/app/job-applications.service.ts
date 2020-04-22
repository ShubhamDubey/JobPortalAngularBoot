import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationsService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }
  public viewApplications(job) {
    console.log(job);
    return this.http.post(this.baseUrl + 'application/applicantDetails', job);
  
  }
}
