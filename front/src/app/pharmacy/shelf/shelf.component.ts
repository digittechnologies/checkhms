import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  response: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  data: string;
  image: any; 
  shelv: any;
  shelvres: any;
  shelvid: string;
  shelvName: any;
  branch: any;
  
  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {

    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;
      
      this.branch = this.response
     
   
    })

    this.Jarwis.displayShelve().subscribe(
      data=>{
      this.response = data;      
      this.shelv = this.response   
    })
  
}

editdept(id: string) {
  console.log(id)
  this.Jarwis.edtShelve(id).subscribe(
    data=>{      
      this.shelvres = data; 
      this.shelvid= id
      this.shelvName= this.shelvres[0].name;
    })
}

onUpdate(form: NgForm) {

  
  form.value.id=this.shelvid
  // this.image= form.value.image
  //  console.log(form)
   console.log(form.value)
  this.Jarwis.updateShelve(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {

  this.Jarwis.deleteShelve(id).subscribe(  
      
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );
  }


  onSubmit(form: NgForm) {
   
    this.Jarwis.addShelve(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Added successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:shelvacturer');
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

