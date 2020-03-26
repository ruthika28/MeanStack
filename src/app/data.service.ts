import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //instance data
  dataOfService:any;  
  //data    
  javascriptData:string[]=["dynamic datatypes",
  "For-of-loops", "prototyping"];
  angularData:string[]=["modules","components","services","directives"];
  expressjsData:string[]=["express","js","third"];
  nodejsData:string[]=["node","js","fourth"];
  //to take data
  readDataFromComponent(data:any)
  {
    this.dataOfService=data;
  }

  //to give data
  sendDataToComponent()
  {
    return this.dataOfService;
  }
}
