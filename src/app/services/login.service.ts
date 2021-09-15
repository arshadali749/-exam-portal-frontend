import { HttpClient } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { convertToObject } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }
  public generateAuthToken(loginRequest: any) {

    console.log("TOKEN GEN REQUEST PAYLOAD :"+loginRequest.username+"  "+loginRequest.password);
    
   return  this.http.post('http://localhost:8080/gen-auth-token', loginRequest);
    
  }

  public getCurrentUser() {
    return this.http.get('http://localhost:8080/current-user');
  }
  public saveToken(token: any) {
    localStorage.setItem("token", token);
    console.log("TOKEN SAVED ");

    return;
  }
  public isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == null || token == '' || token == undefined) {
      return false;
    }
    else
      return true;
  }
  public getToken() {
    let token = localStorage.getItem("token");
    return token;
  }

  public setUserInfo(userInfo: any) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

  }
  public getUserInfo() {
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo != null) {
      return JSON.parse(userInfo);
    }
    else
      this.logOut();
    return null;
  }

  public logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    this.router.navigate(['login'])


  }

  public getUserRole() {
    let user: any = this.getUserInfo();
    let authority = user.authorities;
    console.log("AUTHORITIES  :" + user.authorities[0].authority);
    let role = user.authorities[0].authority;
    return role;
  }
}
