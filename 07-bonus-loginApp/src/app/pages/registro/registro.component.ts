import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import Swal from "sweetalert2";

import {UsuarioModel} from "../../models/usuario.model";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor( private authService: AuthService,
               private router: Router) {  }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ){
    if( form.invalid ){ // Para que no haga nada si el formulario es invalido
      return;
    }

    // console.log('Formulario enviado');
    // console.log(this.usuario);
    // console.log(form);
    //pristine: me dice si el fomrulario lo manipulo el usuario o no, almenos un campo

    //En este caso el email es valido por que en el formulario puse la propiedad email que maneja angular


    // Esto es para hacer el loading con sweet alert
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: 'Espere porfavor...'
    });
    Swal.showLoading(); // Para mostrar la pantalla de carga, aqui lo inicializamos pero debemos cancelarlo

    this.authService.nuevoUsuario(this.usuario).subscribe( respuesta => {
      console.log(respuesta);

      if(this.recordarme){
        localStorage.setItem('email', this.usuario.email);
      }

      this.router.navigateByUrl('/home');

      Swal.close();

      Swal.fire({
        icon: "success",
        text: 'Usuario creado correctamente'
      });
    }, err => {
      console.log(err.error.error.message);

      Swal.fire({           // Mostrar la alerta de error
        icon: "error",
        title: 'Error al autenticar',
        text: err.error.error.message
      });
    } );
  }

}
