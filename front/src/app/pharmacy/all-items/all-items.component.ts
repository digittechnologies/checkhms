import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {
  response: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  data: string;
  image: any;
  cat: any;
  catres: any;
  catid: string;
  catName: any;
  catAdd: any;
  catNum: any;
  catDetail: any;
  branch: any;
  items: any;
  type: any;
  unit: any;
  manuf: any;
  bran: any;
  cityName: any;
  itemDet:any;
  stkBran: any;

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

    this.Jarwis.displayItem().subscribe(
      data=>{
      this.response = data;      
      this.items = this.response   
    })

    // this.Jarwis.displayBranch().subscribe(
    //   data=>{
    //   this.response = data;      
    //   this.bran = this.response   
    //   console.log(this.bran.name)
    // })

    this.Jarwis.displayType().subscribe(
      data=>{
      this.response = data;      
      this.type = this.response 
      console.log(this.type)    
    })

    this.Jarwis.displayCategories().subscribe(
      data=>{
      this.response = data;      
      this.cat = this.response  
      console.log(this.cat)   
    })

    this.Jarwis.displayUnit().subscribe(
      data=>{
      this.response = data;      
      this.unit = this.response 
      console.log(this.unit)    

    })

    this.Jarwis.displayManufacturer().subscribe(
      data=>{
      this.response = data;      
      this.manuf = this.response   
      console.log(this.manuf)    

    })

    this.Jarwis.displayStockBranches().subscribe(
      data=>{
      this.response = data;      
      this.stkBran = this.response       

    })

    this.Jarwis.disItemDet().subscribe(
      data=>{
      this.response = data;      
      this.itemDet = this.response       

    })
  
}

get(){
  this.ngOnInit()
}

editdept(id: string) {
  console.log(id)
  this.Jarwis.edtCategories(id).subscribe(
    data=>{      
      this.catres = data; 
      this.catid= id
      this.catName= this.catres[0].name;
    })
}

onUpdate(form: NgForm) {

  
  form.value.id=this.catid
  // this.image= form.value.image
  //  console.log(form.value)
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


  onSubmitItem(form: NgForm) {
    //console.log('here : ', form.value)

    this.Jarwis.addItemDetails(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  onSubmitAdd(form: NgForm) {
    this.Jarwis.addToStock(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
  }

  onSubmitTrans(form: NgForm) {
    this.Jarwis.transToStock(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
  }

  onSelect(id: string){
    // this.cityName.setValue(id.target.value, {
    //   onlySelf: true
    // })
    // alert(id)
    console.log(id);
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:catacturer');
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
