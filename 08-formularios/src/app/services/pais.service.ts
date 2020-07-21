import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor( private http: HttpClient ) {

  }

  getPaises(){
    return this.http.get('https://restcountries.eu/rest/v2/lang/es#')
      .pipe(
        map( (data: any[]) => { // Este es el map de rxjs
          return data.map( pais => { // map de los arreglos
            return ({
              nombre: pais.name,
              codigo: pais.alpha3Code
            })
          } );
        } )
      )
  }
}
