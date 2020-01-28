import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  response: any;
  total: any;
  error: any;
  itemDet: any;
  prescriptions: any;
  pat: any;
  patID: any;
  duration: any;
  instruct: any;
  getInst: any;
  quantity: any;
  amt: any;
  sup: any;
  days: any;
  count: any;
  defaultCount = 1;
  math = Math;
  useFor: any;
  quant: any;
  tQuantity: any;


  constructor(
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
	    this.Jarwis.patientdetails(id).subscribe(
	      data=>{
	      this.response = data;      
	      this.pat = this.response;
	    })
	}))

    this.Jarwis.disItemDet().subscribe(
      data=>{
      this.response = data;      
      this.itemDet = this.response       
    })

    this.Jarwis.displayInstruction().subscribe(
      data=>{
      this.response = data;      
      this.instruct = this.response       
    })

    this.Jarwis.displayPharmPre(this.patID, '').subscribe(
      data=>{
      this.response = data;      
      this.prescriptions = this.response   
    })
  }

  get(){
    this.ngOnInit()
  }
  onSelectItem(id) {
    this.Jarwis.voucherAllStock(id.target.value,'').subscribe(  
      data=>{
        this.response = data;
        this.total =this.response;
        this.getInst = this.total[0].type_id;
        this.Jarwis.displayDurationForV(this.getInst).subscribe(
          data=>{
          this.response = data;      
          this.duration = this.response       
        })
      }
    );
  }

  onSelectAmount(a){
    this.amt = a.target.value
  }
  onSelectDailySup(s){
    this.sup = s.target.value
  }

  putQty(d){
    if(this.getInst == '6'){
      this.days = d.target.value
      this.tQuantity = this.amt * this.sup * this.days
      this.quantity =  this.amt * this.sup * this.days
      if(this.quantity > this.total[0].total_remain){
        alert('Quantity greater than quantity in stock')
        d.target.value = ''
        this.quantity = ''
        this.tQuantity = ''
        this.days = ''
      }
      this.useFor = this.days
    }
  }

  onRefill(r){
    if(this.getInst == '6'){
      if(r.target.value > 0){
        this.count = parseInt(r.target.value) 
        this.quantity = this.amt * this.sup * this.days / this.count
        this.useFor = parseInt(this.days) / parseInt(this.count)
      }else{
        this.quantity = this.amt * this.sup * this.days / this.defaultCount
        this.useFor = this.days
      }
    }
  }

  apartTablet(n){
    this.quant = n.target.value
  }

  onSubmitAdd(form: NgForm) {
    form.value.customer_id=this.patID
    form.value.quantity = this.quantity
    form.value.original_qty = this.tQuantity
    form.value.days = this.useFor
    this.Jarwis.pharmPriscription(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:catacturer');
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }
}
