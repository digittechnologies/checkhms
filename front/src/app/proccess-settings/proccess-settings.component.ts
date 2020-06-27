import { Component, OnInit,HostListener  } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import {FormBuilder,Validator} from "@angular/forms"
import { JsonPipe } from '@angular/common';
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
    filteredStreets:any;
  value_options: any;
  options: any;
  form_id: any;
  datas: any;
  property_res: any;
  propertyId: any;
  propertyName: any;
  attribute_res: any;
  attributeId: any;
  attributeName: any;
  process_value_res: any;
  process_valueId: any;
  process_valueName: any;
  attributeDesc: any;
  process_valueDesc: any;
  


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
    console.log(form.value)
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
          this.value_option  = response.value_option
          if (response.options) {
            let vp = JSON.parse(response.options)
            this.options = vp.join() 
           }
           else{
            this.options=''
           }
          
          if (response.value_options) {
            let vp = JSON.parse(response.value_options)
            this.value_options = vp.join() 
           }
           else{
            this.value_options=''
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
  parse(e){
   this.filteredStreets = JSON.parse(e)
  }
   onSaveProcessValues(form:NgForm){
     console.log(form.value)
     if(form.value.sugestion){
      var array = form.value.sugestion.split(',');
      form.value.sugestion= JSON.stringify(array);
     }
     if(form.value.value_options){
      var array2 = form.value.value_options.split(',');
      form.value.value_options= JSON.stringify(array2);
    }
    if(form.value.options){
      var array3 = form.value.options.split(',');
      form.value.options= JSON.stringify(array3);
    }
    this.Jarwis.addValues({form:form.value,id:this.value_id}).subscribe(     
      data => this.handleResponse(data),
      error => {this.handleError(error)
      console.log(error)
      }, 

    );   
   }
   editProperty(id: string) {
    this.Jarwis.editProperty(id).subscribe(
      data=>{      
        this.property_res = data; 
        this.propertyId= id
        this.propertyName= this.property_res[0].property;
      })
  }
  editAttribute(id: string) {
    this.Jarwis.editAttribute(id).subscribe(
      data=>{      
        this.attribute_res = data; 
        this.attributeId= id
        this.attributeName= this.attribute_res[0].attribute;
        this.attributeDesc = this.attribute_res[0].description; 
      })
  }
  editProcessValue(id: string) {
    this.Jarwis.editProcessValue(id).subscribe(
      data=>{      
        this.process_value_res = data; 
        this.process_valueId= id
        this.process_valueName= this.process_value_res[0].value;
        this.process_valueDesc = this.process_value_res[0].description;
      })
  }

  onEditProperty(form: NgForm){
    this.disabled = true;
    form.value.id=this.propertyId
    this.Jarwis.updateProperty(form.value).subscribe(        
      data => this.handleResponse(data),
      error => this.handleError(error),  
    ); 
  }
  onEditAttribute(form: NgForm){
    this.disabled = true;
    form.value.id=this.attributeId
    this.Jarwis.updateAttribute(form.value).subscribe(        
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );   
  }
  onEditProcessValue(form: NgForm){
    this.disabled = true;
    form.value.id=this.process_valueId
    this.Jarwis.updateProcessValue(form.value).subscribe(        
      data => this.handleResponse(data),
      error => this.handleError(error),  
    ); 
  }

   fetchForms(){
     this.Jarwis.fetchForm().subscribe(
       data=>{
         let res:any = data
         this.testingform = res.form;
          let dt:any = res.datas[1];
          if (dt.value_option) {
            let vp = JSON.parse(dt.value_option)
            dt.value_option = vp
          }
          else{
            dt.value_option=''
          }
          console.log(dt)
         this.datas = dt;
         console.log(this.datas.value_option)
       }
     )
   }
   formValue(id){
     this.form_id =  id;
     this.Jarwis.formvalue(id).subscribe(
       data=>{
       let reses:any = data;
       for (let index = 0; index < reses.length; index++) {
         console.log(reses[index].value_options)
        if (reses[index].value_options) {
          let vp = JSON.parse(reses[index].value_options)
          reses[index].value_options= vp 
         }
         else{
          reses[index].value_options=''
         }
         if (reses[index].suggestion) {
          let vp = JSON.parse(reses[index].suggestion)
          reses[index].suggestion = vp
         }
         else{
          reses[index].suggestion=''
         }
         if (reses[index].options) {
          let vp = JSON.parse(reses[index].options)
          reses[index].options = vp
         }
         else{
          reses[index].options=''
         }
         
       }
       
       console.log(reses)
       this.form_res = reses;
       }
     )
   }
   onSaveTestingProcessValue(form:NgForm){
      //  event.preventDefault();
      // const data = form.value.toString()
      // form.value.process_value_tb_id = this.form_id
         const data = Object.entries(form.value)
        //  const dt = JSON.stringify(data)
      //   const formData = form.value;
      // const data = [...formData.entries()];
      // console.log(dt);
      this.Jarwis.submitProcessVals({form:data,process_value_tb_id: this.form_id}).subscribe(
        data=>{
        this.response = data;  
    })
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
