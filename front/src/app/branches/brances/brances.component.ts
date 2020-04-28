import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-brances',
  templateUrl: './brances.component.html',
  styleUrls: ['./brances.component.css']
})
export class BrancesComponent implements OnInit {

  response: any;
  dept: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  deptres: any;
  deptName: any;
  deptDescrip: any;
  posid: any;
  deptid: any;
  data: string;
  imgLink: any;
  branchRes: any;

  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis.showBranches().subscribe(
      data=>{
      this.response = data;      
      this.dept = this.response   
    })

    this.Jarwis.displayAllstaff().subscribe(
      data=>{      
      this.staffRes = data;
      
      this.staff = this.staffRes
     
   
    })

    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayAllposition().subscribe(
      data=>{
      this.posRes = data;
     
   
    })
   
  
}

editdept(id: string) {
  this.Jarwis.edtDept(id).subscribe(
    data=>{      
      this.branchRes = data; 
      this.deptid= id
      this.deptName= this.branchRes[0].name;
      this.deptDescrip= this.branchRes[0].address;
      this.posid= this.branchRes[0].status;
         
    })
}

onUpdate(form: NgForm) {

  
  form.value.id=this.deptid
  //  console.log(form)
  this.Jarwis.updateDept(form.value).subscribe(  
      
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {
  if(confirm('This can\'t be revert after deleted')){

    this.Jarwis.deleteDept(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }
  }


  onSubmit(form: NgForm) {
   
    this.Jarwis.addCenter(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })
    // this.router.navigateByUrl('');
    this.councle() 
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }

  councle(){}

}
