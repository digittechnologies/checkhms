import { Component, OnInit, ElementRef,OnDestroy, HostListener } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { ChatService } from 'src/app/service/chat.service';
import { Page } from 'ngx-pagination/dist/pagination-controls.directive';
import { Subscription } from 'rxjs';

declare let jQuery: any;
declare let $ : any;
declare let particlesJS : any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  res: any;
  response: any;
  pos: any;
  allPos: any;
  pharmacist: any;
  cashier: any;
  physician: any;
  admin: any;
  card: any;
  image: any;
  name: any;
  fname: any;
  lname: any;
  moduleResponse: Object;
  module: Object;
  laboratory: any;
  hms: any;
  pharmacy: any;
  radiology: any;
  doctor: any;
  roleResponse:any;
  role: any;
  super: any;
  global: any;
  center: any;
  user: any;
  home: string;
  imgLink: any;
  pstatus = 'active';
  roleD: any;
  shorName: any;
  records: any;
  position: any;
  department:any;
  departments: any;
  change_module: any;
  record= true;
  clinic=false;
  pharm=false;
  invest=false;
  revenue=false;
  module_name: any;
  user_id: any;
  unread: any;
  components:any;
  write:String;
  constructor(
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private elementRef: ElementRef,
    public chat:ChatService,
    public routes:ActivatedRoute
    // public subscription:Subscription
  ) {
    this.chat.unreadMessages().subscribe(
      data=>{
        this.unread = data.private+data.group;
     }
    )
  }
  ngOnInit() {
    // location.reload()
    const abc = this.routes.snapshot.params['abc'];
    this.Jarwis.profile().subscribe(
      data=>{
        // console.log(data)    
      this.response = data;
      this.pos= this.response.det[0].position_id
      this.image= this.response.det[0].image
      this.fname= this.response.det[0].firstname
      this.lname= this.response.det[0].lastname   
      this.role= this.response.det[0].role_id
      this.components = this.response.module
      this.position= this.response.det[0].dept_id
      let user_id =this.response.det[0].id
      this.user_id = user_id
      this.department=this.response.det[0].dept_id;
      this.chat.conn(this.user_id)
      this.chat.privatechat({sender:this.user_id})
      this.chat.user(this.user_id)
      this.chat.unread(this.user_id)
      // window.localStorage.department=JSON.stringify(this.department)
      this.home = this.response.det[0].nameD +'-'+ this.response.det[0].role_name;
      this.module_name= this.response.det[0].module
    })

    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
      this.shorName = this.response[0].short_name;
    })
    
    
    this.Jarwis.displayAllposition().subscribe(
      data=>{
       
      this.response = data
      this.allPos= this.response
      this.pharmacist=this.allPos[0].id
      this.cashier=this.allPos[1].id
      this.physician=this.allPos[2].id
      this.admin=this.allPos[3].id
      this.records=this.allPos[5].id

    })

    this.Jarwis.displayModule().subscribe(
      data=>{   
      this.moduleResponse = data
      this.module= this.moduleResponse
      this.hms=this.module[0].status
      this.pstatus=this.module[1].status
   
      this.laboratory=this.module[2]
      this.radiology=this.module[3]
      this.doctor=this.module[4].status

    })

    this.Jarwis.displayRole().subscribe(
      data=>{      
      this.roleResponse = data
      this.roleD= this.roleResponse.roles
      this.super=this.roleD[0].id
      console.log(this.roleD[0].id)
      this.global=this.roleD[1].id
      this.center=this.roleD[2].id
      this.user=this.roleD[3].id
    })
    this.Jarwis.displayDepartments().subscribe(
      data=>{
        let res = data
        this.departments =res;
      }
    )

    function myFunction(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("myBar").style.width=e+"%"}function initSparkline(){$(".sparkline").each(function(){var e=$(this);e.sparkline("html",e.data())}),$(".sparkbar").sparkline("html",{type:"bar"})}function skinChanger(){$(".choose-skin li").on("click",function(){var e=$("body"),t=$(this),n=$(".choose-skin li.active").data("theme");$(".choose-skin li").removeClass("active"),e.removeClass("theme-"+n),t.addClass("active");$(".choose-skin li.active").data("theme");e.addClass("theme-"+t.data("theme"))})}$(function(){"use strict";skinChanger(),initSparkline(),setTimeout(function(){$(".page-loader-wrapper").fadeOut()},50),$(window).on("load resize",function(){$(window).innerWidth()<1201?$(".mini-sidebar-btn, .hmenu-btn").attr("disabled","disabled"):$(".mini-sidebar-btn, .hmenu-btn").removeAttr("disabled","disabled")}),$(window).bind("resize",function(){console.log($(this).width()),$(this).width()<1201?$("body.box_layout").removeClass("h-menu"):$("body.box_layout").addClass("h-menu")}).trigger("resize");var e=function(){for(var e=new Array(20),t=0;t<e.length;t++)e[t]=[5+n(),10+n(),15+n(),20+n(),30+n(),35+n(),40+n(),45+n(),50+n()];return e}(),t={type:"bar",barWidth:3,height:15,barColor:"#0E9BE2"};function n(){return Math.floor(80*Math.random())}$("#mini-bar-chart1").sparkline(e[0],t),t.barColor="#7CAC25",$("#mini-bar-chart2").sparkline(e[1],t),t.barColor="#FF4402",$("#mini-bar-chart3").sparkline(e[2],t),t.barColor="#ff9800"}),window.onscroll=function(){myFunction()},$(document).ready(function(){$("#main-menu").metisMenu(),$("#left-sidebar .sidebar-scroll").slimScroll({height:"calc(100vh - 65px)",wheelStep:10,touchScrollStep:50,color:"#1c222c",size:"2px",borderRadius:"3px",alwaysVisible:!1,position:"right"}),$(".btn-toggle-fullwidth").on("click",function(){$("body").hasClass("layout-fullwidth")?$("body").removeClass("layout-fullwidth"):$("body").addClass("layout-fullwidth"),$(this).find(".fa").toggleClass("fa-arrow-left fa-arrow-right")}),$(".btn-toggle-offcanvas").on("click",function(){$("body").toggleClass("offcanvas-active")}),$("#main-content").on("click",function(){$("body").removeClass("offcanvas-active")}),$(".right_toggle, .overlay").on("click",function(){$("#rightbar").toggleClass("open"),$(".overlay").toggleClass("open")}),$(".themesetting .theme_btn").on("click",function(){$(".themesetting").toggleClass("open")}),$(".search_toggle").on("click",function(){$(".search_div").toggleClass("open")}),$(".megamenu_toggle").on("click",function(){$("#megamenu").toggleClass("open")}),$(".rightbar .right_chat li a, .rightbar .back_btn").on("click",function(){$("#rightbar").toggleClass("detail")}),0<$('[data-toggle="tooltip"]').length&&$('[data-toggle="tooltip"]').tooltip(),0<$('[data-toggle="popover"]').length&&$('[data-toggle="popover"]').popover(),$(window).on("load",function(){$("#main-content").height()<$("#left-sidebar").height()&&$("#main-content").css("min-height",$("#left-sidebar").innerHeight()-$("footer").innerHeight())}),$(".full-screen").on("click",function(){$(this).parents(".card").toggleClass("fullscreen")}),$(".progress .progress-bar").progressbar({display_text:"none"}),$(".header-dropdown .dropdown-toggle").on("click",function(){$(".header-dropdown li .dropdown-menu").toggleClass("vivify fadeIn")}),$(".check-all").on("click",function(){this.checked?$(this).parents(".check-all-parent").find(".checkbox-tick").each(function(){this.checked=!0}):$(this).parents(".check-all-parent").find(".checkbox-tick").each(function(){this.checked=!1})}),$(".checkbox-tick").on("click",function(){$(this).parents(".check-all-parent").find(".checkbox-tick:checked").length==$(this).parents(".check-all-parent").find(".checkbox-tick").length?$(this).parents(".check-all-parent").find(".check-all").prop("checked",!0):$(this).parents(".check-all-parent").find(".check-all").prop("checked",!1)}),$("a.mail-star").on("click",function(){$(this).toggleClass("active")}),$(".todo_list .todo-delete").on("click",function(){$(this).parents("li:first").toggleClass("delete")}),$(".font_setting input:radio").click(function(){var e=$("[name='"+this.name+"']").map(function(){return this.value}).get().join(" ");console.log(e),$("body").removeClass(e).addClass(this.value)}),$(".setting_switch .lv-btn").on("change",function(){this.checked?$("body").addClass("light_version"):$("body").removeClass("light_version")}),$(".setting_switch .mini-sidebar-btn").on("change",function(){this.checked?($("body").addClass("mini_sidebar"),$("#left-sidebar").addClass("mini_sidebar_on"),$(".hmenu-btn").attr("disabled","disabled")):($("body").removeClass("mini_sidebar"),$("#left-sidebar").removeClass("mini_sidebar_on"),$(".hmenu-btn").removeAttr("disabled","disabled"))}),$("#left-sidebar").hover(function(){$("body").toggleClass("mini_hover"),$("#left-sidebar").toggleClass("mini_sidebar_on")}),$(".setting_switch .hmenu-btn").on("change",function(){this.checked?($("body").addClass("h-menu"),$(".mini-sidebar-btn").attr("disabled","disabled")):($("body").removeClass("h-menu"),$(".mini-sidebar-btn").removeAttr("disabled","disabled"))}),$(".setting_switch .rtl-btn").on("change",function(){this.checked?$("body").addClass("rtl"):$("body").removeClass("rtl")})}),$.fn.clickToggle=function(t,n){return this.each(function(){var e=!1;$(this).bind("click",function(){return e?(e=!1,n.apply(this,arguments)):(e=!0,t.apply(this,arguments))})})},particlesJS("particles-js",{particles:{number:{value:30,density:{enable:!0,value_area:700}},color:{value:["#fc3c5f","#993cfc","#3ca9fc","#3cfc5f","#fcdf3c"]},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:15}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1.2,opacity_min:.15,sync:!1}},size:{value:2.5,random:!1,anim:{enable:!0,speed:2,size_min:.15,sync:!1}},line_linked:{enable:!0,distance:110,color:"#2b313c",opacity:1,width:1},move:{enable:!0,speed:1.6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:30,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});

  }
  permit(e){
this.Jarwis.permite = e;
  }

  modu(show:string,id:any){
    if (show=='record') {
      this.record=true;
      this.clinic=false;
      this.pharmacy=false;
      this.invest=false;
      this.revenue=false;
    }
    if (show=='clinic') {
      this.record=false;
      this.clinic=true;
      this.pharmacy=false;
      this.invest=false;
      this.revenue=false;
    }
    if (show=='investigation') {
      this.record=false;
      this.clinic=false;
      this.pharmacy=false;
      this.invest=true;
      this.revenue=false;
    }
    if (show=='pharmacy') {
      this.record=false;
      this.clinic=false;
      this.pharmacy=true;
      this.invest=false;
      this.revenue=false;
    }
    if (show=='revenue') {
      this.record=false;
      this.clinic=false;
      this.pharmacy=false;
      this.invest=false;
      this.revenue=true;
    }
  if (id) {
    this.Jarwis.dashDeptModules(id).subscribe(
      data=>{
       this.components = data
      }
    )
  }
  }

  changeModule(e){
    this.change_module = e
  }
  
  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    this.chat.disconne(this.user_id)
  
}
  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }

  
}

