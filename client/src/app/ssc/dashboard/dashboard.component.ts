import { ScriptLoaderService } from './../../services/script-loader.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this._script.loadScripts('app-index',
        ['assets/app/js/dashboard.js']);

}
}
