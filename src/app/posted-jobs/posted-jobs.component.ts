import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { JobsService } from '../jobs.service';
import { Observable } from 'rxjs';
import { Job } from '../job';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {
  recruiter: Observable<any> = JSON.parse(sessionStorage.getItem("session"));
  jobList: Observable<any>;
  constructor(private jobService: JobsService,private router:Router) {
    this.jobList = jobService.jobListPostedByRecruiter(this.recruiter);

  }

  ngOnInit(): void {
    // this.recruiter.recruiter.jobList =
    console.log("Recruiter");
    console.log(this.recruiter);
    // this.jobService.postedJob(this.recruiter.recruiter).subscribe(data=>
    // console.log(data));
  }
  public viewApplications(id) {
    console.log(id);
    this.router.navigate(['applications',id]);

  }
}
