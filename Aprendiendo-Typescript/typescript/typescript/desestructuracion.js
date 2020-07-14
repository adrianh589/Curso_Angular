(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitán américa',
        poder: 'Super fuerza'
    };
    var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder; //Asi desestructuramos un objeto en js
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    var extraer = function (_a) {
        var nombre = _a.nombre, clave = _a.clave;
        console.log(nombre);
        console.log(clave);
    };
    extraer(avenger);
    //Desestructurar un arreglo
    var avengers = ['Thor', 'Blackwidow', 'Ant Man', 'Iron man', 'Spiderman'];
    var arana = avengers[2]; //De esta manera se indica que la posicion 1 y 2 no me interesa
    // console.log(thor);
    // console.log(viuda);
    console.log(arana);
    var extraerFlecha = function (_a) {
        var thor = _a[0], black = _a[1], antman = _a[2];
        console.log(thor);
        console.log(black);
        console.log(antman);
    };
    console.log(extraerFlecha(avengers));
})();
