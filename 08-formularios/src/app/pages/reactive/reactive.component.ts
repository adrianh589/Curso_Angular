import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidadoresService} from "../../services/validadores.service";


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup; // Para hacer referencia a mi formulario

  constructor(private fb: FormBuilder,
              private validadoresService: ValidadoresService) {// Esta inyeccion permite manipular formularios reactivos mas facil
    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListeners();
  }

  ngOnInit(): void {

  }

  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;// Este alias es para saber que es un FormArray un arreglo del formulario
  }

  // un getter es una fomra de obtener una propiedad
  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched; // forma.get obtiene el nombre de la propiedad
  }

  get apellidoNoValido() {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get distritoNoValido() {
    return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched;
  }

  get ciudadNoValida() {
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }

  get pass1NoValido() {
    return this.forma.get('password1').invalid && this.forma.get('password1').touched;
  }

  get pass2NoValido() {
    const pass1 = this.forma.get('password1').value;
    const pass2 = this.forma.get('password2').value;

    return (pass1 != pass2);
  }

  get usuarioNoValido() {
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
  }


  /*
  * Validadores sincronos: Son validadores que se pueden hacer inmediatamente
  * los cuales no requieren interaccion con servicios web o bien se ejecuten en el mismo hilo de tiempo
  *
  * Validadores Asincronos:
  * */

  crearFormulario() {
    this.forma = this.fb.group({
        // 1era posicion: valor por defecto, 2da posicion: validacion sincrona 3era posicion: validacion Asincrona
        nombre: ['', [Validators.required, Validators.minLength(5)]], // Validators es un paquete cual se peuden usar funciones del HTML en cuanto a validaciones
        apellido: ['', [Validators.required, Validators.minLength(5), this.validadoresService.noHerrera]],  // LA funcion noHerrera creada en el servicio se almecena en el objeto con la propiedad errors
        correo: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'), Validators.required]],
        usuario: ['', , this.validadoresService.existeUsuario],
        password1: ['', Validators.required],// AQUI NO SE DEBE PONER LA VALIDACION de contraseñas debido a que hasta aca no sabemos si queremos comparar este valor con uno que este mas abajo, lo mas optimo seria pasar por parametro otro objeto que se ve mas abajo
        password2: ['', Validators.required],// No se mandan argumentos porque una validacion de este tipo lo que hace es madnar todo el control y unicamente necesito el valor de ese control y asi saber si existe o no
        direccion: this.fb.group({ // Para anidar un campo de objetos
          distrito: ['', Validators.required],
          ciudad: ['', Validators.required]
        }),
        pasatiempos: this.fb.array([ // Para anidar un campo de arreglos

        ])
      },
      {
        validators: [this.validadoresService.passwordsIguales('password1', 'password2')] // Aqui definimos los validadores ay que hasta este punto el formulario ya ha sido creado
      }
    );
  }

  crearListeners(){
    // this.forma.valueChanges.subscribe( this.callbackCrearListeners ); // Para estar al tanto ( para todos los campos )
    // this.forma.statusChanges.subscribe( this.callbackStatusChanges ); // de los cambios del formulario ( para todos los campos )

    this.forma.get('nombre').valueChanges.subscribe(console.log); // En tiempo real, ver lso cambios de un campo especificado, para un campo en general
  }

  // Funciones callbacks creadas por mi AH
  callbackStatusChanges(status){
    console.log(status);
  }

  callbackCrearListeners(valor){
    console.log(valor)
  }
  //--------------------------------------------

  cargarDataAlFormulario() {
    this.forma.reset({ // reset DEJA pasar la informacion en submit, solo ignora los campos asi no sean validos
      //this.forma.setValue({
      nombre: 'Adrian',
      apellido: 'Hoyos',
      correo: 'adrianh_589@hotmail.com',
      password1: '123',
      password2: '123',
      direccion: {
        distrito: 'Cundinamarca',
        ciudad: 'Bogotá'
      }
    });

    //Manera de cargar el array control
    ['Comer', 'Dormir'].forEach(valor => this.pasatiempos.push(this.fb.control(valor)));
  }

  agregarPasaTiempo() {
    this.pasatiempos.push(this.fb.control('', Validators.required));
  }

  borrarPasaTiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }

  guardar() { // a diferencia de los formularios por template no es necesario el parametro, ya que lo tengo a la mano
    console.log(this.forma);

    if (this.forma.invalid) {

      Object.values(this.forma.controls).forEach(data => {

        if (data instanceof FormGroup) {

          Object.values(data.controls).forEach(data => {
            data.markAsTouched();
          })

        } else {
          data.markAsTouched();
        }


      })
    }

    // Posteo de la informacion
    this.forma.reset({ //Reset para resetear la informacion (sin parametros resetea todos los valores) (con parametros,se establece cada uno de los valores que se quieren tener por defecto)
      nombre: 'Sin nombre'
    });

  }

}
