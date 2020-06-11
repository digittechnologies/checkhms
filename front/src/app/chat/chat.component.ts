import { Component, OnInit,OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';
import { JarwisService } from '../service/jarwis.service';
import { MatSnackBar } from '@angular/material';
import { NgxNotificationService } from 'ngx-notification';
declare var $:any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnDestroy {
  chat_users:any;
  user:any;
  sender_id:any;
  receiver_id:any;
  message:String;
  private_messages:any;
  Numunread:any
  receiver_image:any;
  lists:Boolean=true;
  chats:Boolean=false;
  groups:Boolean=false
  group_chats:Boolean=false;
  group_setting:Boolean=false;
  name;
  description;
  group_id:any;
  allgroups:any
  admin_id:any
  groupmessage
  userstoadd:any
  receiveMessageChange:Array<{sender:Number, message:String,receiver:Number,firstname:String,lastname:String,image:String}>=[]
  receiveMessage:Array<{sender:Number, message:String,receiver:Number,firstname:String,lastname:String,image:String}>=[]
  receiveGroupMessage:Array<{sender:Number, message:String,receiver:Number,firstname:String,lastname:String,image:String,group_id:any,group_name:String}>=[]
  receiveGroupMessageChange:Array<{sender:Number, message:String,receiver:Number,firstname:String,lastname:String,image:String,group_id:any,group_name:String}>=[]
  
  role: any;
  dept_id: any;
  private_unread:any;
  group_unread:any;
  group_messages:any;
  groupmembers: number;
  constructor( public chat:ChatService,public Jarwis:JarwisService,public snackBar:MatSnackBar,private ngxNotificationService: NgxNotificationService) {
    this.chat.users().subscribe(
      data=>{
        this.chat_users=data;
      }
    )
    this.chat.usersToAdd().subscribe(
      data=>{
        this.userstoadd=data;
      }
    )
    this.chat.memberAdded().subscribe(
      data=>{
        this.handleResponse(data.message)
        this.chat.Showusers(this.group_id)
      }
    )
 
    this.chat.newMessage().subscribe(
      data=>{
        console.log(data)
        if(data.sender===this.receiver_id){
          this.receiveMessage.push(data)
          this.ngxNotificationService.sendMessage(`You have new message from ${data.firstname}`, 'dark', 'bottom-right');
          this.chat.savePrivateChat({sender:data.sender,message:data.message,receiver:data.receiver,status:"read"})
        }
        else{
          this.ngxNotificationService.sendMessage(`You have new message from ${data.firstname}`, 'dark', 'bottom-right');
          this.chat.savePrivateChat({sender:data.sender,message:data.message,receiver:data.receiver,status:"unread"})
           this.private_unread+=1
        }
      }
    )
    this.chat.senderMessage().subscribe(
      data=>{
        this.receiveMessage.push(data)
      }
    )
    this.chat.readMessages().subscribe(
      data=>{
        if (data) {
          this.chat.unread(this.sender_id) 
        }
      }
    )
    this.chat.readGroupMessages().subscribe(
      data=>{
        if (data) {
         this.chat.readGroupMessage({group_id:this.group_id,user_id:this.sender_id})
        }
      }
    )
    
    this.chat.newGroupMessage().subscribe(
      data=>{
        if (data.group_id === this.group_id) {
          this. receiveGroupMessage.push(data)
          this.chat.saveGroupChat({sender:data.sender,message:data.message,receiver:data.group_id,group_id:data.group_id,status:"read"})
          this.ngxNotificationService.sendMessage(`You have new message from ${data.group_name}`, 'dark', 'bottom-right');
        }
        else{
          this.ngxNotificationService.sendMessage(`You have new message from ${data.group_name}`, 'dark', 'bottom-right');
          this.chat.saveGroupChat({sender:data.sender,message:data.message,receiver:data.receiver,group_id:data.group_id,status:"unread"})
        this.group_unread+=1;
        }
      }
    )
    this.chat.SenderGroupMessage().subscribe(
      data=>{
        this. receiveGroupMessage.push(data)
      }
    )
    this.chat.messages().subscribe(
      data=>{
        this.private_messages=data.rows;
        this.receiver_image=data.receiver[0].image;
      }
    )
    this.chat.groupCreated().subscribe(
      data=>{
        this.handleResponse(data.message)
        this.grou();
      }
    )
    this.chat.allGroups().subscribe(
      data=>{
        this.allgroups=data
      }
    )
    this.chat.newuserjoined().subscribe(
      data=>{
        this.groupmembers+=1;
      }
    )
    this.chat.userleft().subscribe(
      data=>{
        this.groupmembers-=1;

      }
    )
    this.chat.unreadMessages().subscribe(
      data=>{
        this.private_unread = data.private;
        this.group_unread   = data.group;
      }
    )
    this.chat.groupMessages().subscribe(
      data=>{
       this.group_messages = data.message;
      }
    )
   }

  ngOnInit() {
    this.Jarwis.profile().subscribe(
      data=>{
        this.user = data;
        this.sender_id = this.user.aut.id;
        this.role= this.user.aut.role_id;
        this.dept_id=this.user.aut.dept_id;
        // console.log(this.user.aut)
      }
    )
  }
  ngOnDestroy(){

      // alert("we are good")

  }
  grou(){
    this.chat.fetchGroups(this.sender_id)
    this.groups=true;
    this.lists=false;
    this.group_chats=false;
    this.chats=false;
    this.group_setting=false;
    this.chat.leftGroup(this.group_id)
    this.group_id = 0;
  }
  disconnect(){
    return this.sender_id;
  }
  chat_one(id){
    this.chat.privatechat({sender:this.sender_id,receiver:id})
    this.chat.displayMessage({sender:this.sender_id,receiver:id})
    this.receiver_id = id;
    this.chats=true;
    this.lists=false;
    this.group_chats=false;
    this.groups=false;
    this.group_setting=false;
    this.group_id = 0;
    this.chat.readMessage({sender:this.sender_id,receiver:id})
  }
  group_chat(e,admin){
    this.chat.joinGroup(e)
    this.chat.readGroupMessage({group_id:e,user_id:this.sender_id})
    this.chat.groupMessage({group_id:e,user:this.sender_id})
    this.group_id=e;
    console.log(e)
    this.admin_id=admin;
    this.lists=false;
    this.chats=false;
    this.groups=false;
    this.group_chats=true;
    this.group_setting=false;
  }
  group_settings(){
    this.lists=false;
    this.chats=false;
    this.groups=false;
    this.group_chats=false;
    this.group_setting=true;
    this.chat.Showusers(this.group_id)
  }
  lis(){
    this.chat.leftGroup(this.group_id)
    this.lists=true;
    this.chats=false;
    this.groups=false;
    this.group_chats=false;
    this.group_setting=false;
    this.group_id = 0;
     this.receiveMessage = this.receiveMessageChange ;
     this.receiveGroupMessage =this.receiveGroupMessageChange
  }
  Addmembers(){
    this.chat.Showusers(this.group_id)
  }
  addMember(id){
  this.chat.addmember({user:id,group:this.group_id,admin:this.sender_id})
  }
send(){
  if (this.message !='') {
    this.chat.privatechat({sender:this.sender_id,receiver:this.receiver_id})
    this.chat.sendMessage({sender:this.sender_id,message:this.message,receiver:this.receiver_id})
    this.message=''
  }
}
sendMessage(){
this.chat.sendGroupMessage({sender:this.sender_id,message:this.groupmessage,group_id:this.group_id})
}
create(){
  if (this.name !="") {
    this.chat.createGroup({name:this.name,description:this.description,admin:this.sender_id})
  }
}
handleResponse(data) {    // 
  let snackBarRef = this.snackBar.open(data, 'Dismiss', {
    duration: 2000
  })
}
}
