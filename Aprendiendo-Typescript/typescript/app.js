"use strict";
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola adrian';
    // @ts-ignore
    const obtenerSalario = () => {
        new Promise((resolve, reject) => {
            return resolve('Adrian');
        });
    };
    obtenerSalario().then(a => {
        console.log(a.toUpperCase());
    });
})();
