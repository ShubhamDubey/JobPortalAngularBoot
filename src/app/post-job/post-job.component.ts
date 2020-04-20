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
  constructor(private jobService: JobsService) {
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
    let currentUsers = JSON.parse(sessionStorage.getItem('username'));
    var postedRecruiter = currentUsers.id;
    this.postedJob.recruiter = postedRecruiter;
    this.postedJob.setDates();


    this.jobService.jobPost(this.postedJob);
    //let updatedJobList=
    // console.log(updatedJobList);
    //console.log(currentUsers.recruiter.jobList.length);
    // if(currentUsers.recruiter.jobList.length===updatedJobList)
    // // {
    //   currentUsers.recruiter.jobList=updatedJobList;
    console.log(currentUsers);

    //sessionStorage.setItem('username',currentUsers);
    this.message = "Successfully Posted";
    // }
    // else
    // {
    //   console.log(currentUsers);
    //   this.message="Successfully Posted";
    // }
  }


}
