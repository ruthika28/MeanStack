import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';


const routes: Routes = [
  //special route for empty path
  //not loading but redirecting
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'user/register',component:RegisterComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'userdashboard/:username',component:UserdashboardComponent},
  {path:'technologies',component:TechnologiesComponent,children:[
    {path:'javascript',component:JavascriptComponent},
    {path:'nodejs',component:NodejsComponent},
    {path:'expressjs',component:ExpressjsComponent},
    {path:'angularjs',component:AngularjsComponent}
  ]},
  //special route for any other route than mentioned
  //always should be at last 
  //{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
