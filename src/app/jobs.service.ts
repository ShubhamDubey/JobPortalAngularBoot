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
  public jobListPostedByRecruiter(user) {
    console.log(" jobListPostedByRecruiter Called From JobService");
    console.log(user);
    return this.http.post("http://localhost:8080/api/jobs/showPostedJobs",user);

  }
  public jobPost(job){
    console.log("JobPost Called From JobService");
    console.log(job);
   let jobList=this.http.post("http://localhost:8080/api/jobs/postjob",job);

   jobList.subscribe(data=>console.log(data));

  }

}

