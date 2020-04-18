import { Recruiter } from './recruiter';

export class Job {
    id: number;
    name: string;
    salary: string;
    vacancy: string;
    type: String;
    description: string;
    advertiseDate = new Date();
    expDate = new Date();
    employerEmail: String;
    recruiter: Recruiter;
    logo: string;

}
