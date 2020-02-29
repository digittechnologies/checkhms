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
  payItem: any;
  imgLink: any;
  payDetail: any;
spin="";
disabled = false;
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
    this.disabled = true;
this.spin="disable";
    this.Jarwis.stockReport(form.value).subscribe(
      data => {
        this.response = data;
        this.payloads = this.response;
        this.payItem= this.payloads.item;
        this.payDetail = this.payloads.details;
        this.spin="";
      }); 
      this.disabled = false; 
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
