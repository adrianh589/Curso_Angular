import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {YoutubeResponse} from '../components/models/youtube.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeURL = 'https://www.googleapis.com/youtube/v3';
  private APIKey = 'AIzaSyD9wI9qIYLiB6PujPst4OYA3bkbpisT74U';
  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor( private http: HttpClient ) {

  }

  getVideos(){
    const url = `${this.youtubeURL}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlist)
      .set('key', this.APIKey)
      .set('pageToken', this.nextPageToken)

    // { parmams: params } es lo mismo que { params }, estos son los parametros que necesita la peticion
    return this.http.get<YoutubeResponse>(url, { params })
      .pipe(
        map( response => {
          this.nextPageToken = response.nextPageToken;
          return response.items;
        }),

        map( items => {
         return items.map( video => video.snippet )
        })
      )
  }
}
