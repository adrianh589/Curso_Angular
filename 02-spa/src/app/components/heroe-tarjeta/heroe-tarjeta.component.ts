import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';// EventEmitter va de la mano con el output
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {} // Input hace referencia a que quiero recibir un heroe desde afuera
                            //Donde vaya a usar la etiqueta html (El selector)

  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;// Esto es que Voy a mandar esta variable a quien lo requiera

  constructor(
    private router: Router
  ) {
    this.heroeSeleccionado = new EventEmitter<number>();// De esta manera se inicialza el event emitter
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.index);
     this.router.navigate( ['/heroe', this.index] );//Con esto redirecciono a heroe con el correspondiente indice
    //this.heroeSeleccionado.emit( this.index );//Esto es lo que se va a emitir
  }

}
