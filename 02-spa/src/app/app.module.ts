
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//Rutas
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';


//Servicios
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { InfoHeroeComponent } from './components/info-heroe/info-heroe.component';
import {FormsModule} from "@angular/forms";
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [//Aqui van los componentes
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    InfoHeroeComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,//Aqui van los moduloes
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HeroesService//Aqui van todos los servicios
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
