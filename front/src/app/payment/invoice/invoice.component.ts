import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';

declare let $ : any;

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  patID: string;
  patientResponse: any;
  inv: any;
  PharmPreresponse: any;
  prescriptions: any;
  error: any;
  result: any;
  appointID: string;
  appointResponse: any;
  voucherId: any;
  appointments: any;
  0:any;

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
	    this.appointID = id;
	    this.Jarwis.patientdetails(id).subscribe(
	      data=>{
	      this.patientResponse = data;      
	      // this.inv = this.patientResponse;
	    })
  }))

  this.Jarwis.displayDeptAppoint(this.appointID).subscribe(
    data=>{
    this.appointResponse = data;      
    this.voucherId = this.appointResponse[0].voucher_id;
    this.appointments = this.appointResponse;
  })

  this.Jarwis.displayPharmInvoice(this.appointID,'').subscribe(
    data=>{
    this.PharmPreresponse = data;      
    this.inv = this.PharmPreresponse; 
    })
  }
  saveToInvoice(){
    this.Jarwis.saveToInvoice(this.inv.pres[0].voucher_id, '').subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
  }
  closeAppointment(){
    if(confirm('Click OK to end the process')){
      this.Jarwis.closeAppointment(this.inv.patient.id,this.inv.pres[0].voucher_id, '').subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
      );
    }
  }
  terminateAppointment(t){
    if(confirm('This will terminate the process witout ending! Click OK to terminate')){
      this.Jarwis.terminateAppointment(t.target.value, '').subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
      ); 
    }
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

openPrintDialogue(label){
    let obj = this.inv.pres;
    for(const key of obj){
      if(key.id == label){
        this.result = key
        break;
      }
    }
    console.log(this.result)
        $('<iframe>', {
          name: 'myiframe',
          class: 'printFrame'
        })
        .appendTo('body')
        .contents().find('body')
        .append(`        
                <table>
                <thead>
                    <th colspan="3">
                        <img width="6%" src="../assets/images/icon.svg" alt="Check Logo" class="center"><span style="font-size: 22px;">Check HMS</span>
                    </th>
                    <th colspan="3">
                        <p class="m-b-0"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</strong></p>
                        <h5 class="m-b-0">0906-848-3939</h5> 
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="6"> </td>
                    </tr>
                    <tr >
                        <td colspan="4">
                            <p class="m-b-0"><strong>RX:</strong> ${this.result.voucher_id}</p>                               
                            <p class="m-b-0"><strong>Doctor: </strong> ${this.result.doctor_id}</p>
                            <p class="m-b-0"><strong>Order Date: </strong>  ${this.result.p_date}</p>  
                        </td>
                        <td  colspan="2" style="padding-top:20px;">
                            <p class="m-b-0"><strong>Patient Name: </strong>${this.result.fname+ ' ' +this.result.othername}</p>
                            <p class="m-b-0"><strong>Order Date: </strong> ${this.result.p_date}</p>
                            <p class="m-b-0"><strong>Refill: ${this.result.refill}</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" >                    
                            <p class="h5">Medicine <small>${this.result.generic_name}</small> <small class="float-right text-muted">QTY:${this.result.quantity}</small></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                        </td>
                    </tr>        
                    <tr >
                        <td colspan="4" >
                            <p class="m-b-0"><strong><u>Caution</u></strong></p> 
                            <p>${this.result.caution}</p>
                        </td>
                        <td  colspan="2">
                            |||||||||||||||| BARCODE|||||||||||||||||         
                        </td>
                    </tr>   
                </tbody>
                </table>
        `);
        window.frames['myiframe'].focus();
        window.frames['myiframe'].print();
      // }
  
    // setTimeout(() => { $(".printFrame").remove(); }, 1000);
  };
  
}
