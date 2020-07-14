import { Injectable } from '@angular/core';
import {ListaModel} from "../models/lista-model";

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: ListaModel[] = [];

  constructor() {

    this.cargarStorage();

    // const lista1 = new ListaModel( 'Recolectar piedras del infinito' );
    // const lista2 = new ListaModel('Aniquilar al mundo');
    //
    // this.listas.push(lista1, lista2);

  }

  crearLista(titulo: string){
    const nuevaLista = new ListaModel(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  obtenerLista( id: string | number ){
    id = Number(id);

    return this.listas.find( listaData => listaData.id === id );
  }

  guardarStorage(){

    localStorage.setItem('data' , JSON.stringify(this.listas));// Local storge guara SOLO strings, JSON stringify es el mismo objeto PERO en STRING plano

  }

  cargarStorage(){

    if( localStorage.getItem('data') ){
      this.listas = JSON.parse(localStorage.getItem('data'));// Para convertir el string json en un objeto
    } else {
      this.listas = [];
    }

  }

  borrarLista( lista: ListaModel ){

    console.log(lista);
    this.listas = this.listas.filter( listaData => listaData.id !== lista.id );
    this.guardarStorage();
  }

}
