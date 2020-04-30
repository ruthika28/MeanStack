import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouteGuard } from '../route.guard';


const routes: Routes = [{path:"userdashboard/:username",
                        component:UserdashboardComponent,
                        canActivate:[RouteGuard]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
