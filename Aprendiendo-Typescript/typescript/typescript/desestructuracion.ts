( () => {

const avenger = {
    nombre  : 'Steve',
    clave   : 'Capitán américa',
    poder   : 'Super fuerza'
}

    const { nombre, clave, poder } = avenger;//Asi desestructuramos un objeto en js

    console.log(nombre);
    console.log(clave);
    console.log(poder);

    const extraer = ({nombre, clave}:any) => {
        console.log(nombre);
        console.log(clave);
    }

    extraer(avenger);

    //Desestructurar un arreglo
    const avengers: string[] = ['Thor', 'Blackwidow', 'Ant Man', 'Iron man', 'Spiderman'];

    const [ , , arana ] = avengers; //De esta manera se indica que la posicion 1 y 2 no me interesa

    // console.log(thor);
    // console.log(viuda);
    console.log(arana);

    const extraerFlecha = ( [thor, black, antman]:any ) => {
        console.log(thor);
        console.log(black);
        console.log(antman)
    }

    console.log(extraerFlecha(avengers));


})();
