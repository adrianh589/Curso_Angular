import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import {Game} from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
      .pipe(
        map( (resp: Game[]) =>{ // MAP transforma las llegadas de la peticion
          return resp.map( ({name, votos}) => ({name, value: votos}) ) // FORMA CORTA
          // return resp.map( juego => {
          //   return {
          //     name: juego.name,
          //     value: juego.votos     FORMA LARGA POCO LEGIBLE
          //   }
          // })
        })
      )
      .subscribe( resp =>  {
        // console.log(resp);
        this.juegos = resp;
      })

  }

}
