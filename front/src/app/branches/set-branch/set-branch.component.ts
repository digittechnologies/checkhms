import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
declare var $:any;

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
   branch_details:any;
   staffs:any;
   branch_name:any;
   branch_adress:any;
   branch_hod:any;
   branch_status:any;
  deptli: Object;
  apppoint_type: Object;
  dd: Object;
  staff: any;
  app_type: any;
  depart: any;
  center: any;
  branch_rep_id: any;
  branches: Object;
  departments: any;
  branche_id: any;
  department_id: any;
  depart_name: any;
  center_name: any;
  depart_id: any;
  center_id: any;
  branch_id: any;
  clinic_type: any;
  clinic_tpes: any;
  clinic_types: any;
  br_search: string;
  

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
        // console.log(data)    
      this.res = data;  
      this.role= this.res.det[0].role_id;
      this.department=this.res.det[0].nameD;
    });

    this.Jarwis.getDepertment().subscribe(
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
        // console.log(this.clinic_dept)
        // console.log(this.oppration_dept)
        
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
      // console.log(this.response)        
      this.pharmacy = this.response.pharm
      this.clinic = this.response.clinic; 
      this.radio = this.response.radio;
      this.record = this.response.record;
      this.revenue=this.response.revenue;
      console.info(this.revenue)
    })
    this.Jarwis.deptList({dept:this.dept_name}).subscribe(data=>{
      let deptli = data;
      this.deptlists = deptli;
      this.apppoint_type = deptli
      // console.log(data[0].list)
    },
    err=>{console.log(err)}
    )
    $("#branch_search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#branches tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

  }
  branch(e){
    this.ngOnInit
    // $("#branch_search");
    // this.br_search = ""
   }



  onSubmit(form: NgForm) {
   this.disabled = true;
   if (form) {
     this.Jarwis.createBranch(form.value).subscribe(
       data => {
         this.disabled = false;
         this.handleResponse(data)
         form=null;
          // (datconsole.loga)
          this.close();
         },
       error => this.handleError(error), 
            
     ); 
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
  onEdit(id:any){
    // console.log(id)
    this.Jarwis.onEditBranch({id:id}).subscribe(
      data=>{
        this.branch_details = data;
        this.branch_name   = this.branch_details.branch[0].name;
        this.branch_adress = this.branch_details.branch[0].address;
        this.branch_hod    = this.branch_details.branch[0].firstname;
        this.branch_status = this.branch_details.branch[0].status;
        this.branch_rep_id = this.branch_details.branch[0].sales_rep;
        this.branche_id    = this.branch_details.branch[0].branch_id;
        this.department_id = this.branch_details.branch[0].dept_id;
        this.depart_name   =  this.branch_details.branch[0].dept_name;
        this.depart_id   =  this.branch_details.branch[0].dept_id;
        this.center_name   =  this.branch_details.branch[0].branch_name;
        this.center_id   =  this.branch_details.branch[0].branch_id;
        this.branch_id =this.branch_details.branch[0].id;
        this.clinic_type = this.branch_details.branch[0].clinic_type;

        
        this.center= this.branch_details.center;
        this.depart= this.branch_details.department;
        this.staffs = this.branch_details.staffs;
        this.clinic_types = this.branch_details.clinic_type;
        // console.log(this.branch_details.branch)
      }
    )
  }
  onUpdateBranch(form:NgForm){
    // console.log(form)
    this.Jarwis.updateBranch(form.value).subscribe(
      data=>{console.log(data)
        this.handleResponse(data[0].message)}
    )
  }
  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open(data, 'Dismiss', {
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
 
  dept(e){
    this.dept_name=e.target.value;
    this.Jarwis.deptList({dept:this.dept_name}).subscribe(data=>{
      this.deptlists = data;
       this.staff = this.deptlists.list;
       this.app_type = this.deptlists.appointment_type;
       this.branches = this.deptlists.center;
      //  this.departments = this.deptlists.department;

      //  console.log(this.app_type)
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
