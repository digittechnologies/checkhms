import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms'

declare var test3: any;
declare var test4: any;
@Component({
  selector: 'app-patient-process',
  templateUrl: './patient-process.component.html',
  styleUrls: ['./patient-process.component.css']
})
export class PatientProcessComponent implements OnInit {

  appId: string;
  patientResponse: any;
  pat: any;
  patID: any;
  Property:any;
  schemeCat: any;
  schemeId: any;
  branch:any
  disabled =false;
  schemePercent: any;
  schemePercentToView: number;
  schemePriceList: any;
  response: any;
  imgLink: any;
  testingform: any;
  datas: any;
  form_id: any;
  form_res: any;
  p: number = 1;
    // collection: any[];

  constructor(   private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,) { }

  ngOnInit() {

    new test3();
    new test4();
    this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
	    this.appId= id;
	    this.Jarwis.patientdetails(id).subscribe(
	      data=>{
	      this.patientResponse = data;      
        this.pat = this.patientResponse;
        this.patID = this.pat[0].id;
        this.schemeCat = this.pat[0].category_name;
        this.schemeId = this.pat[0].n_h_i_s;
        this.schemePercent = this.pat[0].pacentage_value;
        this.schemePercentToView = 100 -this.pat[0].pacentage_value;
        this.schemePriceList = this.pat[0].price_list_column;
	    })
  }))
  
  this.Jarwis. generalSettings().subscribe(
    data=>{
    this.response = data;      
    this.imgLink = this.response[0].app_url;
  })
  }
  onSubmit(form:NgForm){}



  // PROCESS START

  fetchForms(){
    this.Jarwis.fetchForm().subscribe(
      data=>{
        let res:any = data
        this.testingform = res.form;
        if(res.datas != ''){
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
        const data = Object.entries(form.value)
     this.Jarwis.submitProcessVals({form:data,process_value_tb_id: this.form_id}).subscribe(
       data=>{
       this.response = data;  
   })
 }
//  PROCESS END

}
