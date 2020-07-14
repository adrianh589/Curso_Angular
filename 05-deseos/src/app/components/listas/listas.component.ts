import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DeseosService} from "../../services/deseos.service";
import {ListaModel} from "../../models/lista-model";
import { Router } from "@angular/router";
import {AlertController, IonList} from "@ionic/angular";

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;
  @ViewChild(IonList) lista: IonList;// este view child me permite agarrar los componentes de un html

  constructor(
      public deseosService: DeseosService,
      private router: Router,
      private alertCtrl: AlertController
  ) {
     this.deseosService = deseosService;
  }

  listaSeleccionada( lista: ListaModel ){

    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }

  }

  borrarLista( lista: ListaModel ){

    this.deseosService.borrarLista(lista);

  }

  async editarLista( lista: ListaModel ){

    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { // Un handler es una funcion que se dispara cuando el boton se toca
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }

            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();

  }

  ngOnInit() {}

}
