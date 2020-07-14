import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Heroe, HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-info-heroe',
  templateUrl: './info-heroe.component.html'
})
export class InfoHeroeComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
  ) {

  }

  ngOnInit(): void {

    //Esta funcio es para recibir los parametros que me llegan por la url
    this.activatedRoute.params.subscribe( params =>{
      this.heroes = this._heroesService.buscarHeroe( params['termino'] );//Se lo asigno a el arreglo que cree
      this.termino = params['termino'];//Comprobamos los resultados
    } )

  }

}
