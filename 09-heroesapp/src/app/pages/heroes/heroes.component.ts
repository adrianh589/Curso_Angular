import { Component, OnInit } from '@angular/core';
import {HeroesService} from "../../services/heroes.service";
import {HeroeModel} from "../../models/heroe.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: HeroesComponent[] = [];
  cargando = false;

  constructor( private heroesService: HeroesService ) {}

  ngOnInit(): void { // Por que una vez haya cargado la pagina necesito la info de lso heroes, no al momento de instanciar la clase

    this.cargando = true;

    this.heroesService.getHeroes()
      .subscribe((response: any) => { // El subscribe es cuando YA TENGO LA RESPUESTA
        console.log(response);
        this.heroes = response;
        this.cargando = false;
    });
  }

  borrarHeroe(heroe: HeroeModel, i: number){

    Swal.fire({ // Sweet alert es una promesa por eso usaremos then y catch
      title: '¿Esta seguro?',
      text: 'Esta seguro que desea borrar a '+heroe.nombre+'?',
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    })
      .then(response => {
        if(response.value){
          this.heroes.splice(i, 1); // Borrar del arreglo
          this.heroesService.borrarHeroe(heroe.id).subscribe( );
        }

      });
  }

}
