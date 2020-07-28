import {Component, OnInit} from '@angular/core';
import {PeliculasService} from "../../../services/peliculas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  carteleras: Object[];
  populares: Object[];
  drama: Object[];

  constructor( private _ps: PeliculasService,
               private router: Router) {
    this.getPopulares();
    this.getCarteleras();
    this.getDramas();
  }

  ngOnInit(): void {
  }

  getPopulares() {
    this._ps.getPopulares().subscribe(data => {
      this.populares = Object.assign(data, {titulo: "Populares"});
    })
  }

  getCarteleras() {
    this._ps.getCarteleras().subscribe(res => {
      this.carteleras = Object.assign(res, {titulo: "Carteleras"});
      console.log(this.carteleras)
    })
  }

  getDramas() {
    this._ps.getDramas().subscribe(res => {
      this.drama = Object.assign(res, {titulo: "Dramas"});
    })
  }

}
