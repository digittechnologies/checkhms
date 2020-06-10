import { Component, OnInit,HostListener  } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import {FormBuilder,Validator} from "@angular/forms"
// import { $ } from 'protractor';
declare var $:any;

declare var form_wizard: any;
declare var steps:any;
declare var mutil_list:any;

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-proccess-settings',
  templateUrl: './proccess-settings.component.html',
  styleUrls: ['./proccess-settings.component.css']
})
export class ProccessSettingsComponent implements OnInit {
  response: any;
  process_properties: any;
  disabled: Boolean = false;
  error: any;
  dept: any;
  processModules: any;
  processAttributes: any;
  processValues: any;
  values = [];
  value_id: any;
  result:any;
  testingform:any;
    value_type:any
    value_option:any
    normal_range:any
    unit:any
    sugestion:any
    comment:any
    form_res:any;
  


  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    private fb:FormBuilder
  ) { }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // console.log(event.keyCode);

    // if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
    //   this.value();
    // }

    // if (event.keyCode === KEY_CODE.LEFT_ARROW) {
    //   this.decrement();
    // }
  }
  ngOnInit() {
    new form_wizard();
    new steps();
    new mutil_list();

    this.Jarwis.displayProcessProperties().subscribe(
      data=>{
      this.response = data;      
      this.process_properties = this.response.props
    })

    this.Jarwis.displayProcessModules().subscribe(
      data=>{
      this.response = data;      
      this.processModules = this.response   
    })

    this.Jarwis.displayProcessAttributes().subscribe(
      data=>{
      this.response = data;      
      this.processAttributes = this.response   
    })

    this.Jarwis.displayProcessValues().subscribe(
      data=>{
      this.response = data;      
      this.processValues = this.response   
    })

    this.Jarwis.displayDepartments().subscribe(
      data=>{
      this.response = data;      
      this.dept = this.response   
    })
    // $("#sugestion").on("click",function(){
    //   console.log($(this).val())
    // })

    $("#valueSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#searchValues tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

  }

  onSaveProcessProp(form: NgForm) {
    this.disabled = true;
     this.Jarwis.addProcessProperties(form.value).subscribe(     
       data => this.handleResponse(data),
       error => this.handleError(error),            
     );    
   }

   onSaveProcessModule(form: NgForm) {
    this.disabled = true;
     this.Jarwis.addProcessModules(form.value).subscribe(     
       data => this.handleResponse(data),
       error => this.handleError(error),            
     );    
   }

   onSaveProcessAttribute(form: NgForm) {
    this.disabled = true;
     this.Jarwis.addProcessAttributes(form.value).subscribe(     
       data => this.handleResponse(data),
       error => this.handleError(error),            
     );    
   }

   onSaveProcessValue(form: NgForm) {
    this.disabled = true;
     this.Jarwis.addProcessValues(form.value).subscribe(     
       data => this.handleResponse(data),
       error => this.handleError(error),            
     );    
   }
  value(id){
    this.value_id = id;
   this.Jarwis.Value(id).subscribe(
     data=>{
       let response = data[0];
          this.value_type = response.value_type
          this.normal_range = response.normal_range
          this.unit= response.unit;
          this.comment = response.comment
          if (response.value_option) {
            let v_opt = JSON.parse(response.value_option)
            this.value_option =v_opt.join(',');
          }
          else{
            this.value_option=''
          }
           if (response.suggestion) {
            let sug = JSON.parse(response.suggestion)
            this.sugestion = sug.join() 
           }
           else{
            this.sugestion=''
           }
     }
   )
  }
   onSaveProcessValues(form:NgForm){
    var array = form.value.sugestion.split(',');
    form.value.sugestion= JSON.stringify(array);
    var array2 = form.value.value_option.split(',');
    form.value.value_option=JSON.stringify(array2);
    this.Jarwis.addValues({form:form.value,id:this.value_id}).subscribe(     
      data => this.handleResponse(data),
      error => {this.handleError(error)
      console.log(error)
      }, 

    );   
   }
   fetchForms(){
     this.Jarwis.fetchForm().subscribe(
       data=>{
         let res = data
         this.testingform = res
       }
     )
   }
   formValue(id){
     this.Jarwis.formvalue(id).subscribe(
       data=>{
       let reses = data;
       this.form_res = reses;
       }
     )
   }
  handleResponse(data) {
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })   
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

}
