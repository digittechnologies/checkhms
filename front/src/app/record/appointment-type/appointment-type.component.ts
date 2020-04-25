import { Component, OnInit } from '@angular/core';
import { RecordJarwisService } from 'src/app/service/record-jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointment-type',
  templateUrl: './appointment-type.component.html',
  styleUrls: ['./appointment-type.component.css']
})
export class AppointmentTypeComponent implements OnInit {
error: any;
disabled = false;
response: any;
appType:any;
aptyRes: any;
aptyid: any;
aptyName: any;
aptyDes: any;
aptyStatus: any;

  constructor(
    private recordJarwis: RecordJarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    
    this.recordJarwis.displayApptType().subscribe(
      data=>{
      this.response = data;      
      this.appType = this.response   
    })
  }


  editApptType(id: string) {
    this.recordJarwis.editApptType(id).subscribe(
      data=>{      
        this.aptyRes = data; 
        this.aptyid= id;
        this.aptyName= this.aptyRes[0].name;
        this.aptyDes= this.aptyRes[0].description;
        this.aptyStatus = this.aptyRes[0].status;
      })
  }

  onUpdate(form: NgForm) {
    this.disabled = true;
    form.value.id=this.aptyid
    if(form.value.name == '') form.value.name = this.aptyName;
    if(form.value.description == '') form.value.description = this.aptyDes;
    if(form.value.status == '') form.value.status = this.aptyStatus;
    this.recordJarwis.updateApptType(form.value).subscribe(        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );  
  }

  onDelete(id: string) {
    if(confirm('This can\'t be revert after deleted')){
      this.recordJarwis.deleteApptType(id).subscribe(  
        data => this.handleResponse(data),
        error => this.handleError(error), 
      );
    }
  }

  onSubmit(form: NgForm) {
   this.disabled = true;
    this.recordJarwis.addApptType(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),      
    );

  }

  handleResponse(data) {    
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:appointment_type)');
    this.ngOnInit();
    this.disabled = false;
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000
    })
    this.disabled = false;
  }
}
