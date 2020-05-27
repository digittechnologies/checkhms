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
  appType: any;
  pieData: any;

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

    this.RecordJarwis.displayRecordPieData().subscribe(
      data=>{
      this.response = data;      
      this.pieData = this.response
      this.onLoad(this.appType, this.pieData)
    })

    this.RecordJarwis.displayAppointmentType().subscribe(
      data=>{
      this.response = data;      
      this.appType = this.response.appointment_type 
      this.onLoad(this.appType, this.pieData)
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

  onLoad(aptype, pieData){
    let data = {};
    let pieBox = [];
    let count = 0;
    aptype.forEach(e => {
      pieBox.push([e.id, pieData[count]]);
      data[e.id] = e.name;
      count++;
    });
    console.log(data)
    console.log(pieBox)
    var chart = c3.generate({
      bindto: '#chart-Events-Interest', // id of chart wrapper
      data: {
          // each columns data
          columns: pieBox,
          type: 'pie',
          // name of each serie
          names: data
      },
      axis: {
      },
      legend: {

          show: true,  //hide legend
      },
      padding: {
          bottom: 20,
          top: 0
      },
  });
  }
}
