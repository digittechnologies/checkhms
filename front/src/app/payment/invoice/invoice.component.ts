import { Component, OnInit } from '@angular/core';

declare let $ : any;

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


openPrintDialogue(){
    $('<iframe>', {
      name: 'myiframe',
      class: 'printFrame'
    })
    .appendTo('body')
    .contents().find('body')
    .append(`        
            <table>
            <thead>
                <th colspan="3">
                    <img width="6%" src="../assets/images/icon.svg" alt="Check Logo" class="center"><span style="font-size: 22px;">Check HMS</span>
                </th>
                <th colspan="3">
                    <p class="m-b-0"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</strong></p>
                    <h5 class="m-b-0">0906-848-3939</h5> 
                </th>
            </thead>
            <tbody>
                <tr>
                    <td colspan="6"> </td>
                </tr>
                <tr >
                    <td colspan="4">
                        <p class="m-b-0"><strong>RX:</strong> C098588</p>                               
                        <p class="m-b-0"><strong>Doctor: </strong>Oladipupa Olajide</p>
                        <p class="m-b-0"><strong>Order Date: </strong> AUG 15, 2018</p>  
                    </td>
                    <td  colspan="2" style="padding-top:20px;">
                        <p class="m-b-0"><strong>Patient Name: </strong>Oladipupa Olajide</p>
                        <p class="m-b-0"><strong>Order Date: </strong> AUG 15, 2018</p>
                        <p class="m-b-0"><strong>Refill: </strong>5</p>
                        <p class="m-b-0"><strong>Before: </strong> AUG 15, 2018</p>                 
                    </td>
                </tr>
                <tr>
                    <td colspan="4" >                    
                        <p class="h5">Medicine <small>Xamacoline</small> <small class="float-right text-muted">QTY: 50</small></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                    </td>
                </tr>        
                <tr >
                    <td colspan="4" >
                        <p class="m-b-0"><strong><u>Caution</u></strong></p> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                    </td>
                    <td  colspan="2">
                        |||||||||||||||| BARCODE|||||||||||||||||         
                    </td>
                </tr>   
            </tbody>
            </table>
    `);
  
    window.frames['myiframe'].focus();
    window.frames['myiframe'].print();
  
    setTimeout(() => { $(".printFrame").remove(); }, 1000);
  };
  
}
