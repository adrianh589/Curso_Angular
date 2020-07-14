(function () {
    var Avenger = /** @class */ (function () {
        //Manera rapida en que typescript nos evita tener que agregar todos los atributos y posteriormente añadirlos
        function Avenger(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
        return Avenger;
    }());
    var antman = new Avenger('Adrian', 'Dinamita');
    console.log(antman);
})();
