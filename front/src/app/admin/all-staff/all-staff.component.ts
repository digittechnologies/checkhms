import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
declare var $:any;
@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.css']
})
export class AllStaffComponent implements OnInit {
  permisions:Array<{component_id:Number,read:String,write:String}>=[]
  response: any;
  department: any;
  role: any;
  position: any;
  branch: any;
  givenDept: any;
  error: any;
  profile: any;
  givenRole: any;
  staff: any;
  thisStaff: any;
  imgLink: any;

  allstaff: any;

  disabled = false;
  roleID: any;
  sbranch: any;
  sResponse: Object;
  firstname: any;
  lastname: any;
  gender: any;
  email: any;
  staff_countAll: any;
  deptname: any;
   res:any
  modules: any;
  added = [];
  ranks: any;
  teams: any;

  constructor( public Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.Jarwis.displayAllstaff().subscribe(
      data=>{
      this.response = data;
      this.staff = this.response
     this.staff_countAll = this.staff.countAll
      this.allstaff=this.staff.all
    })
    
    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.profile().subscribe(
      data=>{
      this.response = data;
      this.profile = this.response.det[0];
      this.roleID = this.profile.role_id
    })

    this.Jarwis.displayDepartments().subscribe(
      data=>{
      this.response = data;
      this.department = this.response
    })
    this.Jarwis.displayAllposition().subscribe(
      data=>{
        let res:any = data
        this.position =res;
      }
    )

    this.Jarwis.displayRole().subscribe(
      data=>{
      this.response = data;
      this.role = this.response.roles;
      this.ranks = this.response.ranks;
      this.teams = this.response.teams
    })

    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;      
      this.branch = this.response
      })
      $("#search_staff").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#staff_sea .card").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
      $("#patient").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#search_branch span").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

       
      });
  }
  patient(){
    console.log("hello")
      
  }
  onChange1(b){
    this.givenDept = b.target.value;
    this.Jarwis.deptModules(this.givenDept).subscribe(
      data=>{
        this.res = data;
        this.sbranch = this.res.centers;
        this.modules = this.res.dept;
        this.deptname = this.res.department[0].name;
      }
    )
   
  
  }
  check(id,data){
      let index = this.permisions.find(i =>{
        return i.component_id === id;
      })
      if (index && data =='read') {
        if (index.read =="") {
          index.read=data
        } else if (index.read =="read" && index.write==""){
        let dele=  this.permisions.findIndex(i=>{return i.component_id===id})
            this.permisions.splice(dele,1)
          } 
          else{
            index.read = ""
          }
      }
      else if (index && data =='write') {
       if (index.write == "") {
         index.write = data;
       } else if (index.write =="write" && index.read==""){
        let dele=  this.permisions.findIndex(i=>{return i.component_id===id})
            this.permisions.splice(dele,1)
          } 
          else{
            index.write = ""
          }
      }
      else{
        if (data =='read') {
          this.permisions.push({component_id:id,read:data,write:""})
        } else if(data =='write') {
          this.permisions.push({component_id:id,read:"",write:data})
        }
  }
  console.log(this.permisions)
  }
  
  onSelectRole(r){
    this.givenRole = r.target.value;
    this.ngOnInit()
  }

  onSubmit(form: NgForm) {
    this.disabled = true;
    this.Jarwis.signup(form.value).subscribe(
     data=>{
       this.Jarwis.permision({user_id:data,permites:this.permisions}).subscribe(
         data=>{
           this.handleResponse(data)
         }
       )
     }  
    );
  }

  uStatus(id){
    this.Jarwis.uStatus(id).subscribe(
     data => this.handleResponse(data),
       error => this.handleError(error)
  );
   }

   c_uStatus(id){
     if(confirm('This will block the user from logging in')){
      this.Jarwis. c_uStatus(id).subscribe(
        data => this.handleResponse(data),
          error => this.handleError(error)
     );
     }
   }

   reStatus(id){
    if(confirm('This will re-activate the user')){
      this.Jarwis. reStatus(id).subscribe(
      data => this.handleResponse(data),
        error => this.handleError(error)
    );
    }
   }
   getId(id){
     this.thisStaff = id;
   }
  handleResponse(data) { 
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    // this.router.navigateByUrl('/Admin/(side:catacturer');
    this.ngOnInit();
    this.disabled = false;
  }

  handleError(error) {
    this.error = error.error.errors;
    this.firstname= this.error.firstname;
    this.lastname=  this.error.lastname;
    this.gender=  this.error.gender;
    this.email=  this.error.email;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    this.disabled = false;
  }
}
