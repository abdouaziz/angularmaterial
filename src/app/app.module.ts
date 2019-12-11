import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import { MaterialMModule} from './material-m/material-m.module';
import { FormfieldComponent} from './formfield/formfield.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MatIconComponent} from './mat-icon/mat-icon.component';
import { MenuComponent} from './menu/menu.component';
import { MatsidnavComponent} from './matsidnav/matsidnav.component';
import { MatTabComponent} from './mat-tab/mat-tab.component';
import { EtudiantComponent} from './etudiant/etudiant.component' ;
import {HttpModule}  from '@angular/http' ;
import { EtudiantService} from './service/etudiant.service';

@NgModule({
  declarations: [
    AppComponent,
    FormfieldComponent,
    MatIconComponent,
    MenuComponent,
    MatsidnavComponent,
    MatTabComponent,
    EtudiantComponent
  ],
  imports: [
    BrowserModule ,MaterialMModule ,ReactiveFormsModule ,FormsModule ,HttpModule
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
