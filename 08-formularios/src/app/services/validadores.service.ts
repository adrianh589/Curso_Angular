import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

interface ErrorValidate {
  [s:string]: boolean
}

/**
 * Los servicios es donde se centralizan los metodos, por ejemplo los helpers de PHP
 */

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate>{

    return new Promise( (resolve, reject) => {

      setTimeout(() => {

      if( control.value  === 'dark' ){
        resolve({existe: true});
      } else{
        resolve(null);
      }

      }, 3500)

    });

  }

  noHerrera( control: FormControl ): ErrorValidate{

    //el ? nos dice que si hay algo que se peuda convertir a lowerCase lo hace, si no hay pues no lo hace, es opcional
    if (  control.value?.toLowerCase() === 'herrera2' ) {
      return {
        noHerrera: true
      }
    }

    return null;

  }

  //Se debe retornar una funcion para los validators del formulario reactivo
  passwordsIguales(pass1Name: string, pass2Name: string){
    return (formGroup: FormGroup) => {
        const pass1Control = formGroup.controls[pass1Name];
        const pass2Control = formGroup.controls[pass2Name];

        if( pass1Control.value === pass2Control.value ){
          pass2Control.setErrors(null);
        }else{
          pass2Control.setErrors({noEsIgual: true});
        }
    }
  }

}
