import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JarwisService } from 'src/app/service/jarwis.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  center_type: any;
  departments: any;
  id: any;
  response: any;
  editName: any;
  editDescription: any;
  editDepartment: any;
  editDept_id: any;
  delete_id: any;
  ranks:any;

  constructor(public Jarwis:JarwisService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.Jarwis.Ranks().subscribe(
      data=>{
        let response:any =  data;
       this.ranks = response.ranks;
       this.departments = response.departments;
      }
    )
    // this.Jarwis.displayDepartments().subscribe(
    //   data=>{
    //     console.log(data)
    //   }
    // )
  }
  onSubmit(form:NgForm){
    this.Jarwis.AddRank(form.value).subscribe(
    data=>{
      if(data){
        this.ngOnInit()
        this.handllResponse("Operation Successfull")
      }
    }
    )

  }
  editranck(id){
    this.id = id
    console.log(id)
 this.Jarwis.editingRank(id).subscribe(
   data=>{
     this.response = data[0];
     this.editName = this.response.rank_name;
     this.editDescription = this.response.description;
     this.editDepartment = this.response.deptname;
     this.editDept_id = this.response.dept_id
     console.log(this.editDepartment)
     
   }
 )
  }

  Edit(form:NgForm){
    if(form.value.dept_id==''){
      form.value.dept_id = this.editDept_id
    }
    this.Jarwis.editRank({form:form.value,id:this.id}).subscribe(
      data=>{
        this.ngOnInit();
        this.handllResponse("Operation Successfull")

      }
    )
  }
  onDelete(id){
    this.delete_id = id;
  }
   delete(){
    this.Jarwis.deleteRank(this.delete_id).subscribe(
      data=>{
        this.ngOnInit()
      }
    )
  }
  handllResponse(data){
    this.snackBar.open(data,'Dismiss')
  }


}
