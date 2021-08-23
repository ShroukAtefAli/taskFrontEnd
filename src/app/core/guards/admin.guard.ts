import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable()
export class AdminGuard implements CanActivate {

constructor(private router:Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let role = localStorage.getItem('userRole');
        if (role == 'admin') {
            return of(true);
        } else {
          this.router.navigate(['/user-view']);
          return of(false);
        }

}

}
