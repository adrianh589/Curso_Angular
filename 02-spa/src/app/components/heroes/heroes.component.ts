import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[]  = [];

  constructor( private _heroesService: HeroesService,
               private router: Router
               ) {// Este constructor se ejecuta antes del ngOnInit
    // console.log("Constructor");
  }

  ngOnInit(): void {// Esto es cuando la pagina ya esta totalmente renderizada
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes)
  }

  verHeroe(idx: number){
    this.router.navigate( ['/heroe', idx] );
  }

}
