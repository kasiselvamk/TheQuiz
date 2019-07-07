import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
    ws : WebSocket;

  constructor(private http: HttpClient ) { 
    this.ws = new WebSocket("ws://localhost:8080/cd-socket");
  }
getwsInstance(){
  return this.ws;
}
  async getQcd(date : string)  {
  return await this.http.get<string>("http://localhost:8080/TheQuiz/cd").toPromise();
  }
}
