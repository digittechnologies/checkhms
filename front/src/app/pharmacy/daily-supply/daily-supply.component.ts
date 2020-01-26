import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-daily-supply',
  templateUrl: './daily-supply.component.html',
  styleUrls: ['./daily-supply.component.css']
})
export class DailySupplyComponent implements OnInit {

  response: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  data: string;
  typeimage: any;
  image: any;
  manuf: any;
  manufres: any;
  manufid: string;
  manufName: any;
  typeid: any;
  types: any;
  durationName: any;
  upvalue: any;
  upItem_id: any;
  durares: any;
  duraid: string;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis.displayInstruction().subscribe(
      data=>{
      this.response = data;      
      this.manuf = this.response   
    })

    this.Jarwis.displayType().subscribe(
      data=>{
      this.response = data;      
      this.types = this.response 
    })
  }

  
  editdept(id: string) {
    console.log(id)
    this.Jarwis.edtInstruction(id).subscribe(
      data=>{      
        this.durares = data; 
        this.duraid= id 
        this.durationName= this.durares[0].name;
        this.upvalue= this.durares[0].value;      
      })
  }

onUpdate(form: NgForm) {
  
  form.value.id=this.duraid; 
   console.log(form.value)
  this.Jarwis.updateInsruction(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {
  if(confirm('This can\'t be revert after deleted')){

    this.Jarwis.deleteInstruction(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }
}


  onSubmit(form: NgForm) {
   
    this.Jarwis.addInstruction(form.value).subscribe(     
      data => this.handleResponse(data),
      error => this.handleError(error),            
    );    
  }
  

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:manufacturer');
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }

  councle(){}


}
