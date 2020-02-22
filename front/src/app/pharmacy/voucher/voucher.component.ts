import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

declare let jQuery: any;
declare let $ : any;
declare let particlesJS : any;

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  generic_name: any;
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
  DurationForVresponse: any;
  appId: any;
  prescriptionsList: any;
  voucherId: any;
  appointResponse: any;
  appointments: any;
  total_name: any;
  cat_name: any;
  type_name: any;
  total_remain: any;
  shelve_name: any;
  shelve_point: any;
  selling_price: any;
  tquant: any;
  refill: any;
  remain: any;
  tcost: any;
  prescription: any;
  voucher: any;
  invoice: any;
  imgLink: any;

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
	    this.appId= id;
	    this.Jarwis.patientdetails(id).subscribe(
	      data=>{
	      this.patientResponse = data;      
        this.pat = this.patientResponse;
        this.patID = this.pat[0].id;
        console.log(this.pat);
	    })
  }))
  
  this.Jarwis. generalSettings().subscribe(
    data=>{
    this.response = data;      
    this.imgLink = this.response[0].app_url;
  })
  
  // this.Jarwis.displayPharmPre(this.patID, '').subscribe(
  //   data=>{
  //   this.PharmPreresponse = data;      
  //   this.prescriptions = this.PharmPreresponse; 
  // })

  this.Jarwis.displayDeptAppoint(this.appId).subscribe(
    data=>{
    this.appointResponse = data;      
    this.voucherId = this.appointResponse[0].voucher_id;
    this.appointments = this.appointResponse[0];
    this.prescription= this.appointments.prescription;
    this.voucher= this.appointments.voucher;
    this.invoice= this.appointments.invoice;
  })

  this.Jarwis.displayPharmPre2(this.appId).subscribe(
    data=>{
    this.PharmPreresponse = data;      
    this.prescriptions = this.PharmPreresponse;
    this.tquant= this.prescriptions.tquant;
    this.refill = this.prescriptions.refill;
    this.remain = this.prescriptions.remain;
    this.tcost = this.prescriptions.tcost;
    this.prescriptionsList= this.PharmPreresponse.pres; 
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
  }

  // get(){
    
  // }
  onSelectItem(Itemid) {
    this.Jarwis.voucherAllStock(Itemid.target.value,'').subscribe(  
      data=>{
        this.AllStockresponse = data;
        this.total =this.AllStockresponse[0];
        this.generic_name= this.total.generic_name
        this.total_name= this.total.name;
        this.cat_name= this.total.cat_name;
        this.type_name= this.total.type_name;
        this.total_remain= this.total.total_remain;
        this.shelve_name= this.total.shelve_name;
        this.shelve_point= this.total.shelve_point;
        this.getInst = this.total.type_id;
        this.selling_price= this.total.selling_price;
        this.ngOnInit()
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
      if(this.quantity > this.total.total_remain){
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
    if(parseInt(n.target.value) > parseInt(this.total.total_remain)){
      alert('Quantity greater than quantity in stock')
      n.target.value = ''
    }
    if(parseInt(n.target.value) <= 0){
      alert('Quantity minimum is 1')
      n.target.value = ''
    }
    if(this.getInst != '6'){
      this.tQuantity = n.target.value
    }
    this.quant = n.target.value
  }

  onSubmitAdd(form: NgForm) {
    form.value.appointment_id=this.appId
    form.value.customer_id=this.patID
    form.value.quantity = this.quant
    form.value.voucher_id = this.voucherId
    form.value.original_qty = this.tQuantity
    form.value.days = this.useFor
    form.value.amount = this.total.selling_price
    form.value.amount_paid = parseInt(this.total.selling_price) * parseInt(this.quant)
    form.value.instock = this.total.total_remain
    // console.log(form.value)
    this.Jarwis.pharmPriscription(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
  }

  saveTovoucher(){
    this.Jarwis.saveTovoucher(this.voucherId,'').subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })   
    // this.router.navigateByUrl('/Admin/(side:voucher');
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }
}
