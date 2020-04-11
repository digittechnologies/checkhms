import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { filter } from 'rxjs/operators';

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

  constructor(private Jarwis:JarwisService) { }

  ngOnInit() {
    this.Jarwis.profile().subscribe(
      data=>{
        this.res = data;
        this.role= this.res.det[0].role_id
        this.dept = this.res.det[0].nameD
        console.log(this.res)
    })
    this.Jarwis.displayDeptAppointment().subscribe(
      data=>{
      this.response = data;      
      this.logs = this.response;
      this.log=this.logs 
      console.log(this.log)
    })
  }
  filt(e){
var index = this.log.filter(function(card) {
	return card.card_number == e.target.value;
});
this.log=index;
if (index=='') {
  this.log=this.logs;
}
console.log(this.log)
    
  }

}
