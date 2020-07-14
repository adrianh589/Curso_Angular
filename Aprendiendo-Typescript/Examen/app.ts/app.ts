(()=>{

  // Uso de Let y Const
  let nombre = 'Ricardo Tapia';
  const edad = 23;

  var PERSONAJE = { nombre, edad };

  console.log(PERSONAJE.nombre);
  console.log(PERSONAJE.edad);


  // Cree una interfaz que sirva para validar el siguiente objeto

  interface superheroe{
    nombre:string,
    artesMarciales:string[]
  }

  var batman:superheroe = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  console.log(batman);

  // Convertir esta funcion a una funcion de flecha
  function resultadoDoble( a, b ){
    return (a + b) * 2
  }

  let resultado = (a:number, b:number) => ( a + b ) * 2;

  console.log(resultado(3,2));

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger( nombre: string, poder?:string, arma:string='arco' ){
    let mensaje;
    if( poder ){
      return mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      return mensaje = nombre + ' tiene un ' + poder
    }
  }

  console.log(getAvenger('Adrian'));

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class Rectangulo{
    constructor(
        public base,
        public altura
    ) {
    }

    area = () => this.base * this.altura;


  }

  const rectangle = new Rectangulo(5,2);

  console.log(rectangle.area());


})();