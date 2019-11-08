import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { FormBuilder } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response: any;
  pos: any;
  allPos: any;

  constructor(private formBuilder: FormBuilder,private Token: TokenService, private Jarwis: JarwisService,private router: Router) { }
  ngOnInit() {

    this.Jarwis.profile().subscribe(
      data=>{
       
      this.response = data;
      this.pos= this.response.det[0].position_id
    
    })

    this.Jarwis.displayAllposition().subscribe(
      data=>{
       
      this.response = data;
     
      this.allPos= this.response;
      console.log(this.allPos)
    
    })
    
  
   
  }
}
