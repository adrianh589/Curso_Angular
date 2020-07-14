( () => {

    let miFuncion = function (a: string) {   //Pero esta es mas beneficiosa por que por ej, le peudo poner const y no cambiara su valor
        return a;                           //
    }                                       //
                                            //Ambas son las mismas
    function function2(a: string) {          //
        return a;                           //
    };

    const miFuncion3 = (a: string) => a;

    let sumar = (a: number, b: number) => a + b;

    let hulk = {
        nombre: 'Bruce',
        smash(){
            setTimeout( () => { //Aqui esta funcion flecha no modificara a lo que apunta this
                console.log(`${this.nombre} smash!!!!!`);
            }, 1000);
        }
    }

    hulk.smash();

})();
