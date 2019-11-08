import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  res: any;
  response: any;
  pos: any;
  allPos: any;
  pharmacist: any;
  cashier: any;
  physician: any;
  admin: any;
  card: any;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    private Token: TokenService
  ) { }


  ngOnInit() {

    this.Jarwis.profile().subscribe(
      data=>{
       
      this.response = data;
      this.pos= this.response.det[0].position_id
    
    })

    this.Jarwis.displayAllposition().subscribe(
      data=>{
       
      this.response = data
      this.allPos= this.response
      this.pharmacist=this.allPos[0].id
      this.cashier=this.allPos[1].id
      this.physician=this.allPos[2].id
      this.admin=this.allPos[3].id
      this.card=this.allPos[4].id
    })

  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }


}
