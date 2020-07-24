import { Component, OnInit } from '@angular/core';
import {HeroeModel} from "../../models/heroe.model";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {HeroesService} from "../../services/heroes.service";
import {map} from 'rxjs/operators';//El map sirve para transformal lo que un observable peude regresar
import Swal from 'sweetalert2';
import {Observable} from "rxjs";
import {ActivatedRoute, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor( private  http: HttpClient,
               private heroesService: HeroesService,
               private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id'); // Otra manera de suscribirme para obtener los parametros

    if( id !== 'nuevo' ){
      this.heroesService.getHeroe(id)
        .subscribe( (response: HeroeModel) => {
          console.log(response);
          this.heroe = response;
          this.heroe.id = id;// Al id que me viene por el url, porque firebase manje eso diferente
        } )
    }
  }


  guardar( form: NgForm ){

    if(form.invalid){
      console.log('Formulario inválido');
      return;
    }

    Swal.fire({
      title: 'Espere...',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: () => false  // Para que no se peuda cerrar al ahcer click por fuera
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if( this.heroe.id ){
      peticion = this.heroesService.actualizarHeroe(this.heroe);
    } else {
      peticion = this.heroesService.crearHeroe(this.heroe);
    }

    peticion.subscribe(response => {

      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizo correctamente',
        icon: 'success'
      });

    });

  }

}
