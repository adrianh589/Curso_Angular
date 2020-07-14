(function () {
    console.log('Inicio');
    // @ts-ignore
    var prom1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Se termino el timeout');
        }, 1000);
    });
    //Then: lo que quiero ejecutar cuando haya exit = resolve
    //catch: lo que quiero ejecutar cuando ocurra un error = reject
    prom1.then(function (mensaje) { return console.log(mensaje); });
    console.log('Fin');
})();
