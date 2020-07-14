import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';//
import localEs from '@angular/common/locales/es';    //Esto es pata ponerlas fechas en español
import localFr from '@angular/common/locales/fr';
                                                     //
registerLocaleData(localEs);                         //
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { MiPipePipe } from './pipes/mi-pipe.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { OcultarContrasenaPipe } from './pipes/ocultar-contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiPipePipe,
    DomseguroPipe,
    OcultarContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,// Esto es para poner las fechas en español
      useValue: 'es'     //
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
