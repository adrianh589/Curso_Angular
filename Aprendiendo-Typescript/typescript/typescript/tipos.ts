
(function () {

    function saludar(nombre: string) {
        console.table('Hola ' + nombre); // Hola Logan
    }

    const wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
//---------------------------------------
    let mensaje: string = 'Hola';
    let numero: number = 123;
    let verdad: boolean = true;
    let hoy: Date = new Date();

//Definiendo lso tipos que acepta
//let cualquiercosa:string | number;
    let cualquiercosa;

//El no definir el tipo a la variable , que como any, y pues acepta cualquier cosa
    cualquiercosa = numero;
    cualquiercosa = verdad;
    cualquiercosa = hoy;

    let spiderman = {
        nombre: 'Peter',
        edad: 30
    }
})();