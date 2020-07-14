import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor(
    private http: HttpClient
  ) {
    console.log('Constructor del home hecho');
    this.http.get('https://restcountries.eu/rest/v2/lang/es') // Decirle a angular que se prepare para esta peticion
      .subscribe( (response: any) => { // Cuando el http responda, yo la voy a tener disponible dentro de esta response
        console.log( response );
        this.paises = response;
      } );// Para suscribirme cuando esto se ejecuta
  }

  ngOnInit(): void {
  }

}
