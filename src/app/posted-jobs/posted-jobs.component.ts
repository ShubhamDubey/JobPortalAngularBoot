import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {
  recruiter: Users = JSON.parse(sessionStorage.getItem("username"));

  constructor(private jobService: JobsService) {
  }

  ngOnInit(): void {
    // this.recruiter.recruiter.jobList =
    console.log(this.recruiter);
    // this.jobService.postedJob(this.recruiter.recruiter).subscribe(data=>
    // console.log(data));
  }

}
