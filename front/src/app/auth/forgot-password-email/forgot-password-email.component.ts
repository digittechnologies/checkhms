import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password-email',
  templateUrl: './forgot-password-email.component.html',
  styleUrls: ['./forgot-password-email.component.css']
})
export class ForgotPasswordEmailComponent implements OnInit {
  
  disabled= false;
  sav= 'Login'
  public error = null;
  message: string;
  res: Object;
  selectedValue: string;
  selectedCar: string;
  response: any;
  roleResponse: Object;
  super: any;
  global: any;
  user: any;
  center: any;
  role:any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  
  onSubmit() {
    this.disabled= true;
   this.sav= 'Processing'
  this.Jarwis.login(this.form).subscribe(
    data => this.handleResponse(data),
    error => this.handleError(error)
    
    );
    

  
}
  form(form: any) {
    throw new Error("Method not implemented.");
  }
handleResponse(data) {
  let pos = data.details[0].position_id;
  let snackBarRef = this.snackBar.open("Login successfully", 'Dismiss', {
    duration: 2000
  })   
 
  this.Token.handle(data.token.original.access_token);
 
  this.Auth.changeAuthStatus(true);  
  this.ngOnInit() 
  if (this.role == this.super) {
    this.router.navigateByUrl('/Admin/(side:home)');      
  }
  if (this.role == this.global) {
     this.router.navigateByUrl('/Admin/(side:home)'); 
  } 
  if (this.role == this.center) {
    this.ngOnInit() 
    this.router.navigateByUrl('/Admin/(side:phamarcy-admin-dashboard)'); 
 } 
 if (this.role == this.user) {
  this.router.navigateByUrl('/Admin/(side:phamarcy-user-dashboard)'); 
} 
 
 this.disabled= false;
 this.sav= 'Submited'

}

handleError(error) {

  this.error = error.error.error;
  let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
    duration: 2000

  })
  this.disabled= false;
  this.sav= 'Login'

}

}
