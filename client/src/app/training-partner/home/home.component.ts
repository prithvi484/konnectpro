import { ScriptLoaderService } from './../../services/script-loader.service';
import { Helpers } from './../../helpers';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  globalBodyClass = `m-page--loading-non-block m-page--wide m-header--fixed
   m-header--fixed-mobile m-aside-left--enabled m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default`;
  constructor(private _router: Router) { }
  navElements: [
    {
      element: string,
      route?: string,
      subelements?: Array<Object>
    }
  ] = [
      {
        element: 'Dashboard',    // if drop down is there then keep route,
        route: 'dashboard',      // otherwise remove routes  because it not required
        subelements: []
      },
      {
        element: 'Accrediation & Affiliation',
        route: '/dashboard',
        subelements: []
      },
      {
        element: 'ToT, ToA, ToMT,ToMA',
        subelements: [

        ]
      },
      {
        element: 'Assessments',
        subelements: []
      },
      {
        element: 'Certifications',
        route: 'certifications',
        subelements: []
      }
    ];
  ngOnInit() {
    this._router.events.subscribe((route) => {
        if (route instanceof NavigationStart) {
            Helpers.setLoading(true);
            Helpers.bodyClass(this.globalBodyClass);
        }
        if (route instanceof NavigationEnd) {
            Helpers.setLoading(false);
        }
    });
  }

}
