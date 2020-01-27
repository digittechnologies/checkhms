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
  patientResponse: any;
  PharmPreresponse: any;
  ItemDetresponse: any;
  Instructionresponse: any;
  AllStockresponse: any;
  DurationForVresponse: Object;

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
	      this.patientResponse = data;      
	      this.pat = this.patientResponse;
	    })
  }))
  
  this.Jarwis.displayPharmPre(this.patID).subscribe(
    data=>{
    this.PharmPreresponse = data;      
    this.prescriptions = this.PharmPreresponse;  
  })

    this.Jarwis.disItemDet().subscribe(
      data=>{
      this.ItemDetresponse = data;      
      this.itemDet = this.ItemDetresponse;      
    })

    this.Jarwis.displayInstruction().subscribe(
      data=>{
      this.Instructionresponse = data;      
      this.instruct = this.Instructionresponse;      
    })

    // this.Jarwis.displayPharmPre(this.patID, '').subscribe(
    //   data=>{
    //   this.response = data;      
    //   this.prescriptions = this.response   
    // })
    
  }

  // get(){
  //   this.ngOnInit()
  // }
  onSelectItem(Itemid) {
    this.Jarwis.voucherAllStock(Itemid.target.value,'').subscribe(  
      data=>{
        this.AllStockresponse = data;
        this.total =this.AllStockresponse;
        this.getInst = this.total[0].type_id;
        
        this.Jarwis.displayDurationForV(this.getInst).subscribe(
          data=>{
          this.DurationForVresponse = data;      
          this.duration = this.DurationForVresponse       
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
    this.quant = ''
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
    if(this.getInst != '6'){
      this.useFor = d.target.value
    }
  }

  onRefill(r){
    if(this.getInst == '6'){
      if(r.target.value > 0){
        this.count = parseInt(r.target.value) 
        this.quantity = this.amt * this.sup * this.days / this.count
        this.useFor = parseInt(this.days) / parseInt(this.count)
        this.quant = this.quantity
      }else{
        this.quantity = this.amt * this.sup * this.days / this.defaultCount
        this.useFor = this.days
        this.quant = this.quantity
      }
    }
  }

  apartTablet(n){
    if(parseInt(n.target.value) > parseInt(this.total[0].total_remain)){
      alert('Quantity greater than quantity in stock')
      n.target.value = ''
    }
    if(parseInt(n.target.value) < parseInt(this.total[0].total_remain)){
      alert('Quantity minimum is 1')
      n.target.value = ''
    }
    if(this.getInst != '6'){
      this.tQuantity = n.target.value
    }
    this.quant = n.target.value
  }

  onSubmitAdd(form: NgForm) {
    form.value.customer_id=this.patID
    form.value.quantity = this.quantity
    form.value.original_qty = this.tQuantity
    form.value.days = this.useFor
    form.value.amount = this.total[0].selling_price
    form.value.amount_paid = this.total[0].selling_price * this.quantity
    this.Jarwis.pharmPriscription(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
  }

  saveTovoucher(){
    this.Jarwis.saveTovoucher().subscribe(
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
