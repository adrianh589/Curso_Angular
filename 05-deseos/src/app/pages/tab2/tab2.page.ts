import { Component } from '@angular/core';
import {DeseosService} from "../../services/deseos.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( //Los constructores en angular SE LLAMAN UNA UNICA VEZ sin importar cuantas inyecciones tenga dado que esta de manera global, es decir, en toda la aplicacion
      deseos: DeseosService
  ) {}

}
