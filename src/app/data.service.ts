import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient ) { 
  }

  async getQbd(date : string)  {
  return await this.http.get<string>("http://localhost:8080/TheQuiz/qbd").toPromise();
  }


  async submitFormData(formData : string)  {
    return await this.http.post<string>("http://localhost:8080/TheQuiz/sbd",formData).toPromise();
    }
 
}
