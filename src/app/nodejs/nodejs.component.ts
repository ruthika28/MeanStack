import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {

  data:string[]=[];
  testData:string="nodejs";

  //inject dataService object
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.data=this.ds.nodejsData;
    this.ds.readDataFromComponent(this.testData);
  }
  sendData(data)
  {
    this.ds.readDataFromComponent(data);
  }
}
