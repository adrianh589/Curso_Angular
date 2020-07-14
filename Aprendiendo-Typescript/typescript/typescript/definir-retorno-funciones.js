(function () {
    var sumar = function (a, b) { return a + b; };
    var nombre = function () { return 'Hola adrian'; };
    // @ts-ignore
    var obtenerSalario = function () {
        // @ts-ignore
        new Promise(function (resolve, reject) {
            return resolve('Adrian');
        });
    };
    obtenerSalario().then(function (a) {
        console.log(a.toUpperCase());
    });
})();
