import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public submissionForm: FormGroup;
  setting:any;
  logo:any;
  image: any;
  company_name: any;
  short_name: any;
  address: any;
  contact_number: any;
  email: any;
  web_url: any;
  app: any;
  module: FormGroup;
  error: any;
  moduleResponse: any;
  branchResponse: any;
  dept: any;
  staffRes: any;
  staff: any;
  setresponse: any;
  imgLink: any;
  posRes: any;
  branchRes: any;
  deptid: string;
  deptName: any;
  deptDescrip: any;
  posid: any;
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.submissionForm = this.formBuilder.group(     
      {
      //   fname: [''],
       logo: [''],
          email:[''],
          web_url:[''],
          short_name:[''],
          company_name:[''],
          address:[''],
          id:[''],
          contact_number:[''],
          app:[''],
          module:[''],
         
     },
   )
    this.Jarwis.general_setting().subscribe(
      data=>{
      this.setting = data;  
      this.company_name=this.setting.company_name
      this.short_name=this.setting.short_name
      this.address=this.setting.address
      this.contact_number=this.setting.contact_number
      this.email=this.setting.email
      this.web_url=this.setting.web_url
      this.app=this.setting.app
      this.module=this.setting.module
      this.submissionForm = this.formBuilder.group(
    
        {
          company_name:[this.company_name],
          short_name:[this.short_name],
          address:[this.address],
          contact_number:[this.contact_number],
          email:[this.email],
          web_url:[this.web_url],
          app:[this.app],
          module:[this.module],
         id:[this.setting.id],
         logo:[this.setting.logo]
        },
      )
      this.image=this.setting.logo
      })

      this.Jarwis.displayModule().subscribe(
        data=>{      
        this.moduleResponse = data;              
      })  

      this.Jarwis.showBranches().subscribe(
        data=>{
        this.branchResponse = data;      
        this.dept = this.branchResponse   
      })
  
      this.Jarwis.displayAllstaff().subscribe(
        data=>{      
        this.staffRes = data;        
        this.staff = this.staffRes
       
     
      })
  
      this.Jarwis. generalSettings().subscribe(
        data=>{
        this.setresponse = data;      
        this.imgLink = this.setresponse[0].app_url;
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
      console.log(form.value)
      // this.Jarwis.addCenter(form.value).subscribe(
      //   data => this.handleResponse(data),
      //   error => this.handleError(error), 
             
      // );
      
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
  

  
  uploadFile(event){
    let files =event.target.files[0];
    let reader = new FileReader();
    let vm = this;
    reader.onloadend =()=> {
      
      this.image = reader.result;
   
    }
    reader.readAsDataURL(files);
  }
  onSubmitsetting() {
    this.Jarwis.updateGeneralSet({formdata:this.submissionForm.value,image:this.image}).subscribe(
      data => this.handleResponsep(data),
     error => this.handleErrorp(error)
   );
   
  }
  handleErrorp(error) {
   
    this.error = error.error.errors;
    // console.log(error);
    
  }
  handleResponsep(data) {  
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })  
    this.ngOnInit()
  }
}
