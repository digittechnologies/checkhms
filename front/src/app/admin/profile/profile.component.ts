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
  givenDept: any;
  givenRole: any;
  constructor( private http: HttpClient, public actRoute: ActivatedRoute, private formBuilder: FormBuilder,private Token: TokenService, private Jarwis: JarwisService,private router: Router,     public snackBar: MatSnackBar, 
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
      this.response=this.resp[0]
    })
  }));

  this.Jarwis.profile().subscribe(
    data=>{
    this.response = data;
    this.profile = this.response.det[0];
  })

  this.Jarwis.displayDepartments().subscribe(
      data=>{
      this.response = data;
      this.department = this.response
    })

    this.Jarwis.displayRole().subscribe(
      data=>{
      this.response = data;
      this.role = this.response
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
//   displayprofile(){
//  this.Jarwis.profile().subscribe(
//    data=>{
    
//    this.res = data;
//    this.response = this.res.aut;


//    this.submissionForm = this.formBuilder.group(
    
//     {
//       firstname: [this.response.firstname],
//       lastname: [this.response.lastname],
//       email:[this.response.email],
//   family:[this.response.family],
//   middlename:[this.response.middlename],
//   phone:[this.response.phone],
//   familybackground:[this.response.familybackground],
//   town:[this.response.town],
//   gender:[this.response.gender],
//   address:[this.response.address],
//   id:[this.response.id]
//     },
//   )
//    this.image=this.response.image

//  })
 
// }
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
  this.Jarwis.displayDepartments().subscribe(
    data=>{
    this.response = data;
    this.department = this.response
  })

  this.Jarwis.displayRole().subscribe(
    data=>{
    this.response = data;
    this.role = this.response
  })

  this.Jarwis.displayBranch().subscribe(
    data=>{
    this.response = data;      
    this.branch = this.response
    })
}
onChange1(b){
  this.givenDept = b.target.value;
}

onSelectRole(r){
  this.givenRole = r.target.value;
}

onSubmit(form: NgForm) {
  alert(form.value)
  // this.Jarwis.editPriviledges(form.value).subscribe(
  //   data => this.handleResponse(data),
  //   error => this.handleError(error),  
  // );
}
handleError(error) {
  this.disabled=false; 
  this.error = error.error.errors;
  console.log(this.error);
  this.disabled=false;
  this.sav= 'Update';
}
handleResponse(data) {  
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
