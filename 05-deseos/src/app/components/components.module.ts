import { NgModule } from '@angular/core'; //Esto SIEMPRE va a ir
import { CommonModule } from '@angular/common';
import {ListasComponent} from "./listas/listas.component";
import {IonicModule} from "@ionic/angular";
import {PipesModule} from "../pipes/pipes.module"; // Trae el ngif ngfor etc etc



@NgModule({
  declarations: [
      ListasComponent
  ], // Igual a los modulos de angular, van los componentes que utiliza este modulo
  exports: [ // Si necesito lso componentes de este modulo de forma externa
    ListasComponent // Para decir que esto se va a utilizar afuera, es decir usar su selector, su etiqueta html
  ],
  imports: [
    CommonModule,
    IonicModule,
      PipesModule
  ]
})
export class ComponentsModule { }
