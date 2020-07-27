import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';


declare var test3: any;
declare var test4: any;
declare var $ : any;
@Component({
  selector: 'app-patient-process',
  templateUrl: './patient-process.component.html',
  styleUrls: ['./patient-process.component.css']
})
export class PatientProcessComponent implements OnInit {

  appId: string;
  patientResponse: any;
  pat: any;
  patID: any;
  Property:any;
  schemeCat: any;
  schemeId: any;
  branch:any
  disabled = false;
  schemePercent: any;
  schemePercentToView: number;
  schemePriceList: any;
  response: any;
  imgLink: any;
  testingform: any;
  datas: any;
  form_id: any;
  form_res: any;
  p: number = 1;
  patient_image: any;
  name: any;
  othername: any;
  gender: any;
  age: any;
  card_number: any;
  table_data: any;
  table_id: any;
  process_attribute_id: any;
  collection=[];
  closeModal:Boolean =false;
  formTittle: any;
  suggestions: any;
  hello:any
  // visible = true;
  // selectable = true;
  // removable = true;
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  // fruitCtrl = new FormControl();
  // filteredFruits: Observable<string[]>;

  // fruits: string[] = ['Lemon'];
  // allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  // @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  // @ViewChild('auto') matAutocomplete: MatAutocomplete;


  constructor(   
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,) {
      // this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      //   startWith(null),
      //   map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
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
         this.age = this.pat[0].age
         this.card_number = this.pat[0].card_number
	    })
  }))
  
  this.Jarwis. generalSettings().subscribe(
    data=>{
    this.response = data;      
    this.imgLink = this.response[0].app_url;
  })
  }
 

onSubmit(form:NgForm){

}
// CHIPS STARTED

// addChips(data){
// this.allFruits=data
// }
// add(event: MatChipInputEvent): void {
//   const input = event.input;
//   const value = event.value;

//   // Add our fruit
//   if ((value || '').trim()) {
//     this.fruits.push(value.trim());
//   }

//   // Reset the input value
//   if (input) {
//     input.value = '';
//   }

//   this.fruitCtrl.setValue(null);
// }

// remove(fruit: string): void {
//   const index = this.fruits.indexOf(fruit);

//   if (index >= 0) {
//     this.fruits.splice(index, 1);
//   }
// }

// selected(event: MatAutocompleteSelectedEvent): void {
//   this.fruits.push(event.option.viewValue);
//   this.fruitInput.nativeElement.value = '';
//   this.fruitCtrl.setValue(null);
// }

// private _filter(value: string): string[] {
//   const filterValue = value.toLowerCase();

//   return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
// }

handleResponse(data) {    // 
  this.disabled = false;
  let snackBarRef = this.snackBar.open(data, 'Dismiss', {
    duration: 2000
  })   
  this.ngOnInit();
  

}
}
