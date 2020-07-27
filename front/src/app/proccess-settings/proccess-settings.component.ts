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
  form_id: any;
  propertyName: any;
  attributeName: any;
  attributeDesc: any;
  process_valueName: any;
  process_valueDesc: any;
  propResponse: any;
  attResponse: any;
  proValResponse: any;
  propId: any;
  attId: any;
  proValId: any;
  datas:any;
  value_options: any;
  options: any;
  


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
    $("#propertiesSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#searchproperties tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
    $("#atributtesSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#searchattribute tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }
  closeMo(data){
    $('#Pulse').modal('hide'); 
    $('#AddProperty').modal('hide');
         $('#EditProperty').modal('hide');
         $('#AddAttr').modal('hide');
         $('#EditAttribute').modal('hide');
         $('#AddValue').modal('hide');  
         $('#EditProcessValue').modal('hide');
         this.handleResponse(data)   
 }
  onSaveProcessProp(form: NgForm) {
    this.disabled = true;
     this.Jarwis.addProcessProperties(form.value).subscribe(     
       data => {
         let res:any = data
         this.closeMo(res.message)         
       },
       error => this.handleError(error),   
     );    
   }


   onSaveProcessAttribute(form: NgForm) {
    this.disabled = true;
     this.Jarwis.addProcessAttributes(form.value).subscribe(     
       data => {   
          let res:any = data
         this.closeMo(res.message)},
       error => this.handleError(error),            
     );    
   }

   onSaveProcessValue(form: NgForm) {
    this.disabled = true;
     this.Jarwis.addProcessValues(form.value).subscribe(     
       data =>{   
        let res:any = data
       this.closeMo(res.message)},
       error => this.handleError(error),            
     );    
   }

   editProperty(id){
    this.Jarwis.editProperty(id).subscribe(
      data=>{
      this.propResponse = data;  
      this.propId = id;    
      this.propertyName = this.propResponse[0].property 
    })
   }  

   editAttribute(id){
    this.Jarwis.editAttribute(id).subscribe(
      data=>{
      this.attResponse = data;      
      this.attId = id;
      this.attributeName = this.attResponse[0].attribute   
      this.attributeDesc = this.attResponse[0].description   
    })
  }

  editProcessValue(id){
    this.Jarwis.editProcessValue(id).subscribe(
      data=>{
      this.proValResponse = data;  
      this.proValId = id;    
      this.process_valueName = this.proValResponse[0].value   
      this.process_valueDesc = this.proValResponse[0].description   
    })
  }

  onEditProperty(form:NgForm) {
    form.value.id = this.propId
    this.Jarwis.updateProperty(form.value).subscribe(        
      data => this.handleResponse(data),
      error => this.handleError(error), 
    );
  }

  onEditAttribute(form:NgForm) {
    form.value.id = this.attId
    this.Jarwis.updateAttribute(form.value).subscribe(        
      data =>{
        let res:any = data
        this.closeMo(res.message)
      },
      error => this.handleError(error), 
    );
  }

  onEditProcessValue(form:NgForm) {
    form.value.id = this.proValId
    this.Jarwis.updateProcessValue(form.value).subscribe(        
  data => {
    let res:any = data
    this.closeMo(res.message)
  }
    ,
      error => this.handleError(error), 
    );
  }

  onDeleteProp(id: string) {
    if(confirm('This can\'t be revert after deleted')){
      this.Jarwis.deleteProp(id).subscribe(     
      data => {
        
      },
        error => this.handleError(error), 
      );
    }
  }

  onDeleteAttr(id: string) {
    if(confirm('This can\'t be revert after deleted')){
      this.Jarwis.deleteAttr(id).subscribe(     
        data => this.handleResponse(data),
        error => this.handleError(error), 
      );
    }
  }

  onDeletePropVal(id: string) {
    if(confirm('This can\'t be revert after deleted')){
      this.Jarwis.deletePropVal(id).subscribe(     
        data => this.handleResponse(data),
        error => this.handleError(error), 
      );
    }
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
          if (response.value_option!=null || response.value_option!="") {
            this.value_option = JSON.parse(response.value_option)
          }else{response.value_option=""}
          if (response.value_options != null || response.value_options != "") {
            this.value_options = JSON.parse(response.value_options)
          }else{response.value_options=""}
           if (response.suggestion != null || response.suggestion != "") {
            this.sugestion= JSON.parse(response.suggestion)
           }else{response.suggestion=""}
           if (response.options !=null || response.options !="") {
            this.options = JSON.parse(response.options)
           }else{response.suggestion=""}
     }
   )
  }
   onSaveProcessValues(form:NgForm){
     console.log(form.value)
    if(form.value.sugestion){
      var array = [form.value.sugestion]
      form.value.sugestion= JSON.stringify(array);
    }
   if(form.value.value_option){
     var array2 = [form.value.value_option]
     form.value.value_option=JSON.stringify(array2);
   }
   if(form.value.options){
     var array3 = [form.value.options];
     form.value.options=JSON.stringify(array3);
   }
   if(form.value.value_options){
     var array4 = [form.value.value_options]
     form.value.value_options=JSON.stringify(array4);
   }
    this.Jarwis.addValues({form:form.value,id:this.value_id}).subscribe(     
      data => {
        let res:any = data
        this.closeMo(res.message)
      },
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
   onSaveTestingProcessValue(form:NgForm){
     console.log(form.value)
         const data = Object.entries(form.value)
         console.log(data)
    //   this.Jarwis.submitProcessVals({form:data,process_value_tb_id: this.form_id}).subscribe(
    //     data=>{
    //     this.response = data;  
    // })
  }
  
  handleResponse(data) {
    let snackBarRef = this.snackBar.open(data, 'Dismiss', {
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
