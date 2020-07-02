
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-team-review',
  templateUrl: './team-review.component.html',
  styleUrls: ['./team-review.component.css']
})
export class TeamReviewComponent implements OnInit {
  name:any;
  description:any;
  user: any;
  sender_id: any;
  role: any;
  dept_id: any;
  user_id: any;
  teams: any;
  team_id:any
  appoint_id: any;
  members: any;
  team_reviews: any;
  reviw_admin:any;
  review_members:any;
  review_messages:any
  constructor(
    private Chat:ChatService,
    public Jarwis:JarwisService
  ) { 
    this.Chat.TeamRiviewCreated().subscribe(
      data=>{
        console.log(data)
        this.members = data.members
      }
    )
    this.Chat.allReview().subscribe(
      data=>{
        this.team_reviews = data;
        console.log(this.team_reviews)
      }
    )
    this.Chat.rievewDetails().subscribe(
      data=>{
        console.log(data)
    this.reviw_admin = data.admin[0];
    this.members = data.members;
    this.review_members = data.messages;
      }
    )
  }

  ngOnInit() {
    this.Jarwis.profile().subscribe(
      data=>{
        this.user = data;
        this.user_id = this.user.aut.id;
        this.Chat.fetchReview(this.user_id)
        // console.log(this.user.aut)
      }
    )
    this.Jarwis.fetchteam().subscribe(
      data=>{
         let res:any = data;
         this.teams = res;
      }
    )
  }
createReview(){
  if(this.user_id && this.team_id){
    this.Chat.createTeamRiview({user_id:this.user_id,name:this.name,description:this.description,appoint_id:3,team_id:this.team_id})
  }
}
reviewMessages(id){
  this.Chat.reviewMessages(id)

}
}
