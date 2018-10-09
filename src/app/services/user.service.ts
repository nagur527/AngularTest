import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UserService {

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: Http) { }

  getUsersList() {
    return this.http.get(this.apiUrl + 'users');
  }
}
