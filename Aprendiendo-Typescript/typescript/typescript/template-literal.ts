(function () {

    function getEdad(edad:number) {
        return edad + 200;
    }

    const nombre    = 'Adrian';
    const apellido  = 'Hoyos';
    const edad      = 23;

    //Adrian Hoyos (Edad: 23)
    //const salida = nombre + ' ' + apellido + '( ' + edad + ' )';
    //Dentro de las llavas ${} se puede llamar funciones etx, es el mismo entorno de js
    const salida = `${nombre} ${apellido} ( ${getEdad(edad)} )`;
    console.log(salida);

})();
