import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements  CanActivate{
  constructor(
    private router: Router
    
) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('calling..!canActivate..!'+state.url);
/*
const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
*/
var isLoggedIn = localStorage.getItem('isLoggedIn');
console.log("AuthGuardGuard isLoggedIn>>>>>>>>>>>"+isLoggedIn);
if(isLoggedIn == 'true'){
  return true;
}

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
  }
}
