import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

declare let $: any ;

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  response: any;
  custCat: any;
  disabled = false;
  error: any;
  age: any;
  eName: any;
  eOthername: any;
  eGender: any;
  eMobile_number: any;
  eAddress: any;
  eCity: any;
  eState: any;
  eCountry: any;
  eD_o_b: any;
  eCard_number: any;
  eStatus: any;
  eType: any;
  eOccupation: any;
  eMarital_status: any;
  eReligion: any;
  eNext_of_kin_name: any;
  eKin_relationship: any;
  eNext_of_kin_mobile: any;
  eNext_of_kin_address: any;
  eX_ray_number: any;
  eReferral_name: any;
  eReferral_address: any;
  eReferral_mobile: any;
  hostitalNum: any;
  eps_name: any;

  //EPS (External Paramedical Services)

  eps_fullname: any;
  eps_email: any;
  eps_contact: any;
  eps_address: any;
  eps_status: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {

    this.Jarwis.displayCustomerCategory().subscribe(
        data=>{
        this.response = data;      
        this.custCat = this.response   
      })

      this.Jarwis.displayHospitalNum().subscribe(
        data=>{
        this.response = data;      
        this.hostitalNum = this.response   
      })
    }

  showAge(d) {
    let dob = d.target.value;
    let dobIndex = dob.indexOf("-");
    let getYear = dob.slice(0, dobIndex)
    let age = new Date().getFullYear() - getYear;
    if(age<0){
      alert('Invalid Dat of Birth');
      dob.focus()
    }else{
      this.age = age;
    }
  }

  onSubmit(form: NgForm) {
    form.value.age = this.age;
    this.disabled = true;
     this.Jarwis.addCustomer(form.value).subscribe(
       data => this.handleResponse(data),
       error => this.handleError(error),      
     );
     
   }

   onSubmitEps(form: NgForm) {
      this.disabled = true;
      this.Jarwis.addEpsCustomer(form.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleEpsError(error),      
      );
   }

   capsLock(argument){
    let u = argument.target.value.toUpperCase()
    argument.target.value = u
  }

   handleResponse(data) {    // 
     this.disabled = false;
     let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
       duration: 2000
     })   
     this.router.navigateByUrl('/Admin/(side:add_patient)');
     this.ngOnInit();
     
   }
 
   handleError(error) {
      this.disabled = false;
      this.error = error.error.errors;
      this.eName = this.error.name;  
      this.eOthername = this.error.othername; 
      this.eGender  = this.error.gender;
      this.eMobile_number  = this.error.mobile_number;
      this.eAddress = this.error.address; 
      this.eCity = this.error.city; 
      this.eState = this.error.state; 
      this.eCountry = this.error.country; 
      this.eD_o_b = this.error.d_o_b;
      this.eCard_number = this.error.card_number;
      this.eStatus = this.error.status;
      this.eType = this.error.type;
      this.eOccupation = this.error.occupation;
      this.eMarital_status = this.error.marital_status;
      this.eReligion = this.error.religion;
      this.eNext_of_kin_name = this.error.next_of_kin_name;
      this.eKin_relationship = this.error.kin_relationship;
      this.eNext_of_kin_mobile = this.error.next_of_kin_mobile;
      this.eNext_of_kin_address = this.error.next_of_kin_address;
      this.eX_ray_number = this.error.x_ray_number;
      this.eReferral_name = this.error.referral_name;
      this.eReferral_address = this.error.referral_address;
      this.eReferral_mobile = this.error.referral_mobile;
      let snackBarRef = this.snackBar.open("An error occured, try again later", 'Dismiss', {
       duration: 2000
     })
   }


  //EPS (External Paramedical Services)
   handleEpsError(error) {
    this.disabled = false;
    this.error = error.error.errors;
    this.eps_fullname = this.error.eps_fullname;
    this.eps_contact = this.error.phone;
    this.eps_address = this.error.eps_address;
    this.eps_status = this.error.status;
    let snackBarRef = this.snackBar.open("An error occured, try again later", 'Dismiss', {
     duration: 2000
   })

 }
}
