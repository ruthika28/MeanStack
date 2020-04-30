import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username:String;
  userLoginStatus:Boolean=false;

  //inject HttpClient
  constructor(private hc:HttpClient) { }
  
  isLoggedIn:boolean=false;
  loggedInUsername:string;
  //a method to make http post request
  doLogin(userObj):Observable<any>
  {
    return this.hc.post('/user/login',userObj);
  }
  doLogout()
  {
    localStorage.removeItem("token");
  }
}
