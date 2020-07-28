import { Component, OnInit } from '@angular/core';
import {Marcador} from "../classes/marcador.class";
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MapaEditarComponent} from "./mapa-editar.component";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  google: any;

  marcadores: Marcador[] = [];
   lat = 51.678418;
   lng = 7.809007;

  constructor( public snackBar: MatSnackBar,
               public dialog: MatDialog) {
      let nuevoMarcador = new Marcador(51.678418,7.809007);
      this.marcadores.push(nuevoMarcador);
  }

  ngOnInit(): void {
    this.cargarStorage();
  }

  agregarMarcador(evento){

    const coords: { lat: number, lng: number } = evento.coords;
    const lat: number = coords.lat;
    const lng: number = coords.lng;

    let nuevoMarcador = new Marcador(lat,lng);
    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();

    let snackBarRef = this.snackBar.open('Marcador Agregado', 'Cerrar', { duration: 3000 });
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ));
  }

  cargarStorage(){
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  borrarMarcador(index: number){
    this.marcadores.splice(index, 1);
    this.guardarStorage();
    let snackBarRef = this.snackBar.open('Marcador Borrado', 'Cerrar', { duration: 3000 });
  }

  editarMarcador(marcador: Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, { // Cargar el componente que queremos renderizar
      width: '250px',
      data: {titulo: marcador.titulo, descripcion: marcador.descripcion} //Los datos que quiero mandar a la renderizacion
    });

    dialogRef.afterClosed().subscribe(result => { // con esto recibimos los parametros del hijo

      if(!result){
        return;
      }

      marcador.titulo = result.titulo;
      marcador.descripcion = result.descripcion;

      this.guardarStorage();

      let snackBarRef = this.snackBar.open('Marcador Actualizado', 'Cerrar', { duration: 3000 });

    });
  }

}
