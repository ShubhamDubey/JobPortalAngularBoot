import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
message:string;
postedJob:Job;
expireDate:Date=new Date();
  constructor(private jobService:JobsService) {

   }

  ngOnInit(): void {
    this.postedJob=new Job();
  }
  onPostJob()
  {
  //  console.log("hello");
    console.log(this.expireDate);
    this.postedJob.expireDate=this.expireDate.toLocaleDateString();
console.log();
   let currentUsers=JSON.parse(sessionStorage.getItem('username'));
    let postedRecruiter=currentUsers.recruiter;

    this.postedJob.setDates();
    var jobList=[this.postedJob]
    postedRecruiter.jobList=jobList;
//    console.log(postedRecruiter);
    this.postedJob.recruiter=currentUsers.recruiter.id;
    this.jobService.jobPost(this.postedJob);
    //let updatedJobList=
    // console.log(updatedJobList);
    //console.log(currentUsers.recruiter.jobList.length);
    // if(currentUsers.recruiter.jobList.length===updatedJobList)
    // // {
    //   currentUsers.recruiter.jobList=updatedJobList;
      console.log(currentUsers);
      //sessionStorage.setItem('username',currentUsers);
       this.message="Successfully Posted";
    // }
    // else
    // {
    //   console.log(currentUsers);
    //   this.message="Successfully Posted";
    // }
  }
}
