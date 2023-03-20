import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get("http://localhost:4200/").subscribe(data => {
      console.log(data);
    });
  }

  }