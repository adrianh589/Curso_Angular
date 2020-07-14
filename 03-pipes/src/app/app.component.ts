import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre    : string    = 'Capitan América';
  nombre2   : string    = 'AdRiAn YeSiTh HoYoA mÁrQuEz';
  arreglo   : number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI        : number    = Math.PI;
  porcentaje: number    = 0.525;
  salario   : number    = 1234.5;
  fecha     : Date      = new Date();
  idioma    : string    = 'es';
  video     : string    = 'https://www.youtube.com/embed/qDDb1txE_aY';// Angular bloqueara este enlace porque se puede poner cualquier URL y por eso dice que es potencialmente inseguro
                          // Para resolver esto se creara un pipe personalizado
  activar   : boolean   = true;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

}
