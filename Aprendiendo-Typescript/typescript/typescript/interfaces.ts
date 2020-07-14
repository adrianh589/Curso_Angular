(() => {

    interface Xmen {
        nombre:string,
        edad:number,
        poder?:string;
    }

const enviarMision = (xmen:Xmen) => {
    console.log(`Enviando a ${ xmen.nombre }`);
}

const wolverine:Xmen = {
    nombre: 'Logan',
    edad: 55
}

enviarMision(wolverine);

})();
