import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [
  ]
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor( private router: Router ) {

   }

  ngOnInit(): void {

  }

  getInfoPeli(id: string){
    this.router.navigate(['/detalle', id, 'home']);
  }

}
