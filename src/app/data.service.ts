import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as env from './EnvConstance';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient ) { 
  }
  async getQbd(date : string)  {
  return await this.http.get<string>("http://"+env.BASE_URL+"/TheQuiz/qbd").toPromise();
  }
  async submitFormData(formData : string)  {
    return await this.http.post<string>("http://"+env.BASE_URL+"/TheQuiz/sbd",formData).toPromise();
    }
 
}
