import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from 'rxjs';
import { JarwisService } from './jarwis.service';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket,private Jarwis:JarwisService) {}
// joinroom(){
//   this.socket.emit('connected')
// }
// joinroom(){
//   let observable = new Observable<{message}>(observer=>{
//     this.socket.on('connected',(data)=>{
//       observer.next(data);
//     })
//     return ()=>{this.socket.disconnect()}
//   })
//   return observable;
// }
// leftroom(){
//   let observable = new Observable<{message}>(observer=>{
//     this.socket.on('left',(data)=>{
//       observer.next(data);
//     })
//     return ()=>{this.socket.disconnect()}
//   })
//   return observable;
// }
user(data){
  this.socket.emit('user',data)
}
users(){
  let observable = new Observable<{users}>(observer=>{
    this.socket.on('users',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
  })
  return observable;
}
privatechat(data){  
  this.socket.emit('privatechatroom',data)
}
conn(data){  
  console.log(data)
  this.socket.emit('conn',data)
}
connected(){
  let observable = new Observable<{status:String,id:Number}>(observer=>{
    this.socket.on('connected',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
disconne(data){  
  this.socket.emit('disconn',data)
}
sendMessage(msg){
  this.socket.emit("message",msg);
}
typing(data){
this.socket.emit("typing",data)
}
grouptyping(data){
  this.socket.emit("grouptyping",data)
  }
newMessage(){
  let observable = new Observable<{sender:any, message:String,receiver:any,firstname:String,lastname:String,image:String}>(observer=>{
    this.socket.on('new message',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
senderMessage(){
  let observable = new Observable<{sender:any, message:String,receiver:any,firstname:String,lastname:String,image:String}>(observer=>{
    this.socket.on('sender friendmessage',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
savePrivateChat(data){
  this.socket.emit("save privte chat",data)
}

displayMessage(data){
  this.socket.emit('display message',data)
}
messages(){
  let observable = new Observable<{receiver:any,rows:any}>(observer=>{
    this.socket.on('messages',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
createGroup(data){
  this.socket.emit('create group',data)
}
groupCreated(){
  let observable = new Observable<{message:String}>(observer=>{
    this.socket.on('group created',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
addmember(data){
 this.socket.emit("add member",data)
}
memberAdded(){
  let observable = new Observable<{message:String}>(observer=>{
    this.socket.on('member added',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
fetchGroups(data){
  this.socket.emit("fetch groups",data)
}
allGroups(){
  let observable = new Observable<{message:String}>(observer=>{
    this.socket.on('allgroups',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
joinGroup(data){
 this.socket.emit("joinGroup",data)
}
newuserjoined(){
  let observable = new Observable<{message:String}>(observer=>{
    this.socket.on('joined',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
leftGroup(data){
  this.socket.emit("left",data)
 }
userleft(){
  let observable = new Observable<{message:String}>(observer=>{
    this.socket.on('left room',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
sendGroupMessage(msg){
  this.socket.emit("group message",msg);
}
newGroupMessage(){
  let observable = new Observable<{sender:any, message:String,receiver:any,firstname:String,lastname:String,image:String,group_id:any,group_name:String}>(observer=>{
    this.socket.on('new groupmessage',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
SenderGroupMessage(){
  let observable = new Observable<{sender:any, message:String,receiver:any,firstname:String,lastname:String,image:String,group_id:any,group_name:String}>(observer=>{
    this.socket.on('sender groupmessage',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
saveGroupChat(data){
  this.socket.emit("save group chat",data)
}
Showusers(data){
  this.socket.emit("show users",data)
}
usersToAdd(){
  let observable = new Observable<{rows}>(observer=>{
    this.socket.on('users to add',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
unread(data){
  this.socket.emit("unread",data)
}
unreadMessages(){
  let observable = new Observable<{private:any,group:any}>(observer=>{
    this.socket.on('unreads',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}

readMessage(data){
  this.socket.emit("read message",data)
}
readMessages(){
  let observable = new Observable<{message:string}>(observer=>{
    this.socket.on('message has been read',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
readGroupMessage(data){
  this.socket.emit("read group message",data)
}
readGroupMessages(){
  let observable = new Observable<{message:String}>(observer=>{
    this.socket.on('gorup message has been read',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
groupMessage(data){
  this.socket.emit("fetch group message",data)
}
groupMessages(){
  let observable = new Observable<{message:any}>(observer=>{
    this.socket.on("fetched group messages",(data)=>{
      observer.next(data)
    })
    return ()=>{this.socket.disconnect()}
  })
  return observable
}








createTeamRiview(data){
  this.socket.emit('create team review',data)
}
 TeamRiviewCreated(){
  let observable = new Observable<{message:String,members:any}>(observer=>{
    this.socket.on('team review created',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
fetchReview(data){
  this.socket.emit("fetch team review",data)
}
allReview(){
  let observable = new Observable<{rows:any}>(observer=>{
    this.socket.on('all team review',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}

reviewMessages(data){
  this.socket.emit("review messages",data)
}
rievewDetails(){
  let observable = new Observable<{admin:any,members:any,messages:any}>(observer=>{
    this.socket.on('review details',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}

joinReview(data){
  this.socket.emit("join review",data)
 }
 joinedReview(){
   let observable = new Observable<{user_id:any,message:String}>(observer=>{
     this.socket.on('joined review',(data)=>{
       observer.next(data);
     })
     return ()=>{this.socket.disconnect()}
     
   })
   return observable;
 }
 leftReview(data){
   this.socket.emit("left review",data)
  }
 userleftReview(){
   let observable = new Observable<{user_id:any,message:String}>(observer=>{
     this.socket.on('left review',(data)=>{
       observer.next(data);
     })
     return ()=>{this.socket.disconnect()}
     
   })
   return observable;
 }
 sendReviewMessage(data){
  this.socket.emit("review message",data);
}
newReviewMessage(){
  let observable = new Observable<{sender:any, message:String,firstname:String,lastname:String,image:String,team_review_id:any,copied:any,date:any,time:any}>(observer=>{
    this.socket.on('new reviewmessage',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
SenderReviewMessage(){
  let observable = new Observable<{sender:any, message:String,firstname:String,lastname:String,image:String,team_review_id:any,copied:any,date:any,time:any}>(observer=>{
    this.socket.on('sender reviewmessage',(data)=>{
      observer.next(data);
    })
    return ()=>{this.socket.disconnect()}
    
  })
  return observable;
}
}
