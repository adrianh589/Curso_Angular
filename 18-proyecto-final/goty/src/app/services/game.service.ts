import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Game} from '../interfaces/interfaces';
import {of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor( private http: HttpClient ) { }

  getNominados(){

    if(this.juegos.length > 0){
      //No tenemos juegos
      return of(this.juegos); // of devuelve cualquier cosa como un Observable

    }else{
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
        .pipe(
          tap( // Este tap me permite disparar un efecto secundario
            juegos => this.juegos = juegos
          )
        );
    }

  }

  votarJuego(id: string){
    return this.http.post(`${environment.url}/api/goty/${id}`, {})
      .pipe(
        catchError( err =>{
         return of(err.error);
        }) // Atrapa el error en la peticion
      )
  }

}
