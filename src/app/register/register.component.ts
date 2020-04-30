import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  file:File;
  imgUrl:string|ArrayBuffer="";


  getImageFile(imageInfo:File)
  {
    this.file=imageInfo;
    //create FileReader object to read file content
    let reader=new FileReader();

    //read data of file(image)
    //readAsdatafile is asynchronous operation 
    //we need to wait until the data is read
    reader.readAsDataURL(this.file);

    reader.onload=()=>{
      this.imgUrl=reader.result;
      //this gives blob data
    }

    
  }






  submitForm(formObj:NgForm)
  {
    let userObj=formObj.value;
    //create object of type formdata 
    let fd=new FormData();

    //append file data to fd object

    fd.append("photo",this.file);
    
    //append userobj to fd
    //convert pbject into string
    fd.append("userObj",JSON.stringify(userObj));

    
    console.log("user object is", formObj.value);
    //send useObj to register service
    this.rs.doRegister(fd).subscribe((res)=>{
      if(res["message"]=="username already existed")
      {
        alert("username already existed");    
        formObj.reset();
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
