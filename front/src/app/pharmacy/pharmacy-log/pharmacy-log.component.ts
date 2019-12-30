import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pharmacy-log',
  templateUrl: './pharmacy-log.component.html',
  styleUrls: ['./pharmacy-log.component.css']
})
export class PharmacyLogComponent implements OnInit {

  response: any;
  log: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.Jarwis.displayDeptAppointment().subscribe(
      data=>{
      this.response = data;      
      this.log = this.response;
      console.log(this.log)
    })

  }

}
