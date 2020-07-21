import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; // Se improtan los headers para su modificacion
import { map } from 'rxjs/operators';// para usar map el cual me permite filtrar la informacion

// Este servicio debe ser creado para poder centralizar la informacion a la hora de trabajar con apis

@Injectable({ // Inyectable, que se puede instanciar dentro de otros componentes
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) {
    console.log('Spotify Service preparado');
  }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer QAM80rSSFjghzY5Ddl3l8tjKuHCeak3NH4PYalmmXZEzgjFjioq98dBsEBg4siMYkoLPXXdkb941M2o6Yk'
    });

    return this.http.get(url, {headers});

  }

  getNewReleases(){
    return this.getQuery(	'browse/new-releases')// Cargamos el header, limit para el limite de canciones
      .pipe( map( data => data['albums'].items )); // igual qie data.albums.items pero es mas factible decir que de la data busque una propiedad llamada album
  }

  getArtistas(termino: string){
    return this.getQuery(	`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items ) );// igual qie data.albums.items pero es mas factible decir que de la data busque una propiedad llamada album
  }

  getArtista(id: string){
    return this.getQuery(	`artists/${ id }`);
      //.pipe( map( data => data['artists'].items ) );// igual qie data.albums.items pero es mas factible decir que de la data busque una propiedad llamada album
  }

  getArtistTopTrack(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map( data => data['tracks'] ) );
  }


}
