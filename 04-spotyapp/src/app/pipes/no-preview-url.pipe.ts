import { Pipe, PipeTransform } from '@angular/core';
import {isNull} from '@angular/compiler/src/output/output_ast';

@Pipe({
  name: 'noPreviewUrl'
})
export class NoPreviewUrlPipe implements PipeTransform {

  transform( value: any ): string {
    if(value == null){
      return 'Vista previa no disponible';
    }
    return value;
  }

}
