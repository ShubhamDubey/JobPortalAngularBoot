import { Recruiter } from './recruiter';

export class Job {
    id: number;
    name: string;
    salary: string;
    vacancy: string;
    type: String;
    description: string;
    advertiseDate :string;
    expireDate :string;
    employerEmail: String;
    recruiter: number;
    logo: string;
    public setDates()
    {
     var currentDate=new Date();
    this.advertiseDate=currentDate.toLocaleDateString();    }
}
