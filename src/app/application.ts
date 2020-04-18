import { JobSeeker } from './job-seeker';
import { Job } from './job';

export class Application {
    id: number;
    appliedDate = new Date();
    job: Job;
    jobSeeker: JobSeeker;
    status: boolean;
}
