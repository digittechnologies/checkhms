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
response;
log;
logs:any;
res:any;
role:any;
dept:any;
vouchId:any;

  constructor(
   private Jarwis:RevenueJarwisService,
    private actRoute:ActivatedRoute

    ) { }

  ngOnInit() {
      this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
      this.vouchId= id;
      console.log(this.vouchId)
      this.Jarwis.patientVouchers(this.vouchId).subscribe(data=>console.log(data))
     }))
     }

}
