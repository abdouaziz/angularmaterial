import { Component, OnInit } from '@angular/core';
import {FormControl , Validators} from '@angular/forms' ;

@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.css']
})
export class FormfieldComponent implements OnInit {

  cities=['Dkr' , 'Sl' ,'Th' ,'Mbour'] ;
  constructor() { }

  ngOnInit() {
  }

  emailFormControl = new FormControl('',[
    Validators.required ,
    Validators.email
  ]);

 
}
