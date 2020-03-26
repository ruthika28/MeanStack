import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';

@Component({
  selector: 'app-angularjs',
  templateUrl: './angularjs.component.html',
  styleUrls: ['./angularjs.component.css']
})
export class AngularjsComponent implements OnInit {

  data:string[]=[];
  dataObject:object={};

  userObjects:object[]=[];


  //inject DataService object
  constructor(private ds:Data1Service) { }

  ngOnInit() {
    //subscribe to the observable
    this.ds.getUserData().subscribe((data)=>{
      this.userObjects=data["data"];
      console.log(this.userObjects);
    })
  }

}
