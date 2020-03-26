import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ls:LoginService){}
  n:number=100;
  s:string="Flower";
  emp:object={eno:100,enmae:"Beautiful"};
  marks:number[]=[10,20,30,40];
  names:string[]=["ruthika","juluri","mona"];
  status:boolean=false;
  imgUrl:string="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_960_720.jpg"
  v:string;
  sendData(data)
  {
    this.v=data;
    console.log(data);
  }
  changeStatus(){
    this.status=!this.status;
  }
  changecolor()
  {
    this.v="color";
  }  
 cityNames:string[]=[];
  addCity(cityName){
    this.cityNames.push(cityName);
  }
}
