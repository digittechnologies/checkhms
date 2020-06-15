import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  Jarwis: any;
  ranks: any;
  departments: any;
  id: any;
  response: any;
  editName: any;
  editDescription: any;
  editDepartment: any;
  editDept_id: any;
  delete_id: any;

  constructor() { }

  ngOnInit() {
    this.Jarwis.Teams().subscribe(
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
    this.Jarwis.AddTeam(form.value).subscribe(
    data=>{
      if(data){
        this.ngOnInit()
      }
    }
    )

  }
  editTeam(id){
    this.id = id
    console.log(id)
 this.Jarwis.editingTeam(id).subscribe(
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
    this.Jarwis.editTeam({form:form.value,id:this.id}).subscribe(
      data=>{
        this.ngOnInit();
      }
    )
  }
  onDelete(id){
    this.delete_id = id;
  }
   delete(){
    this.Jarwis.deleteTeam(this.delete_id).subscribe(
      data=>{
        this.ngOnInit()
      }
    )
  }


}
