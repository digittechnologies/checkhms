import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';

declare let jQuery: any;
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
  image: any;
  name: any;
  fname: any;
  lname: any;
  moduleResponse: Object;
  module: Object;
  laboratory: any;
  hms: any;
  pharmacy: any;
  radiology: any;
  doctor: any;
  roleResponse: Object;
  role: Object;
  super: any;
  global: any;
  center: any;
  user: any;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private elementRef: ElementRef
  ) { }


  ngOnInit() {

    // location.reload()

    this.Jarwis.profile().subscribe(
      data=>{
       
      this.response = data;
      this.pos= this.response.det[0].position_id
      this.image= this.response.det[0].image
      this.fname= this.response.det[0].firstname
      this.lname= this.response.det[0].lastname 
      this.role= this.response.det[0].role_id
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

    this.Jarwis.displayModule().subscribe(
      data=>{       
      this.moduleResponse = data
      this.module= this.moduleResponse
      this.hms=this.module[0]
      this.pharmacy=this.module[1]
      this.laboratory=this.module[2]
      this.radiology=this.module[3]
      this.doctor=this.module[4]

    })

    this.Jarwis.displayRole().subscribe(
      data=>{       
      this.roleResponse = data
      this.role= this.roleResponse
      this.super=this.role[0].id
      this.global=this.role[1].id
      this.center=this.role[2].id
      this.user=this.role[3].id
    })


  }

  // ngAfterViewInit(){
  //   jQuery(this.elementRef.nativeElement)
  // }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }

  
}

