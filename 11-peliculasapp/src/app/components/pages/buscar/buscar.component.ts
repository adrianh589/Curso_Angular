import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  results: any;
  fromSearch: any;


  constructor( private _ps: PeliculasService,
               private ar: ActivatedRoute) {
    this.ar.params.subscribe( parametros => {
      if(parametros['pelicula']){
        this.fromSearch = parametros['pelicula'];
        this.buscarPeli(this.fromSearch);

       }
    } )
  }

  ngOnInit(): void {

  }

  buscarPeli(texto: string){
    if (texto == ''){return}
    this._ps.buscarPeliculas( texto ).subscribe(res => {
      console.log(res);
        this.results = res;
      }
    );
  }



}
