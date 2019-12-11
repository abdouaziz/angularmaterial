import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import { NoopAnimationsModule } from '@angular/platform-browser/animations' ;

import {

  MatCheckboxModule,
  MatRadioModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule ,
  MatSelectModule ,
  MatButtonToggleModule,
  MatIconModule ,
  MatMenuModule ,
  MatSidenavModule ,
  MatToolbarModule ,
  MatTabsModule
  

} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule ,
    MatInputModule ,
    MatSelectModule ,
    MatButtonToggleModule,
    MatIconModule ,
    MatMenuModule , 
    MatSidenavModule ,
    MatToolbarModule ,
    MatTabsModule

  ],
  exports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule ,
    MatInputModule ,
    MatSelectModule ,
    MatButtonToggleModule,
    MatIconModule ,
    MatMenuModule ,
    MatSidenavModule ,
    MatToolbarModule ,
    MatTabsModule


  ]
})
export class MaterialMModule { }
