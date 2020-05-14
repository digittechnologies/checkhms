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
  selector: 'app-revenue-user',
  templateUrl: './revenue-user.component.html',
  styleUrls: ['./revenue-user.component.css']
})
export class RevenueUserComponent implements OnInit {
  response: any;
  imgLink: any;
  center: any;
  recordData: any;
  patients: any;
  total_income: any;
  dashboardDataInv: any;
  total_balance: any;

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

    this.RevenueJarwis.displayRevenueStaffData().subscribe(
      data=>{
      this.response = data;
      this.recordData = this.response;
      this.patients = this.recordData.allPatients;
      this.total_income = this.recordData.income;
      this.total_balance = this.recordData.balance;
    })

    this.Jarwis.displayPharStaffDashInvoice('').subscribe (
      data=>{
      this.response = data;
      this.dashboardDataInv = this.response
      this.onLoad(this.dashboardDataInv)
  })
  }

  onLoad(earning){
    //EARNING REPORT
    let branch  = earning.branch;
    var chart = c3.generate({
      bindto: '#chart-bar', // id of chart wrapper
      data: {
          columns: earning.invoices,
          type: 'bar', // default type of chart
          colors: {
              'data1': '#007FFF', // blue            
          },
          names: {branch:branch}
      },
      axis: {
          x: {
              type: 'category',
              // name of each category
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
          },
      },
      bar: {
          width: 16
      },
      legend: {
          show: true, //hide legend
      },
      padding: {
          bottom: 20,
          top: 0
      },
  });
  }

}
