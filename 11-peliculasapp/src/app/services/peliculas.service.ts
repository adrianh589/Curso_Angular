import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {concatAll, filter, map, mergeMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private api = 'api_key=a09532ab68c5f67d4b70c3e001a5f937';
  private language = '&language=es';
  private urlMovieDb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {

  }

  getQuery(search: string, many:boolean = true) {
    let url;
    if(many){
      url = `${this.urlMovieDb}${search}&${this.api}${this.language}`;
    }else{
      url = `${this.urlMovieDb}${search}?${this.api}${this.language}`;
      return this.http.get(url);
    }

    return this.http.get(url).pipe( map( res => res['results'] ));
  }

  getPopulares() {
    return this.getQuery('/discover/movie?sort_by=popularity.desc');
  }

  getCarteleras() { // Hecha
    return this.getQuery('/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22');
  }

  getDramas() {
    return this.getQuery('/discover/movie?with_genres=18&primary_release_year=2014');
  }

  buscarPeliculas(texto: string) {
    return this.getQuery(`/search/movie?query=${texto}&sort_by=popularity.desc`);
  }

  obtenerInfoPelicula(id: string){
    return this.getQuery(`/movie/${id}`, false);
  }

}
