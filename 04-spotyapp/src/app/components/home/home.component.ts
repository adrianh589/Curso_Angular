import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    spotify.getNewReleases().subscribe( (response: any) => { // any porque no conozco el fomrato de la data y si no se maneja asi, angular supone que es una respuesta del http
      console.log( response );
      this.nuevasCanciones = response;
      this.loading = false;
    }, errorServicio => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    } );

  }

}
