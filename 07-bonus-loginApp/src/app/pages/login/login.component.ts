import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsuarioModel} from "../../models/usuario.model";
import {AuthService} from "../../services/auth.service";
//npm install sweetalert2@v9.11.0 Version de sweet alert que funciona
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit(  ) {
    if(localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login( form: NgForm ){
    if( form.invalid ){
      // console.log('Formulario no valido');// console.log(form);// console.log(form.controls.pass.errors)
      return;
    }

    // Esto es para hacer el loading con sweet alert
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: 'Espere porfavor...'
    });
    Swal.showLoading(); // Para mostrar la pantalla de carga, aqui lo inicializamos pero debemos cancelarlo


    this.auth.login(this.usuario).subscribe(respuesta => {

      console.log(respuesta);
      Swal.close(); // Asi se cierra el sweet alert


      if(this.recordarme){
        localStorage.setItem('email', this.usuario.email);
      }


      this.router.navigateByUrl('/home');

    }, (err) => {
      console.log(err.error.error.message);

      Swal.fire({           // Mostrar la alerta de error
        icon: "error",
        title: 'Error al autenticar',
        text: err.error.error.message
      });
    });

  }

}
