(() => {

    const sumar = (a: number, b: number): number => a + b;

    const nombre = (): string => 'Hola adrian';

    // @ts-ignore
    const obtenerSalario = ():Promise<string> => {

        new Promise((resolve, reject) => {
            return resolve( 'Adrian' );
        });
    }

    obtenerSalario().then(a => {
        console.log(a.toUpperCase())
    });

})
();
