import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

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
  /*submitForm(dataObj)
  {
    // console.log(dataObj);
    if(dataObj.username=="admin"&&dataObj.password=="admin")
    {
      //navigate to admindashboard component
      this.router.navigate(['admindashboard']);
    }
    else
    {
      //navigate to userdashboard component
      this.router.navigate(['userdashboard']);
    } 
  }*/

  submitForm(dataObj)
  {
    this.ls.doLogin(dataObj).subscribe((result)=>{
     if(result["message"]=="invalid username")
     {
       alert("invalid username");
     }
     else if(result["message"]=="invalid password")
     {
       alert("invalid password");
     }
     else
     {
       alert("login success");
       //save token in local storage of browser
       localStorage.setItem("token",result["message"]);

       this.ls.userLoginStatus=true;
       this.ls.username=result['username'];
       //redirect to userdashboard 
       this.router.navigate(['/userdashboard']);
     }
    })
  }
}
