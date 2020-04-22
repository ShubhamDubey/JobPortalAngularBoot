import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../job';
import { JobApplicationsService } from '../job-applications.service';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {
  id: any;
  job: Job = new Job();
  applications: any;
  constructor(private jobApplicationService: JobApplicationsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.job.id = this.id;
    this.applications = this.jobApplicationService.viewApplications(this.job);

  }

}
