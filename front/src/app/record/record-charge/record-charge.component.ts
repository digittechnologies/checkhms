import { Component, OnInit } from '@angular/core';
import { RecordJarwisService } from 'src/app/service/record-jarwis.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-record-charge',
  templateUrl: './record-charge.component.html',
  styleUrls: ['./record-charge.component.css']
})
export class RecordChargeComponent implements OnInit {
  error: any;
  disabled = false;
  response: any;
  charges:any;
  chrgRes: any;
  chrgid: string;
  chrgName: any;
  chrgAmount: any;
  chrgStatus: any;
  responseRec: any;
  appointment_ty: any;
  dept: any;

  constructor(
    private recordJarwis: RecordJarwisService,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.recordJarwis.displayRecordCharges().subscribe(
      data=>{
      this.response = data;      
      this.charges = this.response   
    })

    this.recordJarwis.displayAppointmentType().subscribe( 
      data=>{
      this.responseRec = data;     
      this.appointment_ty = this.responseRec.appointment_type;      
    })

    this.Jarwis.displayDepartments().subscribe(
      data=>{
      this.response = data;      
      this.dept = this.response  
    })  
  }


  editCharge(id: string) {
    this.recordJarwis.editCharge(id).subscribe(
      data=>{      
        this.chrgRes = data; 
        this.chrgid= id;
        this.chrgName= this.chrgRes[0].charge_name;
        this.chrgAmount= this.chrgRes[0].charge_amount;
        this.chrgStatus = this.charges[0].status;
      })
  }

  onUpdate(form: NgForm) {
    this.disabled = true;
    form.value.id=this.chrgid
    if(form.value.charge_name == '') form.value.charge_name = this.chrgName;
    if(form.value.charge_amount == '') form.value.charge_amount = this.chrgAmount;
    if(form.value.status == '') form.value.status = this.chrgStatus;
    this.recordJarwis.updateCharge(form.value).subscribe(        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );  
  }

  onDelete(id: string) {
    if(confirm('This can\'t be revert after deleted')){
      this.recordJarwis.deleteCharge(id).subscribe(  
        data => this.handleResponse(data),
        error => this.handleError(error), 
      );
    }
  }

  onSubmit(form: NgForm) {
   this.disabled = true;
    this.recordJarwis.addHospitalCharge(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),      
    );
  }

  handleResponse(data) {    
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:record_charges)');
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
