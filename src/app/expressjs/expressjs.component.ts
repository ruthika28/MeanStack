import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-expressjs',
  templateUrl: './expressjs.component.html',
  styleUrls: ['./expressjs.component.css']
})
export class ExpressjsComponent implements OnInit {

  data:string[]=[];
  data1:any;
  //inject dataservice 
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.data=this.ds.expressjsData;
    this.data1=this.ds.sendDataToComponent();
  }

}
