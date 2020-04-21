import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  public profile(){
     let sess=JSON.parse(sessionStorage.getItem('session'));
     
     return this.http.post(this.baseUrl + "recruiter", sess);

  }

}
