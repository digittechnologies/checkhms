import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-possition',
  templateUrl: './possition.component.html',
  styleUrls: ['./possition.component.css']
})
export class PossitionComponent implements OnInit {
possitions:any
image_url:any;
  response: any;
  imgLink: any;
  res: any;
  department: any;
  module: any;
  added = [];
  error: any;
  message:any;
  constructor(private Jarwis:JarwisService, public snackBar:MatSnackBar) { }

  ngOnInit() {
    this.image_url = this.Jarwis.imageUrl;
    this.Jarwis.displayAllposition().subscribe(
      data=>{
       this.possitions = data;

      }
    )
    this.Jarwis.displayDepartments().subscribe(
      data=>{
       this.res = data;
       this.department = this.res;

      }
    )
    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
  }
  modules(id){
   this.Jarwis.getmodules(id.target.value).subscribe(
     data=>{
       let res:any = data;
       this.module = res;
     }
   )
  }
  onSubmit(form:NgForm){
    this.Jarwis.Addposition(form.value).subscribe(
      data=>{
        let response:any = data;
        console.log(data)
        if (response) {
          this.Jarwis.AddpositionModules({id:response,modules:this.added}).subscribe(
            data=>{
              let res:any = data
              this.message = res;
              this.handleResponse(this.message.message)
            }
          )
          
        }
      }
    )

  }
  chek(data){

      let index = this.added.indexOf(data)
      if (index>=0) {
        this.added.splice(index,1)
      }else{
        this.added.push(data);
      }
  }
  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open(data, 'Dismiss', {
      duration: 2000
    })
    // this.router.navigateByUrl('');
    this.ngOnInit();
    
  }

  handleError(error) {
    let snackBarRef = this.snackBar.open(error, 'Dismiss', {
      duration: 2000

    })
    
  }
 

}
