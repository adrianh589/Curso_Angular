import { Component, OnInit } from '@angular/core';
import {PeliculasService} from "../../../services/peliculas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor( private _ps: PeliculasService,
               private router: Router) { }

  ngOnInit( ): void {
  }

  buscarPeli(texto: string){
    if (texto == ''){return}
    this.router.navigate(['buscar', texto]);
  }

}
