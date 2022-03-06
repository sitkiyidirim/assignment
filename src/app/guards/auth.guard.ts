import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../models/customer.model';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private currentUser: UserModel =new UserModel;

  constructor(private authenticationService: AuthenticationService, private router: Router){
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // if(this.currentUser){
      //   if(route.data['roles'].indexOf(this.currentUser.role) === -1) {
      //      this.router.navigate(['/profile']);
      //      return false;
      //   }
      //   return true;
      // }
    
      // this.router.navigate(['/login']);
      return true;
  }
  
}
