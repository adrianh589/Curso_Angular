import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(
    private spotify: SpotifyService
  ) { }

  buscar( termino: string ){
    if(termino == ''){
      this.loading = false;
      return;
    }

    this.loading = true;
    console.log(termino);
    this.spotify.getArtistas(termino)
      .subscribe( (response) => {
        console.log(response);
        this.artistas = response;
        this.loading = false;
      } );
  }



}
