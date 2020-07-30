import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';


@Component({
  selector: 'app-booked-appointment',
  templateUrl: './booked-appointment.component.html',
  styleUrls: ['./booked-appointment.component.css']
})
export class BookedAppointmentComponent implements OnInit {
  response: any;
  response2: any;
  uBranch: any;
  uBranchName: any;
  role: any;
  dept: any;
  log: any;
  pharmCenter: any;
  status: any;
  logEmpty: boolean;
  imgLink: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.Jarwis.profile().subscribe(
      data=>{
      this.response = data;
      this.uBranch= this.response.det[0].branch_id
      this.uBranchName= this.response.det[0].br_name
      this.role= this.response.det[0].role_id
      this.dept = this.response.det[0].dept_id;
    })

    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayDeptAppointment(this.uBranch).subscribe(
      data=>{
      this.response2 = data; 
      // this.logs= this.response; 
      this.log=this.response2.data2;
      this.pharmCenter = this.response.bName;
      this.status= this.log.center_status
      if(this.log.length <= 0){
        this.logEmpty = true;
      }
  })

  }
}
