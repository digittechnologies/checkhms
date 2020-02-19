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
  p_date: any;
  name: any;
  othername: any;
  card_number: any;
  address: any;
  city: any;
  mobile_no: any;
  state: any;
  country: any;
  amount: any;
  // patoice: any;
  status: any;
  patient_image: any;
  blood_group: any;
  d_o_b: any;
  email: any;
  gender: any;
  genotype: any;

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
      // this.p_date=this.pat[0].p_date
      this.name=this.pat[0].name
      this.othername=this.pat[0].othername
      this.card_number=this.pat[0].card_number
      this.address=this.pat[0].address
      this.city=this.pat[0].city
      this.mobile_no=this.pat[0].mobile_number
      this.state=this.pat[0].state
      this.country=this.pat[0].country
      // this.status=this.pat[0].status
     this.patient_image= this.pat[0].patient_image
     this.blood_group=this.pat[0].blood_group
     this.email=this.pat[0].email
     this.d_o_b=this.pat[0].d_o_b
     this.gender=this.pat[0].gender
    this.genotype= this.pat[0].genotype
      console.log(this.pat); 
    })
  
  }))
}

}
