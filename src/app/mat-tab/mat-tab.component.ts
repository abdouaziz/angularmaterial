import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-tab',
  templateUrl: './mat-tab.component.html',
  styleUrls: ['./mat-tab.component.css']
})
export class MatTabComponent implements OnInit {
  bgColor='primary' ;
  color='accent' ;

  constructor() { }

  ngOnInit() {
  }

}
