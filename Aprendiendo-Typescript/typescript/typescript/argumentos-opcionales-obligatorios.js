(function () {
    //DEberian ir primero los valroes obligatorios luego lso de defecto y poy ultimo los opcionales
    function activar(quien, momento, objeto) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
        if (momento) {
            console.log(quien + " activo la " + objeto + " en la " + momento);
        }
        else {
            console.log(quien + " activo la " + objeto);
        }
    }
    activar('Gordon', 'tarde');
})();
