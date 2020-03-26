import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  dataArray:object[]=[];
  constructor(private ds:Data1Service) { }

  ngOnInit() {
    this.ds.getData().subscribe((data)=>{
    this.dataArray=data;
    console.log(this.dataArray)
    }
    );
  }

}
