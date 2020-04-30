import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  canActivate():boolean{
    
    //read token from localstorage
    let token=localStorage.getItem('token');
    if (token!=undefined)
    {
      return true;
    }
    else{
      return false;
    }
  }
  
}
