import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private hc:HttpClient,private ls:LoginService) { }

  username:string;
  userObj:object;
  imgUrl:string;
  ngOnInit(): void {
     this.ar.paramMap.subscribe(param=>{

       this.username=param.get("username");
       console.log("username is ",this.username);

         this.hc.get(`/user/profile/${this.username}`).subscribe((objOfres:object)=>{

          console.log("objFred is ",objOfres);
          this.userObj=objOfres["data"];
          this.imgUrl=this.userObj['data'].profileImage;             
        })
     });
  }


}
