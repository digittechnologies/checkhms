import { Component, OnInit,OnDestroy } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { RevenueJarwisService } from 'src/app/service/revenue-jarwis.service';
import { MatSnackBar } from '@angular/material';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

declare let $ : any;
@Component({
  selector: 'app-revenue-log',
  templateUrl: './revenue-log.component.html',
  styleUrls: ['./revenue-log.component.css']
})
export class RevenueLogComponent implements OnInit, OnDestroy {
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
  disabled = false;
  error: any;
  v_status: any;
  unavailable: boolean;
  chargesResponse: any;
  charges: any;
  selling_price: any;
  public paymentForm: FormGroup;
  amountPaid: any;
  balanceAmount: any;
  charge_id: any;
  v_charges_amount: any;
  v_discount: any;
  setting: any;
  logo: any;
  result: any;
  patient_image: any;
  card_num: any;
  patient_name: any;
  patient_othername: any;
  patient_mobile_number: any;
  payall=[];
  invoiceModule: any;
  charges_department: any;
  priceColumn: any;
  priceResponse: any;
  footerSubTotal = 0;
  footerTotal = 0;
  footerDiscountAmount = 0;
  appointment_id: any;
  patient_id: any;
  passport: any;
  serviceCharges: any;



  constructor(
    private formBuilder: FormBuilder, 
   private Jarwis:JarwisService,
   private JarwisRev:RevenueJarwisService,
    private actRoute:ActivatedRoute,
    public snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit() {
    this.Jarwis.general_setting().subscribe(
      data=>{
      this.setting = data;  
      this.logo= this.setting.logo;   
      //  console.log(this.logo)
      })

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

    this.Jarwis.displayPriceColumn().subscribe(
      data=>{
      this.priceResponse = data;      
      this.priceColumn = this.priceResponse;
 
    })

      this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
      this.vouchId= id;
      // console.log(this.vouchId)
      this.JarwisRev.patientVouchers(this.vouchId).subscribe(
        data=>{          
          this.voucherResponse = data;      
        this.pat = this.voucherResponse.customer;
        this.patient_image = this.pat[0].patient_image;
        this.card_num = this.pat[0].card_number;
        this.patient_name = this.pat[0].name;
        this.patient_othername = this.pat[0].othername;
        this.patient_mobile_number = this.pat[0].mobile_number
        this.roll = this.voucherResponse.voucher;
        this.patID = this.pat[0].id;
        this.schemeCat = this.pat[0].category_name;
        this.schemeId = this.pat[0].n_h_i_s;
        this.schemePercent = this.pat[0].pacentage_value;
        this.schemePercentToView = 100 - this.pat[0].pacentage_value;
        this.schemePriceList = this.pat[0].price_list_column;
        })
     }))

     this.Jarwis.displayCharges().subscribe(
      data=>{
      this.chargesResponse = data;      
      this.charges = this.chargesResponse.charges;
      this.selling_price = this.chargesResponse.chargeSum;
      this.charge_id = this.chargesResponse.charges[0].id;
    })
    
     }
     ngOnDestroy(){

     }
     cancelPay(cId){
      this.Jarwis.councelVoucher(cId).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
      );
     }
     onPayall(){
       this.Jarwis. displayAllInvoice(this.vouchId).subscribe(
         data=>{
           this.payall=data;
           console.log(data.arr)
           data.arr.map(res=>{
             this.payall.push(res.original)
               })
               console.log(this.payall)
          //    console.log(res.original)
          //   this.PharmPreresponse = res.original;    
          //   this.inv = this.PharmPreresponse; 
            // console.log(this.inv)
            // this.isEmpty=this.inv.isE
            // this.voucher_Id=this.inv.pres[0].voucher_id;
            // this.p_date=this.inv.pres[0].p_date
            // this.name=this.inv.patient.name
            // this.othername=this.inv.patient.othername
            // this.card_number=this.inv.patient.card_number
            // this.address=this.inv.patient.address
            // this.city=this.inv.patient.city
            // this.mobile_no=this.inv.patient.mobile_number
            // this.state=this.inv.patient.state
            // this.country=this.inv.patient.country
            // this.amount=this.inv.totalAmount.amount
            // this.v_status=this.inv.voucher_status.paid_status
            // this.v_charges_amount = this.inv.voucher_status.charges
            // this.v_discount = this.inv.voucher_status.discount_id
            // this.amountPaid=this.inv.voucher_status.paid
            // this.status=this.inv.pres[0].status
            // this.pres=this.inv.pres 
            // this.schemePercentToView = 100 - this.inv.patient.pacentage_value;
            // this.schemePercent = this.inv.patient.pacentage_value;
            // this.afterPercentCost = this.schemePercent / 100 * this.amount + 50; 
            // this.schemeAmt = (100 - this.schemePercent)  / 100 * this.amount + 50;
          //  })
          }
       )

     
     }

     onPay(pay, param1, module_id, param2){
      this.footerSubTotal = 0
      this.footerTotal = 0
      this.footerDiscountAmount = 0;
      this.Jarwis.displayPharmInvoice(pay, 'inv', module_id, '').subscribe(
        data=>{
        this.PharmPreresponse = data;    
        this.inv = this.PharmPreresponse; 
        this.isEmpty=this.inv.isE
        this.invoiceModule = this.inv.module
        this.pres=this.inv.pres 
        this.patient_id = this.inv.patient.id
        this.name=this.inv.patient.name
        this.othername=this.inv.patient.othername
        this.card_number=this.inv.patient.card_number
        this.address=this.inv.patient.address
        this.city=this.inv.patient.city
        this.mobile_no=this.inv.patient.mobile_number
        this.passport = this.inv.patient.patient_image;
        this.state=this.inv.patient.state
        this.country=this.inv.patient.country
        this.schemePercentToView = 100 - this.inv.patient.pacentage_value;
        this.schemePercent = this.inv.patient.pacentage_value;
        this.amount=this.inv.totalAmount.amount
        this.afterPercentCost = this.schemePercent / 100 * this.amount
        this.v_status=this.inv.voucher_status.paid_status
        this.serviceCharges = this.inv.voucher_status.charges
        this.appointment_id = this.inv.pres[0].appointment_id

        this.pres.forEach(e => {
          let footerSubTotal = e.insurance_status == 'enabled' ? parseInt(e.amount_2) : parseInt(e.amount);
          this.footerSubTotal+=footerSubTotal
          

          if(e.discount_1 == 0 && e.insurance_status != 'enabled'){
            let footerTotal2 = (e.discount_1 == 0) ? parseInt(e.amount) : parseInt(e.amount);
            this.footerTotal+=footerTotal2
          }

          if(e.insurance_status == 'enabled' && e.amount_2 == 0) {
            let footerDiscountAmount = e.amount
            this.footerDiscountAmount+=parseInt(footerDiscountAmount)
            let footerTotal = e.amount
            this.footerTotal+=parseInt(footerTotal)
            let footerSubTotal = e.amount
            this.footerSubTotal+=parseInt(footerSubTotal)
          }

          //PRIMARY HEALTH CARE TYPE START FOR DISCOUNT A MOUNT
          if(e.discount_1 != 0 && e.care_type == 'primary' && e.insurance_status == 'enabled'  && e.amount_2 != 0){
            let footerDiscountAmount = parseInt(e.amount_2) * parseInt(e.discount_1) /100
            this.footerDiscountAmount+=footerDiscountAmount
            let footerTotal = (100 - parseInt(e.discount_1)) *  parseInt(e.amount_2) / 100
            this.footerTotal+=footerTotal
          } else if(e.discount_1 != 0 && e.care_type == 'primary' && e.insurance_status != 'enabled') {
            let footerDiscountAmount = parseInt(e.amount) * parseInt(e.discount_1) /100
            this.footerDiscountAmount+=footerDiscountAmount
            let footerTotal = (100 - parseInt(e.discount_1)) * parseInt(e.amount) / 100
            this.footerTotal+=footerTotal
          }
          //PRIMARY HEALTH CARE TYPE END FOR DISCOUNT A MOUNT

          //SECONDARY HEALTH CARE TYPE START FOR DISCOUNT A MOUNT
          if(e.discount_2 != 0 && e.care_type == 'secondary' && e.insurance_status == 'enabled' && e.amount_2 != 0){
            let footerDiscountAmount = parseInt(e.amount_2) * parseInt(e.discount_2) /100
            this.footerDiscountAmount+=footerDiscountAmount
            let footerTotal = (100 - parseInt(e.discount_2)) * parseInt(e.amount_2) / 100
            this.footerTotal+=footerTotal
          } else if(e.discount_2 != 0 && e.care_type == 'secondary' && e.insurance_status != 'enabled') {
            let footerDiscountAmount = parseInt(e.amount) * parseInt(e.discount_2) /100
            this.footerDiscountAmount+=footerDiscountAmount
            let footerTotal = (100 - parseInt(e.discount_2)) * parseInt(e.amount) / 100
            this.footerTotal+=footerTotal
          }
          //SECONDARY HEALTH CARE TYPE END FOR DISCOUNT A MOUNT

          //OTHERS HEALTH CARE TYPE START FOR DISCOUNT A MOUNT
          if(e.discount_3 != 0 && e.care_type == 'others' && e.insurance_status == 'enabled' && e.amount_2 != 0){
            let footerDiscountAmount = parseInt(e.amount_2) * parseInt(e.discount_3) /100
            this.footerDiscountAmount+=footerDiscountAmount
            let footerTotal = (100 - parseInt(e.discount_3)) * parseInt(e.amount_2) / 100
            this.footerTotal+=footerTotal
          } else if(e.discount_3 != 0 && e.care_type == 'others' && e.insurance_status != 'enabled') {
            let footerDiscountAmount = parseInt(e.amount) * parseInt(e.discount_3) /100
            this.footerDiscountAmount+=footerDiscountAmount
            let footerTotal = (100 - parseInt(e.discount_3)) * parseInt(e.amount) / 100
            this.footerTotal+=footerTotal
          }
          //OTHERS HEALTH CARE TYPE END FOR DISCOUNT A MOUNT

      });
        if(this.invoiceModule == 'pharmacy'){
          this.voucher_Id=this.inv.pres[0].voucher_id;
          this.p_date=this.inv.pres[0].p_date
          this.v_charges_amount = this.inv.voucher_status.charges
          this.v_discount = this.inv.voucher_status.discount_id
          this.amountPaid=this.inv.voucher_status.paid
          this.status=this.inv.pres[0].status
          this.afterPercentCost = this.schemePercent / 100 * this.amount + 50; 
          this.schemeAmt = (100 - this.schemePercent)  / 100 * this.amount + 50;
        }
        if(this.invoiceModule == 'other'){
          this.voucher_Id = this.inv.pres[0].voucher_id
          this.p_date=this.inv.pres[0].c_date
        }
        })

        this.paymentForm = this.formBuilder.group(     
          {
            amount_paid: [this.amountPaid],
          })

          document.getElementById('vouch').classList.remove('active');
          document.getElementById('slip').classList.remove('active');
          document.getElementById('label').classList.remove('active');
          document.getElementById('payvoucher').classList.remove('active');
          document.getElementById('Payslip').classList.remove('active');
          document.getElementById('plabel').classList.remove('active');
          document.getElementById(param1).classList.add('active');
          document.getElementById(param2).classList.add('active');
      }

      apartTablet(n){
        if(parseInt(n.target.value) > parseInt(this.amountPaid)){
          alert('Invalid')
          n.target.value = this.amountPaid
          this.amountPaid = n.target.value      

        }
        if(parseInt(n.target.value) < 0 ){
          alert('Invalid')
          n.target.value = 0;
          // this.amountPaid = n.target.value      

        }    
          this.balanceAmount = this.amountPaid - n.target.value 
          // this.amountPaid = n.target.value      
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
      form.value.bal = this.balanceAmount;  
      // form.value.chargeID = this.charge_id; 
      form.value.charge_amt = this.v_charges_amount;
      form.value.discount = this.v_discount;
      form.value.voucherID = this.voucher_Id;
      if(form.value.topay == '') form.value.topay = this.amountPaid;
      this.Jarwis.saveToInvoice(form.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
      ); 
    }

    payService() {
      this.disabled = true;
      let form = {
        patient_id: this.patient_id,
        voucher_id: this.voucher_Id,
        subtotal: this.footerSubTotal,
        discountamt: this.footerDiscountAmount,
        total: this.footerTotal,
        appointment_id: this.appointment_id
      }
      this.Jarwis.payService(form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error), 
      ); 
    }

    payPriscriptions(){
      this.disabled = true;
      let form = {
        patient_id: this.patient_id,
        voucher_id: this.voucher_Id,
        charge_amt: this.serviceCharges,
        subtotal: this.amount,
        total: this.amount,
        appointment_id: this.appointment_id
      }
      this.Jarwis.saveToInvoice(form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error), 
      );
    }

    openPrintDialogue(label){
  
      let arr = [];
        let obj = this.inv.pres;
        for(const key of obj){
          if(key.id == label){
            this.result = key
            break;
          }
        }
       
        arr.push(this.result)
            $('<iframe>', {
              name: 'myiframe',
              class: 'printFrame'
            })
            .appendTo('body')
            .contents().find('body')
            .append(`  
                    <table >
                    <thead>
                        <th colspan="6" class="text-center">
                            <p style="font-size: 8px">${this.setting.company_name}</p>
                            <p style="margin-top: -5px; font-size: 7px; margin-bottom: -5px;">Pharmacy Department.</p>
                            <hr>
                        </th>             
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="6"> 
                                <p style="font-size: 10px;  margin-top: -10px; text-align: center;"> <strong>${arr[0].generic_name} TAB</strong> : <small class="float-right">QTY:${arr[0].quantity}</small></p>
                                <p style="font-size: 9px; margin-top: -7px; text-align: center;">USE ${arr[0].duration_name}, ${arr[0].daily_name}. FOR: ${arr[0].days} DAY(S).</p>
                                <p style="font-size: 6px; margin-top: -2px; margin-bottom: -5px;"> <strong>Caution:</strong> <small class="float-right">${arr[0].caution}</small></p>
                               
                                <hr>
                            </td>                        
                        </tr>
                        <tr >
                            <td colspan="2"  style="text-align: center;">
                                <p style="font-size: 8px; margin-top: -20px;" class="m-b-0"><strong>${arr[0].doctor_id}</strong></p>                               
                                <p style="margin-top: -9px; font-size: 7px">Physician</p>                            
                            </td>
                            <td  colspan="2" style="padding-top:20px;">                            
                            </td>
                            <td colspan="2"  style="text-align: center;">
                                <p style="font-size: 8px;  margin-top: -20px;" class="m-b-0"><strong>${arr[0].firstname} ${arr[0].lastname}</strong></p>                               
                                <p style="font-size: 7px; margin-top: -9px; " >Pharmacist</p>                            
                            </td>
                        </tr>                       
                    </tbody>
                    </table>
            `);
            window.frames['myiframe'].focus();
            window.frames['myiframe'].print();
            arr=[];
            setTimeout(() => { $(".printFrame").remove(); }, 10);
      };

    handleResponse(data) {   
      if (data.success == false) {
        let snackBarRef = this.snackBar.open(data.message, 'Dismiss', {
          duration: 5000
        })
        this.ngOnInit();
      } 
      if(data.success == true) {
        let snackBarRef = this.snackBar.open("Payment Successfull ", 'Dismiss', {
          duration: 5000
        }) 
        this.ngOnInit();       
      }
        
      // this.router.navigateByUrl('/Admin/(side:patient_log');
      // this.ngOnInit();
      this.disabled = false;
    }
  
    handleError(error) {
      console.log(error)
      this.error = error.error.errors;
      let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
        duration: 2000
  
      })
      this.disabled = false;
    }
}
