import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PeliculasService} from "../../../../services/peliculas.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ]
})
export class DetalleComponent implements OnInit {

  pelicula: any;
  regreso: string;

  constructor(private ar: ActivatedRoute,
              private _ps: PeliculasService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.ar.params.subscribe(res => {
      if(res['pelicula']){
        this.obtenerDetallesPeli(res['pelicula']);
        this.regreso = res['path'];
      }
    });
  }

  obtenerDetallesPeli(id: string){
    this._ps.obtenerInfoPelicula(id).subscribe( (res: any) => {
      console.log(res);
      this.pelicula = res
    })
  }

  regresar(){
    this.router.navigateByUrl('/'+this.regreso);
  }

}
