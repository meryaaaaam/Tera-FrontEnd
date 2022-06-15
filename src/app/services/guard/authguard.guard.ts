import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/shared/auth/token.service';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  isLoggedIn = false ;
  constructor(
    private token: TokenService ,
    private router: Router) { }


    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
        if (this.token.getTokens()) {
          this.isLoggedIn = true;
          return true; }
          else {this.router.navigate(['/']) ;
                               return false ; }

    }


}
