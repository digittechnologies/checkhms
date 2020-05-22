import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { RecordJarwisService } from 'src/app/service/record-jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  public submissionForm: FormGroup;

  // public form = {
  //   customer: null,
    
  // };
  control = new FormControl();
  response: Object;
  bran: any;
  error: any;
  pat: any;
  department: any;
  appontId: any;
  imgLink: any;
  disabled:boolean;
  p: any;
  name: any;
  route: any;
  spin: string;
  searchResponse: any;
  patient: any;
  show: any;
  pAppointment: any;
  eName: any;
  eOthername: any;
  eGender: any;
  eMobile_number: any;
  eAddress: any;
  eCity: any;
  eState: any;
  eCountry: any;
  eD_o_b: any;
  eCard_number: any;
  eStatus: any;
  eType: any;
  eOccupation: any;
  eMarital_status: any;
  eReligion: any;
  eNext_of_kin_name: any;
  eKin_relationship: any;
  eNext_of_kin_mobile: any;
  eNext_of_kin_address: any;
  eX_ray_number: any;
  eReferral_name: any;
  eReferral_address: any;
  eReferral_mobile: any;
  eEmail: any;
  image: string | ArrayBuffer;
  ePatient_image: any;
  eId: any;
  count: any;
  patientAll: any;
  showPatient = false;
  eAge: any;
  category: any;

  //EPS
  epsId: any;
  epsName: any;
  epsEmail: any;
  epsContact: any;
  epsAddress: any;
  epsStatus: any;
  responseRec: any;
  center: any;
  appointment_ty: any;
  givenDept: any;
  sResponse: any;
  sbranch: any;
  appt: any;
  braches: any;
  givenBranch: any;
  role:any;
  rolId: any;
  ini_cate_id: any;
  ini_cate_name: any;
  change_cate: any;
  cate_id: any;
  count1: any;
  count3: any;
  pdob: any;
  patient_age: any;
  centerName: any;
  countBooked: any;

  constructor( 
    private Jarwis: JarwisService,
    private JarwisRecord: RecordJarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder, 
  ) { }

  ngOnInit() {

     //onkeyUp search
      $("#patient_data").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("table tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
 this.Jarwis.profile().subscribe(
   data=>{
     this.role=data;
     this.rolId = this.role.aut.role_id
   }
 )

    this.Jarwis.displayCustomer().subscribe(
      data=>{
      this.response = data;      
      this.pat = this.response  
      
    //   this.name = this.pat.next_page_url.snapshot.queryParamMap.get("paramName")
    //   this.route.queryParamMap.subscribe(queryParams => {
    //     this.name = queryParams.get("paramName")
    //   })
    //   alert(this.name)
    })

    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayDepartments().subscribe(
      data=>{
      this.response = data;
      this.department = this.response        
    })

    this.JarwisRecord.displayUser().subscribe( 
      data=>{
      this.responseRec = data;
      this.center = this.responseRec.branch[0]; 
      this.centerName = this.center.name;
      this.appointment_ty = this.responseRec.appointment_type; 
      this.braches = this.responseRec.branches; 
    })
  }
  onChange1(b){
    this.givenDept = b.target.value; 
    this.Jarwis.displayAppointmentBranch({branch:this.givenBranch, dept:this.givenDept}).subscribe(
      data=>{
      this.sResponse = data;      
      this.sbranch = this.sResponse.branch
      this.appt = this.sResponse.appt
      })
  
  }

  onChange2(bch){
    this.givenBranch = bch.target.value;
    this.Jarwis.displayAppointmentBranch({branch:this.givenBranch, dept:this.givenDept}).subscribe(
      data=>{
      this.sResponse = data;      
      this.sbranch = this.sResponse.branch
      this.appt = this.sResponse.appt
      })
  
  }


  onSubmitApp(form: NgForm) {
    this.disabled = true;
    form.value.customer_id = this.eId;
     this.Jarwis.makeAppointment(form.value).subscribe(
       data => this.handleResponse(data),
       error => this.handleError(error)
    );
    
   }

   onSubmitBookApp(form: NgForm) {
    this.disabled = true;
    form.value.customer_id = this.eId;
     this.Jarwis.bookAppointment(form.value).subscribe(
       data => this.handleResponse(data),
       error => this.handleError(error)
    );
    
   }

  appointment(id){

   this.appontId = id;
    
  }

  onClickSubmit(form: NgForm) {

    this.patient_age = '';
    this.disabled = true; 

    if(form.value.customer == '' || form.value.action == ''){
      alert('Serch Box Parameters Empty')
      this.disabled = false
    }
    else if(form.value.customer != '' || form.value.action != ''){        
        this.Jarwis.searchPatient(form.value).subscribe(data=>{
        this.spin="disable";
        this.disabled= false;
        this.searchResponse = data;
        this.show= this.searchResponse.show;
        this.patient = this.searchResponse.search[0]; 
        this.patientAll = this.searchResponse.search; 
        this.pAppointment = this.searchResponse.app;
        this.count = this.searchResponse.count;
        this.count1 = this.searchResponse.count1;
        this.countBooked = this.searchResponse.countBooked;
        this.count3 = this.searchResponse.count3;
        this.category = this.searchResponse.category;
        this.ini_cate_id = this.patient.cust_category_id;
        this.ini_cate_name = this.patient.cate_name;
        this.change_cate  = this.searchResponse.cate;
        // this.pdob = this.patient.d_o_b;
        // let dobIndex = this.pdob.indexOf("-");
        // let getYear = this.pdob.slice(0, dobIndex)
        // this.patient_age = new Date().getFullYear() - getYear;

          this.eId = this.patient.id;
          this.eName = this.patient.name;  
          this.eOthername = this.patient.othername; 
          this.eGender = this.patient.gender;
          this.eMobile_number  = this.patient.mobile_number;
          this.eAddress = this.patient.address; 
          this.eCity = this.patient.city; 
          this.eState = this.patient.state; 
          this.eCountry = this.patient.country; 
          this.eD_o_b = this.patient.d_o_b;
          this.eCard_number = this.patient.card_number;
          this.eStatus = this.patient.status;
          this.eType = this.patient.type;
          this.eOccupation = this.patient.occupation;
          this.eMarital_status = this.patient.marital_status;
          this.eReligion = this.patient.religion;
          this.eNext_of_kin_name = this.patient.next_of_kin_name;
          this.eKin_relationship = this.patient.kin_relationship;
          this.eNext_of_kin_mobile = this.patient.next_of_kin_mobile;
          this.eNext_of_kin_address = this.patient.next_of_kin_address;
          this.eX_ray_number = this.patient.x_ray_number;
          this.eReferral_name = this.patient.referral_name;
          this.eReferral_address = this.patient.referral_address;
          this.eReferral_mobile = this.patient.referral_mobile;
          this.ePatient_image = this.patient.patient_image;
          this.eAge =  this.patient.age;
          this.cate_id = this.ini_cate_id;

          this.submissionForm = this.formBuilder.group(
            {
              cust_category_id:[this.cate_id],
              name:[this.eName],
              othername:[this.eOthername],
              email:[this.eEmail],
              card_number:[this.eCard_number],
              mobile_number:[this.eMobile_number],
              state:[ this.eState],
              city:[this.eCity],
              gender:[this.eGender],
              address:[this.eAddress],
              id:[this.eId],
              d_o_b:[this.eD_o_b],
              country:[this.eCountry],
              // n_h_i_s:[this.pat[0].n_h_i_s],
              age:[this.eAge],
              type:[ this.eType],
              occupation:[this.eOccupation],
              marital_status:[this.eMarital_status],
              status:[this.eStatus],
              religion:[this.eReligion],
              next_of_kin_name:[this.eNext_of_kin_name],
              kin_relationship:[this.eKin_relationship],
              next_of_kin_mobile:[this.eNext_of_kin_mobile],
              next_of_kin_address:[this.eNext_of_kin_address],
              referral_name:[this.eReferral_name],
              referral_address:[this.eReferral_address],
              referral_mobile:[this.eReferral_mobile],
            },
          )
          this.image=this.ePatient_image
      })   
     }
  }

 view(id){
    for(let i in this.patientAll){
        if(this.patientAll[i].id == id){
          this.patient = '';
          this.patient = this.patientAll[i];
          this.show = 'show';
          this.count = 1;
          this.eId = this.patient.id;
          this.eName = this.patient.name;  
          this.eOthername = this.patient.othername; 
          this.eGender = this.patient.gender;
          this.eMobile_number  = this.patient.mobile_number;
          this.eAddress = this.patient.address; 
          this.eCity = this.patient.city; 
          this.eState = this.patient.state; 
          this.eCountry = this.patient.country; 
          this.eD_o_b = this.patient.d_o_b;
          this.eCard_number = this.patient.card_number;
          this.eStatus = this.patient.status;
          this.eType = this.patient.type;
          this.eOccupation = this.patient.occupation;
          this.eMarital_status = this.patient.marital_status;
          this.eReligion = this.patient.religion;
          this.eNext_of_kin_name = this.patient.next_of_kin_name;
          this.eKin_relationship = this.patient.kin_relationship;
          this.eNext_of_kin_mobile = this.patient.next_of_kin_mobile;
          this.eNext_of_kin_address = this.patient.next_of_kin_address;
          this.eX_ray_number = this.patient.x_ray_number;
          this.eReferral_name = this.patient.referral_name;
          this.eReferral_address = this.patient.referral_address;
          this.eReferral_mobile = this.patient.referral_mobile;
          this.ePatient_image = this.patient.patient_image;
          this.eAge =  this.patient.age;

          this.submissionForm = this.formBuilder.group(
            {
              name:[this.eName],
              othername:[this.eOthername],
              email:[this.eEmail],
              card_number:[this.eCard_number],
              mobile_number:[this.eMobile_number],
              state:[ this.eState],
              city:[this.eCity],
              gender:[this.eGender],
              address:[this.eAddress],
              id:[this.eId],
              d_o_b:[this.eD_o_b],
              country:[this.eCountry],
              // n_h_i_s:[this.pat[0].n_h_i_s],
              age:[this.eAge],
              type:[ this.eType],
              occupation:[this.eOccupation],
              marital_status:[this.eMarital_status],
              status:[this.eStatus],
              religion:[this.eReligion],
              next_of_kin_name:[this.eNext_of_kin_name],
              kin_relationship:[this.eKin_relationship],
              next_of_kin_mobile:[this.eNext_of_kin_mobile],
              next_of_kin_address:[this.eNext_of_kin_address],
              referral_name:[this.eReferral_name],
              referral_address:[this.eReferral_address],
              referral_mobile:[this.eReferral_mobile],
            },
          )
          this.image=this.ePatient_image
          this.showPatient = true;
        }
    }
 }

  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addCustomer(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error),   
           
    );
    
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
  onSubmitprofile() {
    this.Jarwis.updateCustomer({formdata:this.submissionForm.value,image:this.image}).subscribe(
      data => this.handleResponse(data),
    error => this.handleError(error)
  );
  }
  handleResponse(data) {    // 
    this.disabled = false;
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:patient)');
    this.ngOnInit();
    
  }

  handleError(error) {
    this.disabled = false;
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open("Operation failed. Try again", 'Dismiss', {
      duration: 2000

    })
    
  }

}
