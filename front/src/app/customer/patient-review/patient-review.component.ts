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
declare var index2: any;
declare var chat1: any;
declare var mutil_list: any;


@Component({
  selector: 'app-patient-review',
  templateUrl: './patient-review.component.html',
  styleUrls: ['./patient-review.component.css']
})
export class PatientReviewComponent implements OnInit,OnDestroy {

  //Pharmacy 

  generic_name: any;
  total: any;
  error: any;
  itemDet: any;
  prescriptions: any;
  duration: any;
  instruct: any;
  getInst: any;
  quantity: any;
  amt: any;
  sup: any;
  days: any;
  count: any;
  defaultCount = 1;
  math = Math;
  useFor: any;
  quant: any;
  tQuantity = 0;
  PharmPreresponse: any;
  ItemDetresponse: any;
  Instructionresponse: any;
  AllStockresponse: any;
  DurationForVresponse: any;
  prescriptionsList: any;
  voucherId: any;
  appointResponse: any;
  appointments: any;
  total_name: any;
  cat_name: any;
  type_name: any;
  total_remain: any;
  shelve_name: any;
  shelve_point: any;
  selling_price: any;
  tquant: any;
  refill: any;
  remain: any;
  tcost: any;
  prescription: any;
  voucher: any;
  invoice: any;
  disabled = false;
  afterPercentCost: any;
  schemeAmt: any;
  catResponds: any;
  cust_cat: any;
  editdept:any;
  DurationForVresponse_id: any;
  Instructionresponse_id: any;
  amt_value: any;
  sup_id: any;
  presResponds: Object;
  original_qty: any;
  refill_qty: any;
  total_quantity: any;
  total_amount: any;
  instock: any;
  amnt_v: any;
  amount_p: number;
  chargesResponse: any;
  charges: any;


  // Doctor Encounter
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
  titles: any;
  encounterResponce:any
  encounterRes: any;
  encounters: any;
  encId: any;
  viewEncounter: any;
  encounterResD: any;
  encountersD: any;
  column: any;
  patientAppointment: any;
  itemPrice: any;
  item_remains: any;
  item_branches: any;
  remain_sumation: any;
  encounter_pham: any;
  PharmEncreresponse: any;
  getEncId: any;
  open:Boolean = false;
  vitasigns: any;
  testingform: any;
  collection: any[];
  form_id: any;
  formTittle: any;
  form_res: any;
  table_data: any;
  table_id: any;
  process_attribute_id: any;
  suggestions: any;
  closeModal: boolean;
  nurseAss=[];

  other_proce: any;
  init_dat: any;
  itemPrice2Name: any;
  itemPrice2Amount: any;
  general_selling_price: any;
  remainInStockResponse: any;
  remainInStock: any;
  branch_id: any;
  items: any;
  itemsitem: any;

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

     deleteTrans(dd){

      if(confirm('Warning: You are about to delete the selected priscription.')){
        this.Jarwis.deletePrescription(dd).subscribe(
          data => this.handleResponse(data),
          error => this.handleError(error),  
        );   
       }     
    }

    editTrans(hh){  

      this.amt_value = hh;
      this.Jarwis.updatePrecription(this.amt_value).subscribe(
        data=>{
        this.presResponds = data;      
        this.original_qty = this.presResponds[0].original_qty;
        this.refill_qty = this.presResponds[0].refill_input;
        this.total_quantity = this.presResponds[0].quantity;
        this.total_amount = this.presResponds[0].amount_paid;
        this.instock = this.presResponds[0].instock; 
        this.amnt_v = this.presResponds[0].amount;
      })
       
    }
  
    onUpdate(form: NgForm) {
  
      form.value.p_id= this.amt_value;
      form.value.refill_quantity= this.total_quantity -  form.value.quantity;
      form.value.refill_amount_quantity= form.value.refill_quantity * this.amnt_v;
      form.value.amount= this.amount_p;
  
      if (form.value.refill_quantity > 0) {
        form.value.refill_status= 'refillable';
      } else {
        form.value.refill_status= 'non-refillable';
      }
         
        this.Jarwis.updatePrescription(form.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
      );
      
    }

  ngOnInit() {

    new test3();
    new test4();
    new index2();
    new chat1();
    new mutil_list();

    
    let getReturnData =  localStorage.getItem('returnData') 
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

    //Pharmacy  

    this.Jarwis.displayPharmPre2(this.appId).subscribe(
      data=>{
      this.PharmPreresponse = data;      
      this.prescriptions = this.PharmPreresponse;
      this.tquant= this.prescriptions.tquant;
      this.refill = this.prescriptions.refill;
      this.remain = this.prescriptions.remain;
      this.tcost = this.prescriptions.tcost;
      if (this.schemePriceList == 'price_1') {
        this.afterPercentCost = this.schemePercent / 100 * this.tcost + 50;
      } else {
        this.afterPercentCost = this.schemePercent / 100 * this.tcost;
      }
       
      this.schemeAmt = (100 - this.schemePercent)  / 100 * this.tcost + 50;
      this.prescriptionsList= this.PharmPreresponse.pres; 
    })
    
      this.Jarwis.disItemDet().subscribe(
        data=>{
        this.ItemDetresponse = data;      
        this.itemDet = this.ItemDetresponse;      
      })
  
      this.Jarwis.displayInstruction().subscribe(
        data=>{
        this.Instructionresponse = data;      
        this.instruct = this.Instructionresponse;      
      })
  
      this.Jarwis.customer_category().subscribe(
        data=>{
        this.catResponds = data;      
        this.cust_cat = this.catResponds;      
      })


    //Doctor Ecounter...
  this.Jarwis.profile().subscribe(
    data=>{
      this.user = data;
      this.user_id = this.user.aut.id;
      this.branch_id = this.user.aut.branch_id;
      this.Chat.fetchReview({user_id:this.user_id,app_id:this.appId})
      // console.log(this.user.aut)
    }
  )

  this.Jarwis.displayItem(this.branch_id).subscribe(
    data=>{
    this.response = data;      
    this.items = this.response;
    this.itemsitem=this.items.item;
    console.log(this.itemsitem[0])
  })

  this.Jarwis.fetchteam().subscribe(
    data=>{
       let res:any = data;
       this.teams = res;
    }
  )

  this.Jarwis.getEncounterType().subscribe(
    data=>{
       this.encounterResponce = data;
       this.titles = this.encounterResponce;       
    }
  );

  this.Jarwis.getEncounter(this.appId).subscribe(
    data=>{
       this.encounterRes = data;
       this.encounters = this.encounterRes;  
       this.getEncId = this.encounters[0].id;   
       this.Jarwis.getEncounterDetails(this.getEncId).subscribe(
        data=>{
           this.encounterResD = data;
           this.encountersD = this.encounterResD.view; 
           this.patientAppointment = this.encounterResD.view.appointment_id;
        });
  
        this.Jarwis.displayEncounterPharm(this.appId, this.encId).subscribe(
          data=>{
          this.PharmEncreresponse = data;     
          this.encounter_pham= this.PharmEncreresponse.pres; 
        })
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

  onSelectItem(Itemid) {
    this.Jarwis.voucherAllStock(Itemid.target.value, '', this.patientAppointment).subscribe(  
      data=>{

        // console.log(data)
        this.AllStockresponse = data;
        this.total = this.AllStockresponse.item;
        this.item_remains = this.AllStockresponse.item_remains;
        this.item_branches = this.AllStockresponse.branches;
        this.remain_sumation = this.AllStockresponse.totalremain;
        this.generic_name= this.total.generic_name
        this.total_name= this.total.name;
        this.cat_name= this.total.cat_name;
        this.type_name= this.total.type_name;
        this.total_remain= this.total.total_remain;
        this.shelve_name= this.total.shelve_name;
        this.shelve_point= this.total.shelve_point;
        this.getInst = this.total.type_id;
        this.quantity = 0;
        this.tQuantity = 0;
        this.general_selling_price = this.total.selling_price
        this.itemPrice = this.AllStockresponse.price[1];
        this.itemPrice2Name = this.AllStockresponse.price[0]
        this.itemPrice2Amount = this.AllStockresponse.price[1];
        ;
        if(this.itemPrice2Amount == 0 ){
          let confirmPrice = confirm("Item price is 0 under this category, switch to general price");
          if(confirmPrice){
            this.itemPrice = this.total.selling_price
            this.itemPrice2Name = 'selling_price'
          }
        }
        if(this.schemePriceList == 'price_2'){
          this.selling_price = this.total.price_2;
        }
        else if(this.schemePriceList == 'price_3'){
          this.selling_price = this.total.price_3;
        }
        else{
          this.selling_price= this.total.purchasing_price*this.total.markup_price;
        }
        this.ngOnInit()
        this.Jarwis.displayDurationForV(this.getInst).subscribe(
          data=>{
          this.DurationForVresponse = data;      
          this.duration = this.DurationForVresponse       
        })
      }
    );

  }

  onSelectAmount(a){
    this.amt_value = a.target.value;
    this.Jarwis.idDurationForV(this.amt_value).subscribe(
      data=>{
      this.DurationForVresponse_id = data;      
      this.amt = this.DurationForVresponse_id[0].value   

    })
     
  }
  
  onSelectDailySup(s){
    this.sup_id = s.target.value;
    this.Jarwis.idInstruction(this.sup_id).subscribe(
      data=>{
      this.Instructionresponse_id = data;      
      this.sup = this.Instructionresponse_id[0].value
  
    })  
   
  }

  putQty(d){
    this.quant = ''
    if(this.getInst == '7'){
      this.days = d.target.value
      this.tQuantity = this.amt * this.sup * this.days
      this.quantity =  this.amt * this.sup * this.days
      if(this.quantity > this.remain_sumation){
        alert('Quantity greater than quantity in stock')
        d.target.value = ''
        this.quantity = ''
        this.tQuantity = 0
        this.days = ''        
      }
      this.useFor = this.days
      this.quant = this.quantity
    }
    if(this.getInst != '7'){
      this.useFor = d.target.value
      this.quant = this.quantity
    }
  }


  apartTablet(n){
    if(parseInt(n.target.value) > parseInt(this.remain_sumation)){
      alert('Quantity greater than quantity in stock')
      n.target.value = ''
    }
    if(parseInt(n.target.value) <= 0){
      alert('Quantity minimum is 1')
      n.target.value = ''
    }    
      this.tQuantity = n.target.value
    this.quant = n.target.value
  }

  apartTablet2(nn){
    if(parseInt(nn.target.value) > parseInt(this.total_quantity)){
      alert('Quantity greater than quantity in stock')
      nn.target.value = ''
    }
    if(parseInt(nn.target.value) <= 0){
      alert('Quantity minimum is 1')
      nn.target.value = ''
    }    
      this.amount_p = this.amnt_v * nn.target.value;
  }

  onSubmitAdd(form: NgForm) {
    this.disabled = true;
    form.value.appointment_id=this.appId
    form.value.customer_id=this.patID
    form.value.quantity = this.quant
    form.value.encounter_id = this.encId
    form.value.original_qty = this.tQuantity
    form.value.days = this.useFor
    // if(this.schemePriceList == 'price_2'){
    //   form.value.amount = this.total.price_2;
    //   form.value.amount_paid = parseInt(this.total.price_2) * parseInt(this.quant) 
    // }
    // else if(this.schemePriceList == 'price_3'){
    //   form.value.amount = this.total.price_3;
    //   form.value.amount_paid = parseInt(this.total.price_3) * parseInt(this.quant)
    // }
    // else{
    //   form.value.amount = this.total.purchasing_price*this.total.markup_price;
    //   form.value.amount_paid = (parseInt(this.total.purchasing_price) * parseInt(this.total.markup_price)) * parseInt(this.quant)
    // }
    form.value.amount = this.itemPrice
    form.value.amount_paid = parseInt(this.itemPrice) * parseInt(this.quant)
    form.value.instock = this.remain_sumation
    form.value.general_amount = this.general_selling_price
    this.Jarwis.pharmPriscription(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
  }

  itemSelected2(itemId, itemQty){
    console.log(itemId, itemQty)
    this.Jarwis.voucherAllStock(itemId, '', this.patientAppointment).subscribe(  
      data=>{
        this.remainInStockResponse = data;
        this.remainInStock = this.remainInStockResponse.item_remains;
      }
    );
  }

  itemSelected(id){
    console.log(id)
  }

  saveTovoucher(){
    if(this.prescriptionsList.length <= 0){
      alert('No medications to process yet.')
      return;
    } else { 
      this.disabled = true;
      this.Jarwis.saveTovoucher(this.appId, '').subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
    }
  }

  onId(id:any){
    this.encId=id
    this.open=true;
    // this.viewEncounter= this.encounters[id];

    this.Jarwis.getEncounterDetails(this.encId).subscribe(
      data=>{
         this.encounterResD = data;
         this.encountersD = this.encounterResD.view; 
         this.patientAppointment = this.encounterResD.view.appointment_id;
      });

      this.Jarwis.displayEncounterPharm(this.appId, this.encId).subscribe(
        data=>{
        this.PharmEncreresponse = data;     
      
        this.encounter_pham= this.PharmEncreresponse.pres; 
      })
    
  }
  onSubmit(form:NgForm){

    form.value.appointment_id= this.appId

    this.Jarwis.submitEncounter(form.value).subscribe(
      data=>{
        this.handleResponse("Operation successfuly")
        this.response = data;  
        this.ngOnInit();
  })

  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    this.disabled = false;
  }

  // columnName(view:string){
  //   this.column= view;
  //   alert( this.column)
  // }

  onPreamble(form:NgForm){

    // form.value.appointment_id= this.appId
    // form.value.ids= this.encId
    // form.value.colum= this.column

    this.Jarwis.submitPreamble({value1:form.value, value2:this.encId, value3:this.appId}).subscribe(
      data=>{
        this.handleResponse("Operation successfuly")
      // this.response = data;  
      this.onId(this.encId)
    
  })

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
  encouter(){
    console.log({appointment_id:this.appId})
    this.Jarwis.NursingAssessment({appointment_id:this.appId}).subscribe(
      data=>{
        console.log(data)
        let res:any =data
        this.nurseAss = data.form
        for (let index = 0; index <  res.datas.length; index++) {
          let response = this.nurseAss.findIndex(e=>{
             return e.attribute == res.datas[index].attribute
           })
           if(response){
            this.nurseAss.splice(response,1)
             console.log(response)
           }
           console.log()
          }
          this.testingform = this.nurseAss
          console.log(this.testingform)
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
            const groups =  res.datas.reduce((groups, game) => {
              const date = game.process_attribute_id;
              if (!groups[date]) {
                groups[date] = [];
              }
              groups[date].push(game);
              return groups;
            }, {});
            // Edit: to add it in the array format instead
            const groupArrays = Object.keys(groups).map((date) => {
              return {
                date,
                games: groups[date]
              };
            });
           this.datas = groupArrays
            console.log(this.datas);
        }
      }
    )
  }
   // PROCESS START

  //  fetchForms(){
  //   this.Jarwis.fetchForm().subscribe(
  //     data=>{
  //       let res:any = data
  //       this.testingform = res.form;
  //       let defaultForm:any = this.testingform[0].id
  //       let dfaulAttribute:any =  this.testingform[0].attribute
  //       this.formValue(defaultForm,dfaulAttribute)
  //     }
  //   )
  // }
  formValue(id,formatrribute){
    this.collection = []
    this.form_id =  id;
    this.Jarwis.formvalue(id).subscribe(
      data=>{
        this.formTittle = formatrribute
      let reses:any = data;
      for (let index = 0; index < reses.length; index++) {
        console.log(reses[index].value_options)
       if (reses[index].value_options) {
         let vp = JSON.parse(reses[index].value_options)
         reses[index].value_options= vp 
        }
        else{
         reses[index].value_options=''
        }
        if (reses[index].suggestion) {
         let vp = JSON.parse(reses[index].suggestion)
         reses[index].suggestion = vp
         console.log(reses[index].suggestion)
        }
        else{
         reses[index].suggestion=''
        }
        if (reses[index].options) {
         let vp = JSON.parse(reses[index].options)
         reses[index].options = vp
        }
        else{
         reses[index].options=''
        }
        if (reses[index].value_option) {
          let vo = JSON.parse(reses[index].value_option)
          reses[index].value_option = vo
         }
         else{
          reses[index].value_option=''
         }
        
      }
      
      console.log(reses)
      this.form_res = reses;
      $('#init_process').modal('show');  
      }
    )
  }
  onSaveTestingProcessValue(form:NgForm){
    console.log(form.value)
    const data = Object.entries(form.value)
    console.log(data)
  //    this.Jarwis.submitProcessVals({form:data,process_attribute_id:this.form_id,appointment_id:this.appId}).subscribe(
  //      data=>{
  //        this.handleResponse("opration successfuly")
  //      this.response = data;  
      
  //  })
 }

 closeMo(data){
   $('#Table').modal('hide');
        this.handleResponse(data)
        this.other_process(this.table_id)  
}
 tableDetails(data,id,process_attribute_id,suggestions){
   this.table_data = data;
   this.table_id = id;
   this.process_attribute_id = process_attribute_id
   this.suggestions = suggestions;
   console.log(this.suggestions)
    console.log(this.table_id)
   console.log(this.table_id)
   this.closeModal = false;
 }
 onSubmittable(form:NgForm){
  this.disabled = true;
  console.log(form.value)
  const data = Object.entries(form.value)
  console.log(data)
  this.Jarwis.onSubmitTable({form:data,id:this.table_id,appoint__id:this.appId,process_attribute_id:this.process_attribute_id}).subscribe(
    data=>{
      console.log(data)
      this.closeModal = true;
      let res:any = data
      this.closeMo(res.message)
       }
     )
 }
  vitaSigns(){
    this.Jarwis.vitasigns({appointment_id:this.appId}).subscribe(
      data=>{
          let res:any = data
          if(res.vitasigns != ''){
          for (let index = 0; index < res.vitasigns.length; index++) {
            let dt:any = res.vitasigns[index];
            if (dt.value_option) {
              let vp = JSON.parse(dt.value_option)
              dt.value_option = vp
            }
            else{
              dt.value_option=''
            }
          }
          this.vitasigns = res.vitasigns;
       

          console.log(this.vitasigns.value_option)
              // const groups =  res.datas.reduce((groups, game) => {
              //   const date = game.process_attribute_id;
              //   if (!groups[date]) {
              //     groups[date] = [];
              //   }
              //   groups[date].push(game);
              //   return groups;
              // }, {});
              // Edit: to add it in the array format instead
              // const groupArrays = Object.keys(groups).map((date) => {
              //   return {
              //     date,
              //     games: groups[date]
              //   };
              // });
            //  this.datas = groupArrays
            //   console.log(this.datas);
          }
         
          // this.vitasigns = res.vitasigns
      }
    )
  }
  other_process(id){
    this.Jarwis.fetchnuresetables({appointment_id:this.appId,id:id}).subscribe(
      data=>{
        let res:any =data
        this.init_dat = res.form
        if(res.nurseprocecess != ''){
        for (let index = 0; index < res.nurseprocecess.length; index++) {
          let dt:any = res.nurseprocecess[index];
          if (dt.value_option) {
            let vp = JSON.parse(dt.value_option)
            dt.value_option = vp
          }
          else{
            dt.value_option=''
          }
          if (dt.options) {
            let ops = JSON.parse(dt.options)
            dt.options = ops
          }
          else{
            dt.options=''
          }
          if (dt.suggestion) {
            let sug = JSON.parse(dt.suggestion)
            dt.suggestion = sug
          }
          else{
            dt.suggestion=''
          }
        }
        // this.datas = res.datas;
            const groups =  res.nurseprocecess.reduce((groups, game) => {
              const date = game.process_attribute_id;
              if (!groups[date]) {
                groups[date] = [];
              }
              groups[date].push(game);
              return groups;
            }, {});
            // Edit: to add it in the array format instead
            const groupArrays = Object.keys(groups).map((date) => {
              return {
                date,
                games: groups[date]
              };
            });
          //  this.datas = groupArrays
           this.other_proce = groupArrays
        }
        else{
          this.other_proce = null
        }
          
      }
    )
  }
//  PROCESS END
  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open(data, 'Dismiss', {
      duration: 2000
    })   
    this.ngOnInit();
    
  
  }

}

