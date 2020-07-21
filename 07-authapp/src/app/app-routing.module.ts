import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PreciosComponent} from "./components/precios/precios.component";
import {ProtegidaComponent} from "./components/protegida/protegida.component";
import {AuthGuard} from "./components/services/auth.guard";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'precios', component: PreciosComponent},
  {
    path: 'protegida', component: ProtegidaComponent,
    canActivate: [ AuthGuard ] // Propiedad que recibe todos los guardsque esa ruta debe de pasar para llegar a el
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
