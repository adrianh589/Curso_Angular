import { Pipe, PipeTransform } from '@angular/core';
import {ListaModel} from "../models/lista-model";

@Pipe({
  name: 'filtroCompletado',
  pure: false // Por defecto todos los pipes son true, al ponerlo a false entonces decimos que se habilite los cambios en tiempo real al momento de que surja un cambio
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: ListaModel[], completada: boolean = true): ListaModel[] {

    return listas.filter( lista => lista.terminada === completada );

  }

}
