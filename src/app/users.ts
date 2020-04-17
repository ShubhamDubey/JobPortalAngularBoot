import { Recruiter } from './recruiter';
import { JobSeeker } from './job-seeker';

export class Users {

  id:number;
  email:string;
  password:string;
  jobseeker:JobSeeker;
  recruiter:Recruiter;
  constructor()
  {
    this.jobseeker=new JobSeeker();
    this.recruiter=new Recruiter();
  }
}
