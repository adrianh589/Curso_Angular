import { Component, OnInit } from '@angular/core';
import {DeseosService} from "../../services/deseos.service";
import {ActivatedRoute} from "@angular/router";
import {ListaModel} from "../../models/lista-model";
import {ListaItemModel} from "../../models/lista-item-model";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: ListaModel;
  nombreItem = '';

  constructor( private deseosService: DeseosService,
               private Route: ActivatedRoute) { //Activate route para recibir parametros

    const listaId = this.Route.snapshot.paramMap.get('idLista');
    this.lista = this.deseosService.obtenerLista(listaId);

  }

  ngOnInit() {
  }

  agregarItem(){

    if( this.nombreItem.length === 0 ){
      return;
    }

    const nuevoItem:any = new ListaItemModel(this.nombreItem);
    this.lista.items.push( nuevoItem );

    this.nombreItem = '';
    this.deseosService.guardarStorage();

  }

  cambioCheck( items: ListaItemModel ){


    const pendientes = this.lista.items
        .filter( itemData =>  !itemData.completado ) // Filter es un metodo que regresa una coleccion de elemtentos que cumplan cierta condicion
        .length;

    if ( pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseosService.guardarStorage();
  }

  borrar( i: number ){

    this.lista.items.splice(i,1);
    this.deseosService.guardarStorage();
  }


}
