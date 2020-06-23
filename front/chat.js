'use strict'
const express  = require('express');
const mysql = require('mysql')
const app = express();
const bodyparser = require('body-parser')
const cors = require('cors')
app.use(cors({origin:"*"}));
// const path = require('path')

var user_id;
var client_id = [];
// app.use(cors({origin:"*"}));
app.use(bodyparser.json())
// app.use(express.static(path))

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'buth_pharmacy',
  port: 3306,
  multipleStatements: true
});

  mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });
    const port = process.env.PORT || 8080;
const server = app.listen(port, () => console.log(`Listening on port ${port}..`));

const io = require('socket.io')(server);
io.on("connection", (socket) => {
  socket.on("conn",(data)=>{
    function id(){
      return data
    }
    var info = client_id.find(id)
    if (!info) {
      client_id.push(data)
   }
    var sql = "UPDATE users SET online_status = 'online' WHERE id = ?";
    user_id=data
    mysqlConnection.query(sql,[data],function(err,res){
      if (!err) {
        socket.broadcast.emit("connected",{status:"online",id:data})
      }
    })
  })
  socket.on('user',(data)=>{
   var user=[]
   var sql =`SELECT * FROM users WHERE id != ${data}`
    mysqlConnection.query(sql, (err, rows, fields) => {
      if (!err){
        rows.map(d=> {
          var sql2=`SELECT COUNT(id) AS unread FROM private_chat WHERE sender = ${d.id} AND sender = ${d.id} AND receiver =${data} AND status='unread'`
          mysqlConnection.query(sql2, async(err,res, fields) => {
            if (!err) {
              user.push({user:d,row:res[0]})
            }
            else{
              user.push({user:d,row:''})
            }
            socket.emit('users',user)
          })
        })
      }
      })
  })
  socket.on('privatechatroom',function(data){
    socket.join(data.sender);
    socket.emit('sender online',{online:data.reciever})
   socket.broadcast.to(data.reciever).emit('online',{online:data.sender})
  })

  socket.on('message',(data)=>{
    var info = client_id.find(id=>{
         return data.receiver ===id;
    })
    var sender_id = data.sender;
    var sql ="SELECT firstname,lastname,image FROM users WHERE id = ?"
    if (info) {
      io.in(data.sender,
        mysqlConnection.query(sql,[sender_id],function(err,rese){
         let res = rese[0]
        socket.emit('sender friendmessage',{sender:data.sender,message:data.message,receiver:data.receiver,firstname:res.firstname,lastname:res.lastname,image:res.image}),
        socket.broadcast.to(data.receiver).emit("new message",{sender:data.sender,message:data.message,receiver:data.receiver,firstname:res.firstname,lastname:res.lastname,image:res.image})
      })); 
    } 
    else  {
      console.log("noot")
      io.in(data.sender,
        mysqlConnection.query(sql,[sender_id],function(err,rese){
          let res = rese[0]
          let date_ob = new Date();
          let date = ("0" + date_ob.getDate()).slice(-2);
          // current month
          let month = date_ob.toLocaleString('default', { month: 'long' });
         // current year
         let year = date_ob.getFullYear();
         //current hour
         let hours = date_ob.getHours();
         if (hours < 10) {
           hours  = "0"+hours;
         }
         //current minutes
         let minutes = date_ob.getMinutes();
         if (minutes < 10) {
          minutes  = "0"+minutes;
        }
         console.log(hours+':'+minutes)
         var time = hours+":"+minutes;
         var fullDate =month+' '+date+','+' '+year
        socket.emit('sender friendmessage',{sender:data.sender,message:data.message,receiver:data.receiver,firstname:res.firstname,lastname:res.lastname,image:res.image});
        var sql = "INSERT INTO private_chat (sender,message,receiver,status,date,time) VALUES (?)";
        var values = [data.sender,data.message,data.receiver,"unread",fullDate,time]
        mysqlConnection.query(sql,[values],function (err, result) {
       if (err) throw err;
       })

        })
        )
    }
  })
  socket.on("save privte chat",(data)=>{
 var sql = "INSERT INTO private_chat (sender,message,receiver,status,date,time) VALUES (?)";
 let date_ob = new Date();
 let date = ("0" + date_ob.getDate()).slice(-2);
 // current month
 let month = date_ob.toLocaleString('default', { month: 'long' });
// current year
let year = date_ob.getFullYear();
//current hour
let hours = date_ob.getHours();
//current minutes
let minutes = date_ob.getMinutes();
console.log(hours+':'+minutes)
var time = hours+":"+minutes;
var fullDate =month+' '+date+','+' '+year
    var values =  
      [data.sender,data.message,data.receiver,data.status,fullDate,time]
    mysqlConnection.query(sql,[values],function (err, result) {
    if (err) throw err;
    })
  })
  socket.on("read message",(data)=>{
    console.log(data)
    var sql = `UPDATE private_chat SET status = 'read' WHERE sender = ${data.receiver} AND receiver = ${data.sender} AND status = 'unread'`;
    console.log(data)
    mysqlConnection.query(sql,(err,response)=>{
      if (!err) {
        console.log(response)
        socket.emit("message has been read" ,{message:"message has been read"})
      }
      else{
        console.log(err)
      }
    })
  })
  
  // SELECT * FROM Customers
  // WHERE Country='Germany' AND (City='Berlin' OR City='München');
  socket.on('display message',async(data)=>{
    var sql=`SELECT * FROM private_chat WHERE sender = ${data.sender} AND receiver = ${data.receiver} OR (sender = ${data.receiver} AND  receiver = ${data.sender})`
    mysqlConnection.query(sql,(err, rows, fields) => {
      if (!err){
        var sq=`SELECT firstname,lastname,image FROM users WHERE id= ${data.receiver}`
        mysqlConnection.query(sq,(err, res, fields) => {
          if (!err) {
        var unread = `SELECT COUNT(id) FROM private_chat WHERE  sender = ${data.receiver} AND  receiver = ${data.sender} AND status=unread`
        mysqlConnection.query(unread,(err, unreads, fields) => {
            socket.emit('messages',{receiver:res, rows:rows,unread:unreads})
        })
          }
        })
        // {sender:data.sender,message:data.message,receiver:data.receiver,firstname:res.firstname,lastname:res.lastname,image:res.image}
      }
      })

  })
  socket.on("create group",(data)=>{
    var sql = `INSERT INTO groups (admin,name, description,image) VALUES ('${data.admin}', '${data.name}','${data.description}',' 'group1.png')`;
    mysqlConnection.query(sql,async(err,res)=>{
      if (!err) {
        var sq=`SELECT MAX(id) AS id FROM groups WHERE admin = ${data.admin}`
        mysqlConnection.query(sq,(err, res, fields) => {
          var sql2 = `INSERT INTO groupmembers (user,group_id,admin_id,status) VALUES ('${data.admin}', '${res[0].id}','${data.admin}','active')`;
          mysqlConnection.query(sql2,(err,res)=>{
            if (!err) {
              socket.emit('group created',{message:'Group created successefuly'})
            }
           })
        })
     }
    })
  })
  socket.on("show users",(data)=>{
    // var sql=`SELECT users.* FROM users WHERE id != ${data.user}`;
    // var sql3=`SELECT users.* FROM users JOIN groupmembers  WHERE groupmembers.user !=${data.user} AND groupmembers.group_id != ${data.group_id}` ;
    // var sql2=`SELECT users.* FROM users WHERE id NOT IN (SELECT  groupmembers.* FROM groupmembers WHERE groupmembers.user !=${data.user} AND groupmembers.group_id != ${data.group_id})`;
    var sql4 =   `SELECT users.*  FROM users WHERE id NOT IN (SELECT user FROM groupmembers WHERE group_id = ${data})`
      mysqlConnection.query(sql4,(err,rows)=>{
      if (!err) {
        socket.emit('users to add',rows)
      }
     })
  })
  socket.on("add member",(data)=>{
    var sql = `INSERT INTO groupmembers (user,group_id,admin_id,status) VALUES ('${data.user}', '${data.group}',${data.admin},'active')`;
    mysqlConnection.query(sql,(err,res)=>{
      if (!err) {
        var sql2 = `SELECT firstname FROM users WHERE id = ${data.user}`
        mysqlConnection.query(sql2,(err,res)=>{
       socket.emit('member added',{message: res[0].firstname+' '+ 'is now your group memeber'})
    })
     }
     else{console.log(err)}
    })
  })
  socket.on("fetch groups",(data)=>{
    var groups = []
  var sql=`SELECT groupmembers.*,groups.* FROM groupmembers LEFT JOIN groups ON  groupmembers.group_id = groups.id  WHERE groupmembers.user = ${data}`;
      mysqlConnection.query(sql,(err,rows)=>{
        if (!err) {
         rows.map(d=> {
          var sql2=`SELECT COUNT(id) AS unread FROM group_chat WHERE receiver = ${data} AND group_id = ${d.id}  AND status='unread'`
          mysqlConnection.query(sql2, async(err,res, fields) => {
            if (!err) {
              groups.push({group:d,row:res[0]})
            }
            else{
              groups.push({user:d,row:''})
            }
            socket.emit('allgroups',groups)
          })
        })
        }
        })
    
  })
  socket.on("joinGroup",(data)=>{
    socket.join(data)
    socket.broadcast.to(data).emit('joined',{message:"new user joined"})
  })
  socket.on('left',(data)=>{
    socket.broadcast.to(data).emit('left room',{message:' has left this group'});
     socket.leave(data);
  })
  socket.on("group message",(data)=>{
    var sq=`SELECT firstname,lastname,image FROM users WHERE id= ${data.sender} `
    var sql=`SELECT user FROM groupmembers WHERE group_id = ${data.group_id}  AND user != ${data.sender}`;
    var groupName=`SELECT name FROM groups WHERE id = ${data.group_id}`;
    mysqlConnection.query(sq,(err, res, fields) => {
      mysqlConnection.query(groupName,(err,groupName)=>{
        let group_name = groupName[0].name;
        io.in(data.sender,
          mysqlConnection.query(sql,(err,result)=>{
        if (!err) {
          var sql = "INSERT INTO group_chat (sender,message,receiver,group_id,status) VALUES (?)";
          var values = [data.sender,data.message,data.group_id,data.group_id,"unread"]
        mysqlConnection.query(sql,[values],function (err,ress) {
        if (err) throw err;
          })
          socket.emit('sender groupmessage',{sender:data.sender,message:data.message,receiver:data.sender,firstname:res.firstname,lastname:res.lastname,image:res.image,group_id:data.group_id,group_name:group_name}),
          result.map(s=>{
          function id(){
            return s.user
          }
          var info = client_id.find(id)
          if (info) {
            socket.broadcast.to(s.user).emit("new groupmessage",{sender:data.sender,message:data.message,receiver:s.user,firstname:res.firstname,lastname:res.lastname,image:res.image,group_id:data.group_id,group_name:group_name})         
          } else {
            var sql3 = "INSERT INTO group_chat (sender,message,receiver,group_id,status) VALUES (?)";
            var values = [data.sender,data.message,s.user,data.group_id,"unread"]
          mysqlConnection.query(sql3,[values],function (err, result) {
          if (err) throw err;
          })
          }
            })
          }
        })
        )
      })
    })
    
  })
  socket.on("save group chat",(data)=>{
    console.log(data)
 var sql = "INSERT INTO group_chat (sender,message,receiver,group_id,status) VALUES (?)";
    var values = [data.sender,data.message,data.receiver,data.group_id,data.status]
    mysqlConnection.query(sql,[values],function (err, result) {
    if (err) throw err;
    })
  })
  socket.on('unread',(data)=>{
    var sql = `SELECT COUNT(id) AS unreadp  FROM private_chat WHERE receiver =${data} AND status = 'unread'`
    var sql2 = `SELECT COUNT(id) AS unreadg  FROM group_chat WHERE receiver =${data} AND status = 'unread'`
    mysqlConnection.query(sql,(err,res)=>{
      mysqlConnection.query(sql2,(err,row)=>{
        socket.emit('unreads',{private:res[0].unreadp,group:row[0].unreadg})
      })
    })
  })
  socket.on("read group message",(data)=>{
    var sql = `UPDATE group_chat SET status = 'read' WHERE receiver = ${data.user} AND group_id = ${data.group_id} AND status = 'unread'`;
   mysqlConnection.query(sql,(err,response)=>{
     if (!err) {
       socket.emit("gorup message has been read",{message:"read"})
     }
   })
  })
  socket.on("fetch group message",(data)=>{
    var sql1 = `DELETE FROM group_chat WHERE receiver = ${data.user} AND group_id = ${data.group_id}`
    mysqlConnection.query(sql1,(err,result)=>{
    if (!err) {
      var sql = `SELECT group_chat.*, users.firstname,users.image FROM group_chat JOIN users ON group_chat.sender = users.id WHERE group_chat.receiver = ${data.group_id} AND group_chat.group_id = ${data.group_id}`
    mysqlConnection.query(sql,(err,res)=>{
      if (!err) {
        socket.emit("fetched group messages",{message:res})
      }
    })
      
    }
    })
  })
  socket.on("disconn",(data)=>{
   var sql = "UPDATE users SET online_status = 'offline' WHERE id = ?";
    mysqlConnection.query(sql,[data],function(err,res){
      if (!err) {
      }
    })
  })
  // socket.on("disconnect",(data)=>{
  //   console.log(io)
  // })
})

  