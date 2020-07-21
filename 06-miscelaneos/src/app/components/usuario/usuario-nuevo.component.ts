import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private router: ActivatedRoute ) {
    this.router.parent.params.subscribe( parametros => { // Asi se llaman los parametros de una ruta padre
      console.log('Ruta Hija Nuevo');
      console.log(parametros);
    } )
  }

  ngOnInit(): void {
  }

}
