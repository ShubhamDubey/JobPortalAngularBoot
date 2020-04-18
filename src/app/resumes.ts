import { JobSeeker } from './job-seeker';
export class Resumes {
    id: number;
    fileName: string;
    fileType: string;
    data = new Blob(); //https://javascript.info/arraybuffer-binary-arrays
    jobSeeker: JobSeeker;
}
