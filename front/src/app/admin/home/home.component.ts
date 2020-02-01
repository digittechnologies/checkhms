import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { FormBuilder } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { Router } from '@angular/router';

declare let c3 : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response: any;
  pos: any;
  allPos: any;
    pat: any;
    patResponse: any;

  constructor(private formBuilder: FormBuilder,private Token: TokenService, private Jarwis: JarwisService,private router: Router) { }
  ngOnInit() {

    
    this.Jarwis.countCustomer().subscribe(
        data=>{
        this.patResponse = data;      
        this.pat = this.patResponse[0]   
      })

    this.Jarwis.profile().subscribe(
      data=>{
       
      this.response = data;
      this.pos= this.response.det[0].position_id
    
    })

    this.Jarwis.displayAllposition().subscribe(
      data=>{
       
      this.response = data;
     
      this.allPos= this.response;
      console.log(this.allPos)
    
    })
   

c3.generate({
      bindto: '#admitted-patient', // id of chart wrapper
      data: {
          columns: [
              // each columns data
              ['data1', 7, 6, 9, 16, 18, 15, 7, 17, 23, 13, 13, 9],
              ['data2', 13, 14, 15, 18, 11, 15, 13, 16, 14, 10, 16, 14],
              ['data3', 5, 10, 11, 14, 17, 21, 25, 8, 11, 18, 15, 12],
          ],
          labels: true,
          type: 'line', // default type of chart
          colors: {
              'data1': '#46aace',
              'data2': '#8acdce',
              'data3': '#dcecc9',
          },
          names: {
              // name of each serie
              'data1': 'Operation',
              'data2': 'Surgery',
              'data3': 'Treatment'
          }
      },
      axis: {
          x: {
              type: 'category',
              // name of each category
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
          },
      },
      legend: {
          show: true, //hide legend
      },
      padding: {
          bottom: 20,
          top: 0
      },
  });

  c3.generate({
      bindto: '#chart-bar-rotated', // id of chart wrapper
      data: {
          columns: [
              // each columns data
              ['data1', 11, 8, 15, 18, 19, 17, 14, 7, 18],
              ['data2', 7, 7, 5, 7, 9, 12, 16, 22],
          ],
          type: 'bar', // default type of chart
          colors: {
              'data1': '#62bed2',
              'data2': '#b3ddcc',
          },
          names: {
              // name of each serie
              'data1': 'Discharged',
              'data2': 'Readmitted'
          }
      },
      axis: {
          x: {
              type: 'category',
              // name of each category
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept']
          },
          rotated: true,
      },
      bar: {
          width: 15
      },
      legend: {
          show: true, //hide legend
      },
      padding: {
          bottom: 20,
          top: 0
      },
  });

  c3.generate({
      bindto: '#chart-donut', // id of chart wrapper
      data: {
          columns: [
              // each columns data
              ['data1', 60],
              ['data2', 40]
          ],
          type: 'donut', // default type of chart
          colors: {
              'data1': '#62bed2',
              'data2': '#b3ddcc',
          },
          names: {
              // name of each serie
              'data1': 'Male',
              'data2': 'Female'
          }
      },
      axis: {
      },
      legend: {
          show: true, //hide legend
      },
      padding: {
          bottom: 20,
          top: 0
      },
  });
  
   
  }
}
