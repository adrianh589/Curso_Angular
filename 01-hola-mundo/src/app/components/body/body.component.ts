import { Component } from '@angular/core';

@Component({
  selector: 'app-body',//Etiqueta html a apuntar
  templateUrl: 'body.component.html'//asi nos traemos el navbar de bootstrap
})
export class BodyComponent{

  mostrar: boolean = true;

  frase: any = {
    mensaje: 'Un gran poder conlleva una gran responsabilidad',
    autor: 'Ben parker'
  }

  frameworks: string[] = ['Symfony', 'Angular', 'React'];

}
