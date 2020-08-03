import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any = [];

  constructor( private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe(response => this.paises = response );

  }

  drop(evento: CdkDragDrop<any>){
    // console.log('ok', event);
    moveItemInArray( this.paises, evento.previousIndex, evento.currentIndex ); // Funcion que viene en el CDK, sirve para mover el arreglo, ya que solo lo hace de manera visual 
  }

}
