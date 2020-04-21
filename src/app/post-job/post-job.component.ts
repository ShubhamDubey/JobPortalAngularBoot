import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  message: string;
  postedJob: Job;
  expireDate: Date;
  constructor(private jobService: JobsService,private router:Router) {
    this.expireDate = new Date();
  }

  ngOnInit(): void {
    this.postedJob = new Job();
  }
  onPostJob() {
    //  console.log("hello");
    console.log(this.expireDate);

    this.postedJob.expireDate = String(this.expireDate);
    console.log(this.postedJob.expireDate);
    let currentUsers = JSON.parse(sessionStorage.getItem('session'));
    var postedRecruiter = currentUsers.id;
    this.postedJob.recruiter = postedRecruiter;
    this.postedJob.setDates();


    this.jobService.jobPost(this.postedJob);
    this.router.navigate(['/postedjobs']);
  }


}
