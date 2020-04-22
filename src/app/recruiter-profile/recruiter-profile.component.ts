import { RecruiterService } from './../recruiter.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.css']
})
export class RecruiterProfileComponent implements OnInit {

  profileData: Object;
  constructor(private recruiterService: RecruiterService) {
    this.profileData=new Object();
    recruiterService.profile().subscribe(data => {
      this.profileData=data;
//      console.log(typeof(data));
    }
      );

  }

  ngOnInit(): void {

  }

}
