import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  username:String;
  constructor(private ls:LoginService,private hc:HttpClient) { }

  ngOnInit() {
    this.username=this.ls.username;
  }
  sendTestReq()
  {
    this.hc.get('/user/test').subscribe((res)=>{
      alert(res["message"]);
    });
  }

}
