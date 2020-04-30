import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private ls:LoginService){}

  ngOnInit() {
    setTimeout(()=>{
      this.ls.userLoginStatus=false;
      this.ls.doLogout();
    },0);
  }
  

  submitForm(dataObj)
  {
    let loginFormObj=dataObj;
    if(loginFormObj.role=="admin")
    {

    }
    if(loginFormObj.role=="user")
    {
      this.ls.doLogin(dataObj).subscribe((result)=>{
        if(result["message"]=="invalid username")
        {
          alert("invalid username");
          dataObj.reset();
        }
        else if(result["message"]=="invalid password")
        {
          alert("invalid password");
          dataObj.reset();
        }
        else
        {
          alert("login success");
          //save token in local storage of browser
          localStorage.setItem("token",result["token"]);
   
          this.ls.userLoginStatus=true;
          this.ls.username=result['username'];
          //redirect to userdashboard 
          this.router.navigate(['../userdashboard',result['username']]);
        }
       })
    }
    
    




  }
}
