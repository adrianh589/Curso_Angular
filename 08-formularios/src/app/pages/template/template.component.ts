import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Adrian',
    apellido: 'Hoyos',
    correo: 'adrianh_589@hotmail.com',
    pais: 'COL'
  }

  paises: Object[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
    this.paisService.getPaises()
      .subscribe( paises => {
        this.paises = paises;

        this.paises.unshift({
          nombre: 'Seleccione pais',
          codigo: ''
        })

      });
  }

  guardar(forma: NgForm){
    console.log('submit disparado');

    if( forma.invalid ){

      Object.values(forma.controls).forEach( data => {
        data.markAsTouched();
      } )
    }

      return;
    }




}
