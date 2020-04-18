import { JobSeeker } from './job-seeker';
import { EducationCategory } from './education-category';

export class Education {
    educationId: number;
    course: string;
    courseType: string;
    specialisation: string;
    university: string;
    passingYear: string;
    percentage: number;
    jobSeeker: JobSeeker;
    educationCategory: EducationCategory;


}
