(() => {

    const retirarDinero = (montoRetirar: number):Promise<number> => {

        let dineroActual = 1000;

        return new Promise((resolve, reject) => {
            if(montoRetirar > dineroActual){
                reject('No hay suficiente saldo');
            }
            dineroActual -= montoRetirar;
            resolve( dineroActual );
        });

    }

    retirarDinero(1500)
        .then( montoActual => console.log(`Me queda ${montoActual}`) )
        .catch( err => console.warn( err ) );

})();
