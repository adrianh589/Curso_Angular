import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NoPreviewUrlPipe } from './pipes/no-preview-url.pipe';  // Para obtener por http
import {DomseguroPipe} from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtistaComponent,
    SearchComponent,
    HomeComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    NoPreviewUrlPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule // Para obtener por Http
  ],
  providers: [// aca van los servicios, pero no es necesario porque el decorador lo hace automatico
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
