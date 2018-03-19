import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-assessmentrequest',
  templateUrl: './view-assessmentrequest.component.html',
  styleUrls: ['./view-assessmentrequest.component.css']
})
export class ViewAssessmentreqComponent implements OnInit {
  currentForm = 0;
  constructor() { }

  ngOnInit() {
  }
  save() {
    if (this.currentForm < 2) {
      this.currentForm++;
    }
  }
}
