import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, NgForm } from '@angular/forms';
import { TokenService } from '../service/token.service';
import { JarwisService } from '../service/jarwis.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  uid: any;
  me: any;
  response: any;
  error: any;

  constructor(
    public actRoute: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private Token: TokenService, 
    private Jarwis: JarwisService,
    private router: Router,    
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() { 
    this.Jarwis.profile().subscribe(
      data=>{
      this.response = data;
      this.me = this.response.det[0]
    })
  }

  onChangePwd(form: NgForm){
    this.Jarwis.changePassword(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
      )
  }
  
  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })   
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }

}
