(function () {
    function getEdad(edad) {
        return edad + 200;
    }
    var nombre = 'Adrian';
    var apellido = 'Hoyos';
    var edad = 23;
    //Adrian Hoyos (Edad: 23)
    //const salida = nombre + ' ' + apellido + '( ' + edad + ' )';
    //Dentro de las llavas ${} se puede llamar funciones etx, es el mismo entorno de js
    var salida = nombre + " " + apellido + " ( " + getEdad(edad) + " )";
    console.log(salida);
})();
