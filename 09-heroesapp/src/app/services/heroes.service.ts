import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HeroeModel} from "../models/heroe.model";
import {delay, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {



  private url = 'https://formulario-con-angular.firebaseio.com';

  constructor( private http: HttpClient ) { }

  crearHeroe( heroe: HeroeModel ){
    //Segundo argumento es el body, enviarle al back
    return this.http.post(`${this.url}/heroes.json`, heroe)
      .pipe( map((resp: any) => {
        heroe.id = resp.name;
        return heroe;
      }));
  }

  actualizarHeroe( heroe: HeroeModel ){

    // Dado que javascript tiene objetos por referencia, es decir, el mismo objeto compartido u original
    const heroeTemp = {
      ...heroe // Esto duplica todas las propiedades de un objeto ya signarlas tal y como estan
    }

    // Dado que en firebase necesito el id, borro del elemento "clonado" para no afectar el original
    delete heroeTemp.id;


    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  getHeroes(){
    return this.http.get(`${this.url}/heroes.json`)
      .pipe(
        map( response =>  // Aqui se transforma la info y regresar cualquier otra cosa, VA SIN LLAVES O SI NO DICE UNDEFINED
          this.crearArreglo(response) // puedo dejar solo this.crearArreglo y funciona igual
       ),
        //delay(3000) // para demorar la peticion y probar el cargando
        );
  }

  borrarHeroe(id: string){
    return this.http.delete( `${this.url}/heroes/${id}.json` );
  }

  getHeroe(id: string){
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  private crearArreglo(heroesObj: Object){
    const heroes: HeroeModel[] = [];

    console.log(heroesObj);

    if( heroesObj === null ){ heroesObj = [] } // Por si no trae informacion de la api

    Object.keys( heroesObj ).forEach( key => {
      const heroe: HeroeModel = heroesObj[key]; // asignar a esta variable cada heroe
      heroe.id = key;
      heroes.push(heroe);
    });

    return heroes;
  }

}
