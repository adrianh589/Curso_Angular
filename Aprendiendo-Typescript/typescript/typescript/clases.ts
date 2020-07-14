(() => {

    class Avenger{
        //Manera rapida en que typescript nos evita tener que agregar todos los atributos y posteriormente añadirlos
        constructor(   public nombre         : string,
                       public equipo         : string,
                       public nombreReal   ? : string,
                       public puedePelear  ? : boolean,
                       public peleasGanadas ? : number
        ) {}

    }

    const antman = new Avenger('Adrian', 'Dinamita');

    console.log(antman)


})();
