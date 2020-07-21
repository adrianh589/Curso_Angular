import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {USUARIO_ROUTES} from './components/usuario/usuario.routes';

// Ejemplo: usuario/10/nuevo

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES// Como la variable que se importa YA es un arreglo, pues eliminamos el [] array, es la forma correcta de tener rutas hijas ya que el codigo queda mantenible
  },
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
