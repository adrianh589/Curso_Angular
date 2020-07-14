import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {BodyComponent} from "./components/body/body.component";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
  declarations: [//Aca es donde se le dicea angular que componentes tiene, que modulos
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
