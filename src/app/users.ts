import { Recruiter } from './recruiter';
import { JobSeeker } from './job-seeker';

export class Users {

  id:number;
  email:string;
  password:string;
  jobSeeker:JobSeeker;
  recruiter:Recruiter;
  constructor()
  {
    this.jobSeeker=new JobSeeker();
    this.recruiter=new Recruiter();
  }
}
