( () => {

    console.log('Inicio');

    // @ts-ignore
    const prom1 = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Se termino el timeout');
        }, 1000);
    });

    //Then: lo que quiero ejecutar cuando haya exit = resolve
    //catch: lo que quiero ejecutar cuando ocurra un error = reject
    prom1.then(mensaje => console.log(mensaje))

    console.log('Fin');


})();
