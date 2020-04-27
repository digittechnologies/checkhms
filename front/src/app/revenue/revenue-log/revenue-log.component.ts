import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { RevenueJarwisService } from 'src/app/service/revenue-jarwis.service';

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


  constructor(
   private Jarwis:RevenueJarwisService,
    private actRoute:ActivatedRoute

    ) { }

  ngOnInit() {
      this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
      this.vouchId= id;
      // console.log(this.vouchId)
      this.Jarwis.patientVouchers(this.vouchId).subscribe(
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
     }

}
