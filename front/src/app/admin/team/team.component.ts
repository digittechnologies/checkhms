import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JarwisService } from 'src/app/service/jarwis.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: any;
  centers: any;
  id: any;
  response: any;
  editName: any;
  editDescription: any;
  editDepartment: any;
  editDept_id: any;
  delete_id: any;
  editCenter: any;
  editCenter_id: any;

  constructor(
    public Jarwis:JarwisService,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit() {
    this.Jarwis.Teams().subscribe(
      data=>{
        let response:any =  data;
       this.teams = response.teams;
       this.centers = response.centers;
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
     this.editName = this.response.team_name;
     this.editDescription = this.response.description;
     this.editCenter = this.response.centerName;
     this.editCenter_id = this.response.center_id
     console.log(this.editDepartment)
     
   }
 )
  }

  Edit(form:NgForm){
    if(form.value.center_tb_id==''){
      form.value.center_tb_id = this.editCenter_id
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
