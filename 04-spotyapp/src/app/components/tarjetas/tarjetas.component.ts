import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent {

  @Input() items: any [] = [];

  constructor(
    private router: Router// Router para hacer redirecciones
  ) { }

  verArtista( item: any ){
    let artistId;
    if (item.type === 'artist' ){
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId]);
  }

}
