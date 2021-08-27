import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }



  public registerUser(user: any) {
    return this.http.post('http://localhost:8080/users/', user);
  }
}
