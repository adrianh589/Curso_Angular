import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import {RouterModule} from '@angular/router';
import {BarChartModule} from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BarChartModule
  ],
  exports: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ]
})
export class ComponentsModule { }
