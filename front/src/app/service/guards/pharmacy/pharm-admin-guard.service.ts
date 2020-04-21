import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../token.service';
import { JarwisService } from '../../jarwis.service';

@Injectable({
  providedIn: 'root'
})
export class PharmAdminGuardService implements CanActivate {
  response: any;
  profile: any;
  dashboardLink:any;
  dept: any;

  constructor(private Token: TokenService, private router: Router, private Jarwis: JarwisService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    if(this.Token.get()){
      this.Jarwis.profile().subscribe(
        data=>{       
        this.response = data;     
        this.profile = this.response.det[0].role_id;
        this.dashboardLink = this.response.det[0].nameD+'-'+this.response.det[0].role_name;
        this.dept = this.response.det[0].dept_id;

        if(this.dept == 10 || this.dept == 1){
          if(this.profile == 1001 || this.profile == 2002 || this.profile == 1002 || this.profile == 2001 || this.profile == 3003 ){
            console.log(this.dashboardLink)
            return true;
          } else {
            alert('Permission Denied');
            this.router.navigateByUrl('/Admin/(side:'+this.dashboardLink+')');
            return false;
          }
        }
        else {
          alert('Un-authorize');
          this.router.navigateByUrl('/Admin/(side:'+this.dashboardLink+')');
          return false;
        }
      })
    }
  }
}
