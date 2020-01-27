import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-refill-details',
  templateUrl: './refill-details.component.html',
  styleUrls: ['./refill-details.component.css']
})
export class RefillDetailsComponent implements OnInit {

  response: any;
  total: any;
  error: any;
  itemDet: any;
  pres: any;
  pat: any;
  patID: any;

  constructor( 
    private http: HttpClient,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
	    this.patID = id;
	    this.Jarwis.patientdetails(id).subscribe(
	      data=>{
	      this.response = data;      
	      this.pat = this.response;
	    })
	}))

    this.Jarwis.disItemDet().subscribe(
      data=>{
      this.response = data;      
      this.itemDet = this.response       
    })

    // this.Jarwis.displayPharmPre(this.patID).subscribe(
    //   data=>{
    //   this.response = data;      
    //   this.pres = this.response       
    // })
  }

}
