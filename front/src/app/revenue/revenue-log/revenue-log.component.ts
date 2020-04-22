import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { RevenueJarwisService } from 'src/app/service/revenue-jarwis.service';
import { MatSnackBar } from '@angular/material';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';


@Component({
  selector: 'app-revenue-log',
  templateUrl: './revenue-log.component.html',
  styleUrls: ['./revenue-log.component.css']
})
export class RevenueLogComponent implements OnInit {
response:any;
log;
logs:any;
res:any;
role:any;
dept:any;
vouchId:any;
pharm_priscript:any;
record_priscript:any;
pharm_empty:null;
record_empty:null;
  voucherResponse: any;
  pat: any;
  patID: any;
  schemeCat: any;
  schemeId: any;
  schemePercent: any;
  schemePercentToView: number;
  schemePriceList: any;
  roll: any;
  imgLink: any;
  PharmPreresponse: any;
  inv: any;
  isEmpty: any;
  voucher_Id: any;
  p_date: any;
  name: any;
  othername: any;
  card_number: any;
  address: any;
  city: any;
  mobile_no: any;
  state: any;
  country: any;
  amount: any;
  status: any;
  pres: any;
  afterPercentCost: number;
  schemeAmt: number;
  icon: any;
  userResponse: any;
  uBranch: any;
  uBranchName: any;
  disabled: boolean;
  error: any;
  v_status: any;
  unavailable: boolean;
  chargesResponse: any;
  charges: any;
  charge_amount: any;
  public paymentForm: FormGroup;
  amountPaid: any;
  balanceAmount: any;
  charge_id: any;


  constructor(
    private formBuilder: FormBuilder, 
   private Jarwis:JarwisService,
   private JarwisRev:RevenueJarwisService,
    private actRoute:ActivatedRoute,
    public snackBar: MatSnackBar
    ) { }

  ngOnInit() {

    this.paymentForm = this.formBuilder.group(     
      {
        amount_paid: [''],
      })

      this.balanceAmount= 0;
    this.Jarwis.profile().subscribe(
      data=>{
      this.userResponse = data;
      this.uBranch= this.userResponse.det[0].branch_id
      this.uBranchName= this.userResponse.det[0].br_name
      this.role= this.userResponse.det[0].role_id
      this.dept = this.userResponse.det[0].dept_id;
    })

    this.Jarwis.generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
      this.icon = this.response[0].logo;
    })

      this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
      this.vouchId= id;
      // console.log(this.vouchId)
      this.JarwisRev.patientVouchers(this.vouchId).subscribe(
        data=>{          
          this.voucherResponse = data;      
        this.pat = this.voucherResponse.customer;
        this.roll = this.voucherResponse.voucher;
        this.patID = this.pat[0].id;
        this.schemeCat = this.pat[0].category_name;
        this.schemeId = this.pat[0].n_h_i_s;
        this.schemePercent = this.pat[0].pacentage_value;
        this.schemePercentToView = 100 -this.pat[0].pacentage_value;
        this.schemePriceList = this.pat[0].price_list_column;
        })
     }))

     this.Jarwis.displayCharges().subscribe(
      data=>{
      this.chargesResponse = data;      
      this.charges = this.chargesResponse.charges;
      this.charge_amount = this.chargesResponse.chargeSum;
      this.charge_id = this.chargesResponse.charges[0].id;
    })
    
     }

     cancelPay(cId){
      this.Jarwis.councelVoucher(cId).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
      );
     }

     onPay(pay, param){
      this.Jarwis.displayPharmInvoice(pay, 'inv', '').subscribe(
        data=>{
        this.PharmPreresponse = data;    
        this.inv = this.PharmPreresponse; 
        // console.log(this.inv)
        this.isEmpty=this.inv.isE
        this.voucher_Id=this.inv.pres[0].voucher_id;
        this.p_date=this.inv.pres[0].p_date
        this.name=this.inv.patient.name
        this.othername=this.inv.patient.othername
        this.card_number=this.inv.patient.card_number
        this.address=this.inv.patient.address
        this.city=this.inv.patient.city
        this.mobile_no=this.inv.patient.mobile_number
        this.state=this.inv.patient.state
        this.country=this.inv.patient.country
        this.amount=this.inv.totalAmount.amount
        this.v_status=this.inv.voucher_status.paid_status
        this.amountPaid=this.inv.voucher_status.paid
        this.status=this.inv.pres[0].status
        this.pres=this.inv.pres 
        this.schemePercentToView = 100 - this.inv.patient.pacentage_value;
        this.schemePercent = this.inv.patient.pacentage_value;
        this.afterPercentCost = this.schemePercent / 100 * this.amount + 50; 
        this.schemeAmt = (100 - this.schemePercent)  / 100 * this.amount + 50;
        })

        this.paymentForm = this.formBuilder.group(     
          {
            amount_paid: [this.amountPaid],
          })

          document.getElementById('vouch').classList.remove('active');
          document.getElementById('slip').classList.remove('active');
          document.getElementById('label').classList.remove('active');
          document.getElementById(param).classList.add('active');
      }

      apartTablet(n){
        if(parseInt(n.target.value) > parseInt(this.amountPaid)){
          alert('Invalid')
          n.target.value = this.amountPaid
          this.amountPaid = n.target.value      

        }
        if(parseInt(n.target.value) <= 0 || n.target.value == '' ){
          alert('Invalid')
          n.target.value = '0';
          this.amountPaid = n.target.value      

        }    
          this.balanceAmount = this.amountPaid - n.target.value 
      }
      
      

      printComponent() {
        var divToPrint=document.getElementById("print-history");
        
        var style = "<style>";
        style = style + "table {width: 100%;font: 17px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        // style = style + "#cin: align:center;color:red}";
        // style = style + "#oid: align: center;}";
        style = style + "</style>";
    
    var win = window.open('', '', 'height=700,width=700');
    win.document.write(style);          //  add the style.
    win.document.write(divToPrint.outerHTML);
    win.document.close();
    win.print();
       
    }

    onPaid(form:NgForm){
      this.disabled = true;

      form.value.voucher_Id = this.voucher_Id;  
      form.value.bal = this.balanceAmount;  
      form.value.chargeID = this.charge_id; 
      form.value.charge_amt = this.charge_amount;
      form.value.discount = this.schemePercentToView;
      if(form.value.topay == '') form.value.topay = this.amountPaid;
      console.log(form.value)
      this.Jarwis.saveToInvoice(form.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
      ); 
    }

    handleResponse(data) {   

      if (data.message == 'unavailable') {
        let snackBarRef = this.snackBar.open(data.message, 'Dismiss', {
          duration: 2000
        })
      } else {
        let snackBarRef = this.snackBar.open("Payment Successfull Successfull", 'Dismiss', {
          duration: 2000
        })        
      }
        
      // this.router.navigateByUrl('/Admin/(side:catacturer');
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
