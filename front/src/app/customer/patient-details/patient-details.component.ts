import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  response: any;
  pat: any;


  constructor( 
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
      
    this.Jarwis.patientdetails(id).subscribe(
      data=>{
      this.response = data;      
      this.pat = this.response;
      console.log(this.pat); 
    })
  
  }))
}

}
