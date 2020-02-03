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
  itemAdded: any;
  itemTransferred: any;
  item: any;
  percent: any;
  math = Math;
  total: any;
  from: any;
  int = parseInt;
  addres: any;
  transres: any;
  addId: any;
  addName: any;
  addQuantity: any;
  transFrom: any;
  transId: string;
  transName: any;
  transTo: any;
  transQuantity: any;
  purchasing_p: any;
  markup_p: any;
  selling_price = 0;
  addId2: any;
  id2: any;
  totalFrom: any;
  totalTo: any;
  to: any;
  varianceAdded: any;
  uBranch: any;
  uPos: any;
  uDept: any;
  uBranchName: any;
  shelve: any;
  p:any;


  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    
    this.Jarwis.profile().subscribe(
      data=>{
      this.response = data;
      this.uBranch= this.response.det[0].branch_id
      this.uBranchName= this.response.det[0].br_name
      this.uPos= this.response.det[0].role_id
      this.uDept= this.response.det[0].dept_id
    })

    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;      
      this.branch = this.response
      })

    this.Jarwis.displayItem(this.uBranch).subscribe(
      data=>{
      this.response = data;      
      this.items = this.response;
    })

    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;      
      this.bran = this.response   
    })

    this.Jarwis.displayType().subscribe(
      data=>{
      this.response = data;      
      this.type = this.response 
    })

    this.Jarwis.displayCategories().subscribe(
      data=>{
      this.response = data;      
      this.cat = this.response  
    })

    this.Jarwis.displayUnit().subscribe(
      data=>{
      this.response = data;      
      this.unit = this.response 
    })

    this.Jarwis.displayManufacturer().subscribe(
      data=>{
      this.response = data;      
      this.manuf = this.response   

    })

    this.Jarwis.displayShelve().subscribe(
      data=>{
      this.response = data;      
      this.shelve = this.response   

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
    
    this.Jarwis.displayAdded().subscribe(
      data=>{
      this.response = data;      
      this.itemAdded = this.response       

    })

    this.Jarwis.varianceItems().subscribe(
      data=>{
      this.response = data;      
      this.varianceAdded = this.response       

    })

    this.Jarwis.displayTransferred().subscribe(
      data=>{
      this.response = data;      
      this.itemTransferred = this.response       

    })
}

get(){
  this.ngOnInit()
}
 
  sellPrice(e){
    this.purchasing_p = e.target.value;
  }
  sellPrice2(e){
    this.markup_p = e.target.value;
    this.selling_price = this.purchasing_p * this.markup_p;
  }

onSelectItem(id) {
  this.Jarwis.displayInstock(id.target.value).subscribe(  
    data=>{
      this.response = data;
      this.total =this.response;
    }
  );
}
onSelectItem2(id) {
  this.id2 = id.target.value;
}

allItem(aa) {
  this.Jarwis.displayItem(aa.target.innerHTML).subscribe(
    data=>{
    this.response = data;      
    this.items = this.response;
  })
}

onSelectFrom(from){
  this.from = from.target.value;
  this.Jarwis.displayInstockT([this.id2, this.from]).subscribe(  
    data=>{
      this.response = data;
      this.totalFrom =this.response;
    }
  );
  // alert(this.totalFrom)
  // alert(this.totalFrom[0].total_remain)
}

restrict(r) {
  if(r.target.value > this.totalFrom[0].total_remain){
    alert('Quantity greater than quantity in stock')
    r.target.value = ''
  }
}

onSelectTo(to){
  this.to = to.target.value;
  this.Jarwis.displayInstockT([this.id2, this.to]).subscribe(  
    data=>{
      this.response = data;
      this.totalTo =this.response;
    }
  );
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

onDelete(id: string) {
  if(confirm('This can\'t be revert after deleted')){

    this.Jarwis.deleteCategories(id).subscribe(  
        data => this.handleResponse(data),
        error => this.handleError(error), 
      );
  }
}

  onClickSubmit(form: NgForm) {
    form.value.selling_price = this.selling_price
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

  onSaveAdd() {
    this.Jarwis.saveAdd().subscribe(
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

  onSubmitVariance(form: NgForm) {
    this.Jarwis.varianceStock(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
  }

  onSaveTrans() {
    this.Jarwis.saveTransfer().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),    
    );
  }

  onSaveVariance() {
    this.Jarwis.saveVariance().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),    
    );
  }


  editAdd(id: string) {
    this.Jarwis.editAdd(id).subscribe(
      data=>{   
        this.addres = data;
        this.addId= id;
        this.addName= this.addres[0].generic_name;
        this.addQuantity= this.addres[0].quantity;
        this.addId2 = this.addres[0].id;
      })
  
  }
  deleteAdd(id: string) {
    if(confirm('This can\'t be revert after deleted')){

      this.Jarwis.deleteAdd(id).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),
      )
    }
  }
  onUpdateAdd(form: NgForm) {
    form.value.id=this.addId
    this.Jarwis.updateAddItem(form.value).subscribe(        
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );  
  }
  editTrans(id: string) {
    console.log(id)
    this.Jarwis.editTrans(id).subscribe(
      data=>{   
        this.transres = data;
        this.transId= id;
        this.transName= this.transres[0].generic_name;
        this.transFrom= this.transres[0].quantity_from;
        this.transTo= this.transres[0].quantity_to;
        this.transQuantity= this.transres[0].total_quantity;
      })
  }
  deleteTrans(id: string) {
    if(confirm('This can\'t be revert after deleted')){

      console.log(id)
      this.Jarwis.deleteTrans(id).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),
      )
    }
  }

  onUpdate(form: NgForm) {

    form.value.id=this.transId
    this.Jarwis.updatetransferItem(form.value).subscribe(        
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
    // this.router.navigateByUrl('/Admin/(side:catacturer');
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }

}
