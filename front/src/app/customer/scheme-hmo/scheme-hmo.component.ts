import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { RecordJarwisService } from 'src/app/service/record-jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scheme-hmo',
  templateUrl: './scheme-hmo.component.html',
  styleUrls: ['./scheme-hmo.component.css']
})
export class SchemeHmoComponent implements OnInit {
  response: any;
  chemes: any;
  hmoses: any;
  editscheme_id:any
  edithmo_no:any
  edithmo_name:any
  editabout_hmo:any
  edithmo_address:any
  edithmo_email:any
  edithmo_contact:any
  editprice_list_status:any
  editdiscount_1:any
  editdiscount_2:any
  editdiscount_3:any
  hmo_address: any;
  hmo_email: any;
  hmo_contact: any;
  edit_id: any;
  disabled: boolean;
  error: any;
  priceResponse: any;
  price_list: any;

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
    this.Jarwis.displaySchemes().subscribe(
      data=>{
        this.response = data;
        this.chemes =this.response.schemes;
        this.hmoses = this.response.hmos
        console.log(this.hmoses)
  }
)
this.Jarwis.displayPricelist().subscribe(
  data=>{
    this.priceResponse = data;
    this.price_list =this.priceResponse.price_list;
  }
)
}
  onSubmitHmo(form:NgForm){
    this.Jarwis.addHmo(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }
  onedit(id){
this.Jarwis.onEditHmo(id).subscribe(
  data=>{
    let res:any = data;
    this.edithmo_no = res.hmos.hmo_no;
    console
    this.edithmo_name = res.hmos[0].hmo_name;
    this.edithmo_email = res.hmos[0].hmo_email;
    this.edithmo_contact = res.hmos[0].hmo_contact;
    this.edithmo_address = res.hmos[0].hmo_address;
    this.editabout_hmo =res.hmos[0].about_hmo;
    this.editdiscount_1 =res.hmos[0].discount_1;
    this.editdiscount_2 =res.hmos[0].discount_2;
    this.editdiscount_3 =res.hmos[0].discount_3;
    this.editprice_list_status = res.hmos[0].price_list_status
    this.editscheme_id = res.hmos[0].scheme_name;
    this.edithmo_no =res.hmos[0].hmo_no;
    this.hmo_address = res.hmos[0].hmo_address
    this.hmo_email = res.hmos[0].hmo_email
    this.hmo_contact = res.hmos[0].hmo_contact
    this.edit_id = res.hmos[0].id
  }
)
  }
  editHmo(form:NgForm){
   this.Jarwis.editingHmo({form:form.value,id:this.edit_id}).subscribe(
     data=>{
       console.log(data)
     }
   )
  }
ondelete(id){
  this.Jarwis.ondeleteHmo(id).subscribe(
    data=>{
      console.log(data)
    }
  )
}


handleResponse(data) {    // 
this.disabled = false;
let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
  duration: 2000
})   
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
