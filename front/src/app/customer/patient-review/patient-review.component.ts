import { Component, OnInit,OnDestroy,HostListener} from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ChatService } from 'src/app/service/chat.service';
declare let c3 : any;
declare let jQuery: any;
declare let $ : any;
declare var test3: any;
declare var test4: any;

@Component({
  selector: 'app-patient-review',
  templateUrl: './patient-review.component.html',
  styleUrls: ['./patient-review.component.css']
})
export class PatientReviewComponent implements OnInit,OnDestroy {

  appId: string;
  patientResponse: any;
  pat: any;
  patID: any;
  schemeCat: any;
  schemeId: any;
  schemePercent: any;
  schemePercentToView: number;
  schemePriceList: any;
  response: any;
  imgLink: any;
  patient_image: any;
  name: any;
  othername: any;
  gender: any;
  age: any;
  card_number: any;
  user: any;
  user_id: any;
  teams: any;
  team_id: any;
  description: any;
  members: any;
  team_reviews:{rows :any};
  reviw_admin: any;
  review_id: any;
  message:any;
  copiedMessage=''
  reviewMessage:Array<{sender:any, message:String,firstname:String,lastname:String,image:String,team_review_id:any,copied:any,date:any,time:any}>=[]
  team_review_id: any;
  review_messages: any;
  datas: any;
  p:any;

  constructor(   private Jarwis: JarwisService,
    private Chat:ChatService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
    ) {
      this.Chat.TeamRiviewCreated().subscribe(
        data=>{
          console.log(data)
          this.ngOnInit()
        }
      )
      this.Chat.allReview().subscribe(
        data=>{
          this.team_reviews = data[0];
          // this.review_id =data.rows.row;
          console.log(this.team_reviews);
        }
      )
      this.Chat.rievewDetails().subscribe(
        data=>{
          console.log(data)
      this.reviw_admin = data.admin[0];
      this.members = data.members;
      this.review_messages = data.messages;
        this.Chat.joinedReview().subscribe(
          data=>{
            console.log(data)
            let join = this.members.find(e=>{
              return e.id === data.user_id;
            })
            join.reviews_status = data.message;
          }
        )
        }
      )
      this.Chat.userleftReview().subscribe(
        data=>{
          console.log(data)
          let join = this.members.find(e=>{
            return e.id === data.user_id;
          })
          join.reviews_status = data.message;
        }
      )
      this.Chat.online().subscribe(
        data=>{
          console.info(data)
        let index =  this.members.find(e=>{
            return e.id === data.id;
          })
          if (index) {
            index.online_status = data.status
          }
        }
      )
      this.Chat.offline().subscribe(
        data=>{
          console.info(data)
        let index =  this.members.find(e=>{
            return e.id === data.id;
          })
          if (index) {
            index.online_status = data.status
          }
        }
      )
      this.Chat.newReviewMessage().subscribe(
        data=>{
          console.log(data)
          this.reviewMessage.push(data)
        }
      )
      this.Chat.SenderReviewMessage().subscribe(
        data=>{
          console.log(data)
          this.reviewMessage.push(data)
        }
      )
   
     }

  ngOnInit() {

    new test3();
    new test4();
    this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
      this.appId= id;
	    this.Jarwis.patientdetails(id).subscribe(
	      data=>{
	      this.patientResponse = data;      
        this.pat = this.patientResponse;
        this.patID = this.pat[0].id;
        this.schemeCat = this.pat[0].category_name;
        this.schemeId = this.pat[0].n_h_i_s;
        this.schemePercent = this.pat[0].pacentage_value;
        this.schemePercentToView = 100 -this.pat[0].pacentage_value;
        this.schemePriceList = this.pat[0].price_list_column;
        this.patient_image = this.pat[0].patient_image;
        this.name = this.pat[0].name;
        this.othername = this.pat[0].othername;
        this.gender = this.pat[0].gender;
        this.age = this.pat[0].age;
        this.card_number = this.pat[0].card_number

	    })
  }))
  this.Jarwis.profile().subscribe(
    data=>{
      this.user = data;
      this.user_id = this.user.aut.id;
      this.Chat.fetchReview({user_id:this.user_id,app_id:this.appId})
      // console.log(this.user.aut)
    }
  )
  this.Jarwis.fetchteam().subscribe(
    data=>{
       let res:any = data;
       this.teams = res;
    }
  )
  this.Jarwis. generalSettings().subscribe(
    data=>{
    this.response = data;      
    this.imgLink = this.response[0].app_url;
  })
  
  }
  left(){

  }
  //TEAM REVIEW START
  createReview(){
    if(this.user_id && this.team_id){
      this.Chat.createTeamRiview({user_id:this.user_id,name:this.name,description:this.description,appoint_id:this.appId,team_id:this.team_id})
    }
  }
  reviewMessages(id){
    if(id){
      this.team_review_id = id
      this.Chat.reviewMessages(id)
      this.Chat.joinReview({user_id:this.user_id,team:id});
    }
  }
  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    this.Chat.leftReview({user_id:this.user_id,team:this.team_review_id})
}
  copyMessage(message){
    this.copiedMessage = message.slice(0,20)+'........'
    console.log(this.copiedMessage)
  }
  cancelCopied(){
    this.copiedMessage = '';
  }
  send(){
    if (this.message) {
      this.Chat.sendReviewMessage({sender:this.user_id,team_review_id:this.team_review_id,message:this.message,copied:this.copiedMessage})
      this.message = ''
      this.copiedMessage = ''
    }
  }
  // TEAM REVIEW END

  // ENCOUTER START
  encouter(id){
    console.log({position_id:id,appointment_id:this.appId})
    this.Jarwis.processResult({position_id:id,appointment_id:this.appId}).subscribe(
      data=>{
        console.log(data)
        let res:any =data
        if(res.datas != ''){
        for (let index = 0; index < res.datas.length; index++) {
          let dt:any = res.datas[index];
          if (dt.value_option) {
            let vp = JSON.parse(dt.value_option)
            dt.value_option = vp
          }
          else{
            dt.value_option=''
          }
        }
        this.datas = res.datas;
          //   const groups =  res.datas.reduce((groups, game) => {
          //     const date = game.process_attribute_id;
          //     if (!groups[date]) {
          //       groups[date] = [];
          //     }
          //     groups[date].push(game);
          //     return groups;
          //   }, {});
          //   // console.log(groups);

          //   // Edit: to add it in the array format instead
          //   const groupArrays = Object.keys(groups).map((date) => {
          //     return {
          //       date,
          //       games: groups[date]
          //     };
          //   });
          //  this.datas = groupArrays
          //   console.log(this.datas);
        }
      }
    )
  }

}

