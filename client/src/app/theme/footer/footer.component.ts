import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from './../../helpers';

// declare let  mLayout: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngOnInit() {
          // to do
  }
  ngAfterViewInit() {
    // mLayout.initAside();
  }

}
