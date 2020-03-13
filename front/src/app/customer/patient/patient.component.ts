import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  response: Object;
  bran: any;
  error: any;
  pat: any;
  department: any;
  appontId: any;
  imgLink: any;
  disabled= false;
  p: any;
  name: any;
  route: any;

  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis.displayCustomer().subscribe(
      data=>{
      this.response = data;      
      this.pat = this.response  
      
    //   this.name = this.pat.next_page_url.snapshot.queryParamMap.get("paramName")
    //   this.route.queryParamMap.subscribe(queryParams => {
    //     this.name = queryParams.get("paramName")
    //   })
    //   alert(this.name)
    })

    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayDepartments().subscribe(
      data=>{
      console.log(data);   
      this.response = data;
      this.department = this.response
     
   
    })
  }

  // next(){

  // }

  appointment(id){

   this.appontId = id;

  // console.log(id);
    
  }

  onSubmitApp(form: NgForm) {
    this.disabled = true;
    this.Jarwis.makeAppointment2({aid:this.appontId, form:form.value }).subscribe(
      data => this.handleResponse(data),
        error => this.handleError(error)
   );
   
  }

  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addCustomer(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }
  handleResponse(data) {    // 
    this.disabled = false;
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:patient)');
    this.ngOnInit();
    
  }

  handleError(error) {
    this.disabled = false;
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open("This patient is already appointed", 'Dismiss', {
      duration: 2000

    })
    
  }

}
