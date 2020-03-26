import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { AuthorizationService } from './authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    AboutusComponent,
    ContactusComponent,
    TechnologiesComponent,
    AngularjsComponent,
    NodejsComponent,
    JavascriptComponent,
    ExpressjsComponent,
    AdmindashboardComponent,
    UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizationService,
      multi:true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
