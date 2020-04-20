import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-admin',
  templateUrl: './record-admin.component.html',
  styleUrls: ['./record-admin.component.css']
})
export class RecordAdminComponent implements OnInit {
pat={
  male:0,
female:0
}

position_id:any;

  constructor() { }

  ngOnInit() {
  }

}
