import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-set-branch',
  templateUrl: './set-branch.component.html',
  styleUrls: ['./set-branch.component.css']
})
export class SetBranchComponent implements OnInit {
  response: any;
  error: any;
  catName:any;
  manufid:any;
  onUpdate:any;
  disabled = false;
  dept_name;
  deptlists:any;
   pharmacy:any;
   record:any;
   radio:any;
   revenue:any;
   theater:any;
   ward:any;
   nurse:any;
   lab:any;
   clinic:any
   role:any;
   res:any;
   department:any;
   depts:any;
   clinic_dept=[];
   oppration_dept=[];
   center_dept:any;
   suspend_id:any;
   activate_id:any;
   
  

  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) {}

  ngOnInit() {
    this.Jarwis.profile().subscribe(
      data=>{
        console.log(data)    
      this.res = data;  
      this.role= this.res.det[0].role_id;
      this.department=this.res.det[0].nameD;
    })
    this.Jarwis.getdept().subscribe(
      data=>{ 
        this.depts=data;
        this.depts.map(d=>{
          if (d.dept_id=="2" || d.dept_id=="12" || d.dept_id=="i5" || d.dept_id=="17" || d.dept_id=="18" || d.dept_id=="19") {
            this.clinic_dept.push(d);
          }
          else if (d.dept_id=="11" || d.dept_id=="16" || d.dept_id=="1") {
            this.oppration_dept.push(d);
          }
        })
        console.log(this.clinic_dept)
        console.log(this.oppration_dept)
        
    setTimeout(() => {
      let de = this.department
      let index = this.depts.filter(function(card) {
        return card.name == de;
        //  console.log(this.department)
      })
      this.center_dept=index;
    },5000);
        
      }
    )
    this.Jarwis.displaysetBranch().subscribe(
      data=>{
      this.response = data; 
      console.log(this.response)        
      this.pharmacy = this.response.pharm
      this.clinic = this.response.clinic; 
      this.radio = this.response.radio;
      this.record = this.response.record;
    })
    this.Jarwis.deptList({dept:this.dept_name}).subscribe(data=>{
      this.deptlists = data;
      console.log(data)
    },
    err=>{console.log(err)}
    )

  }


  onSubmit(form: NgForm) {
   this.disabled = true;
   if (form) {
     this.Jarwis.createBranch(form.value).subscribe(
       data => {
         this.disabled = false;
         this.handleResponse(data)
         form=null;
          console.log(data)
          this.close();
         },
       error => this.handleError(error), 
            
     ); 
  //  else if(this.dept_name!="pharmacy" && this.dept_name!=" "){
  //   this.Jarwis.createBranchs({form:form.value,dept:this.dept_name}).subscribe(
  //     data => {
  //       this.disabled = false;
  //       this.handleResponse(data)
  //       form=null;
  //       this.close();
  //        console.log(data)
  //       },
  //     error => this.handleError(error), 
           
  //   ); 
  //  }
  }
  }

  onSuspend(id: string) {
    this.suspend_id=id;
  }
  suspend(){
    this.Jarwis.suspendBranch(this.suspend_id).subscribe(  
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }

  onActivate(id: string) {
  this.activate_id=id
  }
  activate(){
    this.Jarwis.activateBranch(this.activate_id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    // this.router.navigateByUrl('/Admin/(side:set_branch');
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
  branch(e){
   this.ngOnInit
  }
  dept(e){
    this.dept_name=e.target.value;
    this.Jarwis.deptList({dept:this.dept_name}).subscribe(data=>{
      this.deptlists = data;
      console.log(data)
    },
    err=>{console.log(err)}
    )
  }
  close(){

  }
  // added(){
  //   this.close();
  // }
}
