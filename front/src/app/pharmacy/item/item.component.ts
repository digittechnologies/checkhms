import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  response: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  data: string;
  image: any;
  item: any;
  itemres: any;
  itemid: string;
  itemName: any;
  itemAdd: any;
  itemNum: any;
  itemDetail: any;
  branch: any;
  items: any;
  itemname: any;
  itemimg: any;
  typeimg: any;
  resitem: any;
  
  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,public actRoute: ActivatedRoute,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis.displayItemDetails().subscribe(
      data=>{
      this.response = data;
      
      this.branch = this.response
      })

      this.actRoute.paramMap.subscribe((params => {
        let id = params.get('id');
        
        this.Jarwis.edtItemDetails(id).subscribe(data=>{
          this.response = data;
          this.typeimg=this.response[0].image
          this.itemimg=this.response[0].item_img
          this.resitem=this.response[0]
          // this.item=this.response.item
          // this.id4=this.resnh.id
          // this.lenght= this.title.length
          // console.log(this.lenght)
          console.log(this.response)
       
        })
      
          }));

    this.Jarwis.displayItem().subscribe(
      data=>{
      this.response = data;      
      this.items = this.response   
    })
  
}

editdept(id: string) {
  console.log(id)
  this.Jarwis.edtCategories(id).subscribe(
    data=>{      
      this.itemres = data; 
      this.itemid= id
      this.itemName= this.itemres[0].name;
    })
}

onUpdate(form: NgForm) {

  
  form.value.id=this.itemid
  // this.image= form.value.image
  //  console.log(form)
   console.log(form.value)
  this.Jarwis.updateCategories(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {

  this.Jarwis.deleteCategories(id).subscribe(  
      
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );
  }


  onSubmit(form: NgForm) {
   
    this.Jarwis.addCategories(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Added successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:itemacturer');
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

