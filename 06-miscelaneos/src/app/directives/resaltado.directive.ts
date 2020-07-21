import { Directive, ElementRef, HostListener, Input } from '@angular/core';// ElementRef para los estilso de los atributos css -HostListener para los eventos ( en este caso mouse )

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("color") nuevoColor: string;

  constructor( private el: ElementRef) {
    console.log("Directiva llamada");
    el.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar( this.nuevoColor || 'yellow' );
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }

  private resaltar ( color: string ){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
