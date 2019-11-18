import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-make-prescription',
  templateUrl: './make-prescription.component.html',
  styleUrls: ['./make-prescription.component.css']
})
export class MakePrescriptionComponent implements OnInit {
  response: any;
  appoints: any;
  pat: any;
  response_p: any;

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
      this.response_p = data;      
      this.pat = this.response_p;
      console.log(this.pat); 
    })
  
  }))

    this.Jarwis.displayDeptAppointment().subscribe(
      data=>{
      this.response = data;      
      this.appoints = this.response;
    })
  }

}
