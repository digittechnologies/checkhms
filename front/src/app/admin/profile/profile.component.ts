import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../../service/jarwis.service';
import { TokenService } from '../../service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";
import { MatSnackBar } from '@angular/material';

declare var $: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  disabled= false;
  sav= 'Update';
  
  public submissionForm: FormGroup;
  image: any;
  datas: { formdata: any; };
  error: any;
  res: any;
  resp: any;
  bran: any;
  allPos: any;
  pharmacist: any;
  cashier: any;
  physician: any;
  admin: any;
  card: any;
  uid: string;
  profile: any;
  department: any;
  role: any;
  branch: any;
  givenDept = 0;
  givenRole = 0;
  imgLink: any;
  roleID: any;
  IMG: any;
  sbranch: any;
  sResponse: any;
  ranks: any;
  teams: any;
  roles: any;
  centers: any;
  permitions: any;
  newPermite: any;
  permision:Array<{component_id:Number,read:String,write:String}>=[]
  newData:Array<{id:Number, component_name:String, description:String}>=[];
  id_number: any;
  firstname: any;
  gender: any;
  email: any;
  rankId: any;
  rankName: any;
  teamId: any;
  team_name: any;
  role_id: any;
  role_name: any;
  positionName: any;
  departmentName: any;
  centerName: any;
  centerId: any;
  description: any;
  lastname: any;
  teamName:any;
  constructor( 
     private http: HttpClient,
     public actRoute: ActivatedRoute, 
     private formBuilder: FormBuilder,
     private Token: TokenService, 
     private Jarwis: JarwisService,
     private router: Router,    
     public snackBar: MatSnackBar, 
    ) { }
  public response:any;
  public form ={
    emails:'',
    pass:''

  };
 
 ngOnInit() {
      
  this.actRoute.paramMap.subscribe((params => {
    let id = params.get('id');
    this.uid = id;
    this.Jarwis.staffdetails(id).subscribe(data=>{
      this.resp = data;
      this.response = this.resp.user[0];
      this.id_number = this.response.id_number
      this.firstname = this.response.firstname
      this.lastname = this.response.lastname
      this.gender   = this.response.gender
      this.email    = this.response.email
      this.rankId   = this.response.rankId
      this.rankName = this.response.rankName
      this.teamId   = this.response.teamId
      this.team_name = this.response.team_name
      this.role_id  = this.response.role_id
      this.role_name = this.response.role_name
      this.positionName = this.response.positionName
      this.departmentName = this.response.departmentName
      this.centerName     = this.response.centerName
      this.centerId    = this.response.center_id
      this.description = this.response.description
      this.teams = this.resp.teams;
      this.ranks = this.resp.ranks;
      this.roles = this.resp.roles
      this.permitions = this.resp.permitions
      this.centers = this.resp.centers
       this.newData = this.resp.newPermitios
       if(this.permitions){
         this.permitions.map(r=>{
          this.permision.push({component_id:r.component_id,read:r.read_status,write:r.write_status})
           let dele= this.newData.findIndex(i=>{return i.id===r.component_id})
           this.newData.splice(dele,1)
         })
       }
      console.log(this.permision)
      this.newPermite = this.newData
      this.IMG = this.response.image;
    })
  }));

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

    this.Jarwis.displayRole().subscribe(
      data=>{
      this.response = data;
      this.role = this.response
    })

    this.Jarwis.displayDepartments().subscribe(
      data=>{
      this.response = data;
      this.department = this.response
    })

    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;      
      this.branch = this.response
      })



   this.submissionForm = this.formBuilder.group(
     
     {
       firstname: [''],
      lastname: [''],
      middlename:[''],
      email:[''],
      family:[''],
      phone:[''],
      familybackground:[''],
      town:[''],
      gender:[''],
      address:[''],
      id:[''],
    },
  )
    // this.displayprofile()
  }
  check(id,data){
    let index = this.permision.find(i =>{
      return i.component_id === id;
    })
  if (index && data =='read') {
      if (index.read =="" || index.read ==null) {
        index.read=data
         }
          else{
            index.read = ""
        }
         }
        else if (index && data =='write') {
           if (index.write == "" || index.write ==null) {
            index.write = data;
           }
          else{
            index.write = ""
         }
       }
    else if(!index){
      if (data =='read') {
        this.permision.push({component_id:id,read:data,write:""})
      } else if(data =='write') {
        this.permision.push({component_id:id,read:"",write:data})
      }
}
console.log(this.permision)
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

onSubmit1() {
  this.disabled=true;
  this.sav= ' Updating';
  this.Jarwis.updateprofile({formdata:this.submissionForm.value,image:this.image}).subscribe(
    data => this.handleResponse(data),
   error => this.handleError(error)
 );
 
}

get(){
  this.Jarwis.displayRole().subscribe(
    data=>{
    this.response = data;
    this.role = this.response
  })

  this.Jarwis.displayDepartments().subscribe(
    data=>{
    this.response = data;
    this.department = this.response
  })

  this.Jarwis.displayBranch().subscribe(
    data=>{
    this.response = data;      
    this.branch = this.response
    })
}
onChange1(b){
  this.givenDept = b.target.value;

  this.Jarwis.displayStaffBranch(this.givenDept).subscribe(
    data=>{
    this.sResponse = data;      
    this.sbranch = this.sResponse
    })
}

onSelectRole(r){
  this.givenRole = r.target.value;
  this.get()
}

onSubmit(form: NgForm) {

  if (form.value.rank_id == '') {
    form.value.rank_id = this.rankId
  }
  if (form.value.team_id == '') {
    form.value.team_id = this.teamId
  }
  if (form.value.role_id == '') {
    form.value.role_id = this.role_id
  }
  if (form.value.branch_id == '') {
     form.value.branch_id =this.centerId
  }
  console.log(form.value)
  if(confirm('This will altered this user priviledges, click ok to processed')){
    form.value.id = this.uid
    this.Jarwis.editPriviledges({form:form.value,permites:this.permision}).subscribe(
      data => {this.handleResponse(data)
               this.router.navigateByUrl("/Admin/(side:all_staff)")
      },
      error => this.handleError(error),  
    );
  }
}
handleError(error) {
  this.disabled=false; 
  this.error = error.error.errors;
  this.disabled=false;
  this.sav= 'Update';
}
handleResponse(data) { 
  let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
    duration: 2000
  })
  this.router.navigateByUrl('/User/(side:Profile)');
  this.disabled=false;
  this.sav= 'Updated';

  this.ngOnInit()
}



handleResponse2(data) {   
  let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
    duration: 2000
  })   
  this.router.navigateByUrl('/Admin/(side:catacturer');
  this.ngOnInit();
  
}

handleError2(error) {
  this.error = error.error.errors;
  let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
    duration: 2000

  })
  
}

}
