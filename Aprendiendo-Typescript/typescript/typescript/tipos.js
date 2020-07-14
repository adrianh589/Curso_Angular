(function () {
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
    //---------------------------------------
    var mensaje = 'Hola';
    var numero = 123;
    var verdad = true;
    var hoy = new Date();
    //Definiendo lso tipos que acepta
    //let cualquiercosa:string | number;
    var cualquiercosa;
    //El no definir el tipo a la variable , que como any, y pues acepta cualquier cosa
    cualquiercosa = numero;
    cualquiercosa = verdad;
    cualquiercosa = hoy;
    var spiderman = {
        nombre: 'Peter',
        edad: 30
    };
})();
