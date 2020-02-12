import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

@Injectable()
export class BeforeLoginService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.Token.get()){
      this.router.navigateByUrl('/Admin/(side:home)');
    }
    return !this.Token.loggedIn();
  }
  constructor(
    private Token: TokenService,
    private Auth: AuthService,
    private router: Router,
    ) { }

}

