import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  response: any;
  branch: any;
  error: any;
  action: any;
  payloads: any;
  getAction = '';
  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {

    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;      
      this.branch = this.response
      })  
      
  }

  onClickSubmit(form: NgForm) {
    this.Jarwis.stockHistory(form.value).subscribe(
      data => {
        this.response = data;
        this.payloads = this.response;
        this.action = this.getAction;
      },
      error => this.handleError(error),      
    );  
  }

  onSelectAction(id) {
    this.getAction = id.target.value;
    this.ngOnInit()
  }

  handleResponse(data) {     
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:catacturer');
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }
}
