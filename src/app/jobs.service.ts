import { Recruiter } from './recruiter';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  public jobPost(user: Recruiter): Observable<any> {
    return this.http.post(this.baseUrl + "jobs/showPostedJobs", user);

  }
}

