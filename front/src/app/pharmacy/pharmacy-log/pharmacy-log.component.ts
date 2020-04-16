import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-pharmacy-log',
  templateUrl: './pharmacy-log.component.html',
  styleUrls: ['./pharmacy-log.component.css']
})
export class PharmacyLogComponent implements OnInit {
  public form = {
    customer: null,
    
  };
 public dat;
  control = new FormControl();
  filteredStreets: Observable<string[]>;
  response: any;
  log: any;
  logs:any;
  bran: any;
  error: any;
  pat: any;
  department: any;
  appontId: any;
  slog: any;
  newArr = [];
  search: any;
  logUser: any;
  imgLink: any; 
  spin: string;
  disabled = false;
  logEmpty = false;
  // disabled = false;
  delete_id;
  check="";
  endAppoit_id;
  endAppoit_vouccher;
  res:any;
  role:any
  dept:any;
  filres:any;
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.Jarwis.profile().subscribe(
      data=>{
        this.res = data;
        this.role= this.res.det[0].role_id
        this.dept = this.res.det[0].dept_id;
        console.log(this.res)
    })
    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayDeptAppointment().subscribe(
      data=>{
      this.response = data; 
      console.log(this.response)     
      this.logs= this.response; 
      this.log=this.logs;
      console.log(this.log)
     if(this.log.length <= 0){
       this.logEmpty = true;
     }
    })
    // Start Autocomplete
    this.Jarwis.displayCustomer().subscribe(
      data=>{
      this.response = data;      
      this.slog = this.response;
      
      let y:any = data;
      for(let x=0; x<y.length; x++){
        let z = data[x].card_number;
        let w = data[x].mobile_number;
        if(!this.newArr.includes(z) || !this.newArr.includes(w)){
          this.newArr.push(z);
          this.newArr.push(w);
        };
      }
    })
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
      
    );
    // this.get()
  }
  filt(){
    let f =this.form.customer
    this.filres="";
    var index = this.log.filter(function(card) {
      return card.customer_id == f;
    });
    this.log=index;
    if (index=='') {
      this.log=this.logs;
      this.filres="No appointment for this patient";
    }
    console.log(this.log)
        
      }
  // get(){
  //   console.log(this.dat)
  // }
  cancle(id){
    this.check="cancel"
    this.delete_id = id;
      }
  del(){
    // console.log(this.delete_id)
    this.Jarwis.cancel_pharm_log(this.delete_id).subscribe(data=>{
      this.handleRespons(data);
      this.Jarwis.displayDeptAppointment().subscribe(
        data=>{
        this.response = data;      
        this.log = this.response; 
      })
    
    },
      err=>{this.handleError(err)}
      )
      }
      end(id,voucher){
        console.log(id,voucher);
        // this.check="end";
        this.endAppoit_id=id;
        this.endAppoit_vouccher=voucher;
      }
      endAppointment(){
        this.Jarwis.endappointment({id:this.endAppoit_id,voucher:this.endAppoit_vouccher}).subscribe(data=>{
          this.handleRespons(data);
          console.log(data)
          this.Jarwis.displayDeptAppointment().subscribe(
            data=>{
            this.response = data;      
            this.log = this.response; 
          })
        
        },
          err=>{this.handleError(err)}
          )
      }
      endAppointments(){
        this.Jarwis.endappointments().subscribe(
          data=>{
          this.handleRespons(data);
          this.Jarwis.displayDeptAppointment().subscribe(
            data=>{
            this.response = data;      
            this.log = this.response; 
          })
        
        },
          err=>{this.handleError(err)}
        )
      }
  streets: string[] = this.newArr ;
  private _filter(value: string): string[] {
    // console.log(this.newArr)
    
    // console.log(Array.isArray(this.streets));
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
// End Autocomplete
  appointment(id){
    this.appontId = id.target.value;
    this.form.customer=this.appontId
    console.log(this.appontId)
   // console.log(id);
     
   }
 
  //  onSubmitApp(form: NgForm) {
  //   this.disabled = true;
  //    this.Jarwis.makeAppointment({aid:this.appontId, form:form.value }).subscribe(
  //      data => this.handleResponse(data),
  //        error => this.handleError(error)
  //   );
    
  //  }

  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addCustomer(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),     
    );
     this.Jarwis.displayDepartments().subscribe(
      data=>{
      // console.log(data);   
      this.response = data;
      this.department = this.response
     
   
    })


    
  }

  handleResponse(data) {    // 
    this.disabled = false;
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:pharmacy_log)');
    this.ngOnInit();
    
  }


  handleError(error) {
    this.disabled = false;
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open("This patient is already appointed", 'Dismiss', {
      duration: 2000

    })
  }

  onClickSubmit() {
    this.spin="disable";
    this.disabled = true;
    console.log(this.form.customer)
    if(this.form.customer == null){ 
      alert('Serch Box Empty')
    }else{
          this.Jarwis.makeAppointment(this.form).subscribe(
            data => this.handleRespons(data),
              error => this.handleErro(error)
         );
    }
  }  
  handleRespons(data) {
    this.disabled = false;
    this.spin="";    
    // 
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:pharmacy_log)');
    this.ngOnInit();
    
  }

  handleErro(error) {
    this.disabled = false;
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open("This patient is already appointed", 'Dismiss', {
      duration: 2000

    })
    
  }

  getInput(i){
    this.logUser = i.target.value
  }
}
