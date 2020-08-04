import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
declare let c3 : any;
declare let $ : any;
declare let Chartist: any;

@Component({
  selector: 'app-nurse-admin',
  templateUrl: './nurse-admin.component.html',
  styleUrls: ['./nurse-admin.component.css']
})
export class NurseAdminComponent implements OnInit {
  response: any;
  uBranch: any;
  imgLink: any;
  pat: any;
  male: any;
  female: any;
  patient: any;
  genResponse: any;
  countOPD: any;
  countIPD: any;
  countCOPD: any;
  countGOPD: any;
  countMC: any;
  countFemale: any;
  countMale: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.Jarwis.profile().subscribe(
      data=>{
      this.response = data;
      this.uBranch= this.response.det[0].branch_id
    })

    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
  this.Jarwis.countCustomer().subscribe(
    data=>{
    this.response = data;      
    this.pat = this.response.customer[0]  
    this.male = this.pat.male;
    this.female = this.pat.female;  
    this.patient = this.pat.patient;
    this.countOPD = this.response.opd;
    this.countIPD = this.response.ipd;
    this.countCOPD = this.response.copd;
    this.countGOPD = this.response.gopd;
    this.countMC = this.response.mc;
    this.countFemale = this.response.female;
    this.countMale = this.response.male;
    
    // this.onLoad(this.pat,this.branches,this.dashboardData,this.dashboardDataStaff,this.dashboardDataAppt,this.dashboardDataInv)
  })
  }

}
