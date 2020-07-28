import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,// Aqui ponemos coomo nombre el mismo componente de esta clase
    @Inject(MAT_DIALOG_DATA) public data: any) // Aqui se reciben los parametros que llegan
  {
    console.log(data);

    this.forma = this.fb.group({
      titulo: data.titulo,
      descripcion: data.descripcion
    });
  }

  ngOnInit(): void {
  }

  guardarCambios(){
    console.log(this.forma.value);
    this.dialogRef.close(this.forma.value);// Al cerrar, se lleva al padre la informacion
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
