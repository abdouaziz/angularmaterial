import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../service/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  listEtudiant :any;
  constructor(private service:EtudiantService) { }

  ngOnInit() {
    this.service.getEtudiant()
    .subscribe(data=>{
      this.listEtudiant=data ;
    } ,err=>{
      console.log(err) ;
    })
  }

  saveContact(){
   
  }

}
