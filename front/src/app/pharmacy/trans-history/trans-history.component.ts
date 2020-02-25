import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trans-history',
  templateUrl: './trans-history.component.html',
  styleUrls: ['./trans-history.component.css']
})
export class TransHistoryComponent implements OnInit {
  response: any;
  bran: any;
  payloads: any;
  action: any;
  getAction: any;
  error: any;
  payItem = [];
  imgLink: any;

  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;      
      this.bran = this.response   
    }) 
  }

  get(){
    this.ngOnInit();
  }

  onClickSubmit(form: NgForm) {
    this.payItem = []
    this.Jarwis.stockReport(form.value).subscribe(
      data => {
        this.response = data;
        this.payloads = this.response;
        // this.payItem= this.payloads.item;
        this.loadReport(this.payloads.item, this.payloads.itemDet)
      });  
  }  

  loadReport(payloads, dets){
    let count = 1
    dets.forEach(element => {
      let keepGoing = true
      payloads.forEach(e => {
        if(keepGoing){
          if(element.id == e.item_detail_id){
            this.payItem.push({
              "id": e.item_detail_id, 
              "open_stock": e.open_stock,
              "sales": e.sales,
              "transfer": e.transfer,
              "receive": e.receive,
              "total_remain": e.total_remain,
              "close_balance": e.close_balance,
              "variance": e.variance,
              "physical_balance": e.physical_balance,
              "amount": e.amount,
              "balance": e.balance,
              "item_img": element.item_img,
              "generic_name": element.generic_name,
              "cat_name": e.cat_name,
              "name": e.name,
              "purchasing_price": element.purchasing_price,
              "markup_price": element.markup_price,
              "item_detail_id": e.item_detail_id
            })
            keepGoing = false
          }
        }
      });
    });
    console.log(this.payItem)
  }
  printComponent() {
    var divToPrint=document.getElementById("print-history");
    
    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

var win = window.open('', '', 'height=700,width=700');
win.document.write(style);          //  add the style.
win.document.write(divToPrint.outerHTML);
win.document.close();
win.print();
   
}
}
