import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import {map} from 'rxjs/operators' ;


@Injectable()

export class EtudiantService {

    constructor(private http:Http){}

    getEtudiant(){
        return this.http.get("http://localhost:8080/chercher?mc=A&size=3&page=2")
        .pipe(map(resp=>resp.json()))
       
    }

}