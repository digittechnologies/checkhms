import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { RecordJarwisService } from 'src/app/service/record-jarwis.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';

declare let c3 : any;
declare let $ : any;
declare let Chartist: any;

@Component({
  selector: 'app-record-admin',
  templateUrl: './record-admin.component.html',
  styleUrls: ['./record-admin.component.css']
})
export class RecordAdminComponent implements OnInit {

  response: any;
  imgLink: any;
  recordData: any;
  center: any;
  appts: any;
  patients: any;
  pharmacyCenters: any;

  constructor(
    private RecordJarwis: RecordJarwisService,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.Jarwis.generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })

    this.Jarwis.displayPharmacyBranch().subscribe(
      data=>{
      this.response = data;      
      this.center = this.response   
    })

    this.RecordJarwis.displayRecordData().subscribe(
      data=>{
      this.response = data;
      this.recordData = this.response;
      this.appts = this.recordData.allAppointments;
      this.patients = this.recordData.allPatients;
      this.pharmacyCenters = this.recordData.pharmacyCenters;
    })
  }

}
