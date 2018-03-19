import { Router } from '@angular/router';
import { Helpers } from './../../helpers';
import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

 declare var  mLayout: any;
@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
  encapsulation: ViewEncapsulation.None ,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

  @Input() navElements: any[] = [];
  constructor(private router: Router) { }
  ngOnInit() {
          // to do
  }
  ngAfterViewInit() {
     mLayout.initHeader();
  }
  navigateTo(route) {
    console.log(route);
    if (route) {
      this.router.navigate([`/${route}`]);
    }
  }
}
