import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';

@Component({
  selector: 'app-nav-lazy-load',
  templateUrl: './nav-lazy-load.component.html',
  styleUrls: ['./nav-lazy-load.component.css']
})
export class NavLazyLoadComponent implements OnInit {
imgurl:any;
  constructor(public service:JarwisService) {

   }

  ngOnInit() {
    this.imgurl = this.service.imageUrl;
  }

}
