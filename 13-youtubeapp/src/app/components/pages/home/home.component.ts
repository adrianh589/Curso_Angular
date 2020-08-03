import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../../../services/youtube.service';
import {Video} from '../../models/youtube.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: Video[] = [];

  constructor(private _ys: YoutubeService) { }

  ngOnInit(): void {

    this.cargarVideos();

  }

  cargarVideos(){
    this._ys.getVideos().subscribe( response => {
      this.videos.push(...response);
    });
  }

  mostrarVideo(video: Video){
    Swal.fire({
      html: `       <h4>${video.title}</h4>
                    <iframe width="100%"
                     height="315"
                     src="https://www.youtube.com/embed/${video.resourceId.videoId}"
                     frameborder="0"
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen></iframe>`
    })
  }

}
