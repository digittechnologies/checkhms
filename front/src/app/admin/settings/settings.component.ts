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
  modules:any
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
  deptPesponse: Object;
  branches: any;
  depertm: Object;
  image_url: string;
  possitions: Object;
  added = [];
  addedPos = [];
  positionEditRes:any
  editingPossition:Boolean = false;
  message: any;
  addedCompToPos: any;
  newaddCompToPos:any
  newData:Array<{id:Number, component_name:String, description:String}>=[];
  editPosName: any;
  editPosdept: any;
  editPosdescription: any;
  editPosId: any;
  editPosStatus: any;
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
    this.image_url = this.Jarwis.imageUrl;
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
        this.branches = this.branchResponse   
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
         this.possitions = data;
  
        }
      )
      this.Jarwis.displayDepartments().subscribe(
        data=>{
        this.deptPesponse = data;      
        this.depertm = this.deptPesponse   
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
  

  //FOR BRANCHES
  onUpdateCenter(form: NgForm) {

  
    form.value.id=this.deptid
    //  console.log(form)
    this.Jarwis.EditBranch(form.value).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );  
  }
  
  onDelete(id: string) {
    if(confirm('This can\'t be revert after deleted')){
  
      this.Jarwis.suspendCenter(id).subscribe(  
          
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

    //FOR DEPARTMENTS    
   
    
      onSubmitDept(form: NgForm) {
       
        this.Jarwis.addDept(form.value).subscribe(
         
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
  

    //FOR POSSITION

    modulesPos(id){
      this.Jarwis.getmodules(id.target.value).subscribe(
        data=>{
          let res:any = data;
          this.modules = res;
        }
      )
     }

    
     onSubmitPos(form:NgForm){
       this.Jarwis.Addposition(form.value).subscribe(
         data=>{
           let response:any = data;
           console.log(data)
           if (response) {
             this.Jarwis.AddpositionModules({id:response,modules:this.added}).subscribe(
               data=>{
                 let resPos:any = data
                 this.message = resPos;
                 this.handleResponse(this.message.message)
               }
             )
             
           }
         }
       )
   
     }
     chek(data){
         let index = this.added.indexOf(data)
         if (index>=0) {
           this.added.splice(index,1)
         }else{
           this.added.push(data);
         }
         console.log(this.added)
     }

  
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
  oneditingPos(id){
    this.editingPossition = true;
    this.Jarwis.onEditPos(id).subscribe(
      data=>{
        this.positionEditRes = data;
        this.newData = this.positionEditRes.deptCom
        this.positionEditRes.positionCom.map(r=>{
          let dele=  this.newData.findIndex(i=>{return i.id===r.id})
          this.newData.splice(dele,1)
        })
        this.newaddCompToPos = this.newData
        this.editPosName = this.positionEditRes.position[0].position_name;
        this.editPosStatus = this.positionEditRes.position[0].status;
        this.editPosdept = this.positionEditRes.position[0].name;
        this.editPosdescription = this.positionEditRes.position[0].description;
        this.editPosId = this.positionEditRes.position[0].id;
        this.addedCompToPos = this.positionEditRes.positionCom;
      }
    )
  }
  onSubmitPosEdit(){
     this.Jarwis.updatePos({position_name:this.editPosName,description:this.editPosdescription,status:this.editPosStatus,id:this.editPosId}).subscribe(
       data=>{console.log(data)}
     )
  }
  Checkchanging(e){
       this.Jarwis.onPermit({id:this.editPosId,component_id:e}).subscribe(
         data=>{
           console.log(data)
         }
       )
   }
  closeEdit(){
    this.editingPossition = false;

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
  AddNew(){
    this.editingPossition = false;
  }
}
