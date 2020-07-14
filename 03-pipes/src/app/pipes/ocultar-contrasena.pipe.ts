import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarContrasena'
})
export class OcultarContrasenaPipe implements PipeTransform {

  transform(value: string, estado: boolean): string {
    return (estado) ? '*'.repeat(value.length) : value ;
  }

}
