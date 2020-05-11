import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { RevenueJarwisService } from 'src/app/service/revenue-jarwis.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';

declare let c3 : any;
declare let $ : any;
declare let Chartist: any;

@Component({
  selector: 'app-revenue-admin',
  templateUrl: './revenue-admin.component.html',
  styleUrls: ['./revenue-admin.component.css']
})
export class RevenueAdminComponent implements OnInit {
  response: Object;
  imgLink: any;
  center: any;
  recordData: any;
  patients: any;
  dashboardDataInv: any;
  total_income: any;

  constructor(
    private RevenueJarwis: RevenueJarwisService,
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

    this.RevenueJarwis.displayRevenueData().subscribe(
      data=>{
      this.response = data;
      this.recordData = this.response;
      this.patients = this.recordData.allPatients;
      this.total_income = this.recordData.income;
    })

    this.Jarwis.displayPharAdminDashInvoice().subscribe (
      data=>{
      this.response = data;
      this.dashboardDataInv = this.response
      this.onLoad(this.center, this.dashboardDataInv)
  })
  }

  onLoad(branc, earning){
    //EARNING REPORT
    let data = {};
    branc.forEach(e => {
      data[e.br_name] = e.name
    });
    var chart = c3.generate({
      bindto: '#chart-bar', // id of chart wrapper
      data: {
          columns: earning,
          type: 'bar', 

          names: data,
      },
      axis: {
          x: {
              type: 'category',
              // name of each category
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
      },
      bar: {
          width: 8
      },
      legend: {
          show: true, //hide legend
      },
      padding: {
          bottom: 20,
          top: 0,
      },
  })
  }
}
