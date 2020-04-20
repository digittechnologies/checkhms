import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';
import { JarwisService } from '../jarwis.service';

@Injectable({
  providedIn: 'root'
})
export class DeptAdminRoleGuardService implements CanActivate {
  response: any;
  profile: any;
  dashboardLink:any;

  constructor(private Token: TokenService, private router: Router, private Jarwis: JarwisService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    if(this.Token.get()){
      this.Jarwis.profile().subscribe(
        data=>{       
        this.response = data;     
        this.profile = this.response.det[0].role_id;
        this.dashboardLink = this.response.det[0].nameD+'-'+this.response.det[0].role_name;
        if(this.profile == 1001 || this.profile == 2002 || this.profile == 1002 || this.profile == 2001|| this.profile == 3003 ){
          console.info(this.dashboardLink);
          return true;
        } else {
          alert('Permission Denied');
          console.info(this.dashboardLink);
          this.router.navigateByUrl('/Admin/(side:'+this.dashboardLink+')');
        }
      })
    }
  }
}
