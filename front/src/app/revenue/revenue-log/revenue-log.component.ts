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


  constructor(
   private Jarwis:RevenueJarwisService,
    private actRoute:ActivatedRoute

    ) { }

  ngOnInit() {
      this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
      this.vouchId= id;
      console.log(this.vouchId)
      this.Jarwis.patientVouchers(this.vouchId).subscribe(
        data=>{console.log(data)
          this.response=data;
          this.pharm_priscript=this.response.pharm;
          this.record_priscript = this.response.record;
          //  this.pharm_empty = this.response.pharm[0]
          //  this.record_empty = this.response.record[0]
          console.log(this.response)
        })
     }))
     }

}
