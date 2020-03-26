import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//inject service register
  constructor(private rs:RegisterService,private router:Router) { }

  ngOnInit() {
  }
  submitForm(userObj)
  {
    console.log(userObj);
    //send useObj to register service
    this.rs.doRegister(userObj).subscribe((res)=>{
      if(res["message"]=="username already existed")
      {
        alert("username already existed");        
      }
      if(res["message"]=="register successfully")
      {
        alert("registered successfully")
        //navigate to login compoenent
        this.router.navigate(['./login'])
      }
    })
  }
}
