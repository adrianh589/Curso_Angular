(function () {
    // Uso de Let y Const
    var nombre = 'Ricardo Tapia';
    var edad = 23;
    var PERSONAJE = { nombre: nombre, edad: edad };
    console.log(PERSONAJE.nombre);
    console.log(PERSONAJE.edad);
    var batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    console.log(batman);
    // Convertir esta funcion a una funcion de flecha
    function resultadoDoble(a, b) {
        return (a + b) * 2;
    }
    var resultado = function (a, b) { return (a + b) * 2; };
    console.log(resultado(3, 2));
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger(nombre, poder, arma) {
        if (arma === void 0) { arma = 'arco'; }
        var mensaje;
        if (poder) {
            return mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else {
            return mensaje = nombre + ' tiene un ' + poder;
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
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(base, altura) {
            var _this = this;
            this.base = base;
            this.altura = altura;
            this.area = function () { return _this.base * _this.altura; };
        }
        return Rectangulo;
    }());
    var rectangle = new Rectangulo(5, 2);
    console.log(rectangle.area());
})();
