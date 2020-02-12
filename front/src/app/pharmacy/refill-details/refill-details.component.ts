import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-refill-details',
  templateUrl: './refill-details.component.html',
  styleUrls: ['./refill-details.component.css']
})
export class RefillDetailsComponent implements OnInit {

  response: any;
  total: any;
  error: any;
  itemDet: any;
  pres: any;
  pat: any;
  patID: any;
  int = parseInt;
  voucherId: any;
  refillAmt = 1;

  constructor( 
    private http: HttpClient,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
	    this.patID = id;
	    this.Jarwis.displayRefillPrescriptions(id, '').subscribe(
	      data=>{
	      this.response = data;      
        this.pat = this.response;
        this.voucherId = this.pat[0].voucher_id
	    })
	}))

    this.Jarwis.disItemDet().subscribe(
      data=>{
      this.response = data;      
      this.itemDet = this.response       
    })
  }

  getRefill(r){
    if(r.target.value > 1){
      this.refillAmt = r.target.value;
    }
  }

  onRefill(id) {
    // this.Jarwis.refillInStock(id.target.value, '').subscribe(  
    //   data=>{
    //     this.response = data;
    //     this.total =this.response;
    //   }
    // );
    // alert(this.refillAmt)
    // alert(id)
    // return
    // let form: NgForm
    // form.value.id = id
    // form.value.refill = this.refillAmt
    // console.log(form.value)
    // return
    this.Jarwis.saveRefill({refill:this.refillAmt, id: id, voucher: this.voucherId}).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
    this.refillAmt = 1;
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })   
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }
}
