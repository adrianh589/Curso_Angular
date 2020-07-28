import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {BuscarComponent} from "./components/pages/buscar/buscar.component";
import {DetalleComponent} from "./components/pages/buscar/detalle/detalle.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'buscar/:pelicula', component: BuscarComponent},
  {path: 'detalle/:pelicula/:path', component: DetalleComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
