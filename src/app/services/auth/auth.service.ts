/*
This service is  used for authorization
*/
import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    if (localStorage.getItem('userData')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

