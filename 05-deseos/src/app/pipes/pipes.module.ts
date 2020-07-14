import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroCompletadoPipe } from './filtro-completado.pipe'; // Como no vamos a usar NgIf NgFor lo borramos de los imports



@NgModule({
  declarations: [FiltroCompletadoPipe],
  exports: [
      FiltroCompletadoPipe
  ]
})
export class PipesModule { }
