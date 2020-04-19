import { Recruiter } from './recruiter';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  public jobPost(job){
    console.log("JobPost Called From JobService");
    console.log(job);
   let jobList=this.http.post("http://localhost:8080/api/jobs/postjob",job);
   console.log("JobList");
   jobList.subscribe(data=>console.log(data));

  }

}

