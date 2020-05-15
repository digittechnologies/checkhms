import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../token.service';
import { JarwisService } from '../../jarwis.service';

@Injectable({
  providedIn: 'root'
})
export class PharmStaffGuardService {
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
        console.info(this.profile)
        if(this.dept == 1 && this.profile == 4004){
          return true;
        } else {
          console.log(this.dashboardLink)
          alert('Permission Denied');
          this.router.navigateByUrl('/Admin/(side:'+this.dashboardLink+')');
        }
      })
    }
  }
}
