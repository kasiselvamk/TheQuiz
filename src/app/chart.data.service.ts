import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as env from './EnvConstance';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
    ws : WebSocket;

  constructor(private http: HttpClient ) { 
    this.ws = new WebSocket("ws://"+env.BASE_URL+"/TheQuiz/cd-socket");
  }
getwsInstance(){
  return this.ws;
}
  async getQcd(date : string)  {
  return await this.http.get<string>("http://"+env.BASE_URL+"/TheQuiz/cd").toPromise();
  }
}
