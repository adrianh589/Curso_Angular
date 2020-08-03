import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';
import {ComponentsModule} from './components/components.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import {environment} from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    NgxChartsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
