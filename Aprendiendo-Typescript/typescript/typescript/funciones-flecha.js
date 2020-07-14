(function () {
    var miFuncion = function (a) {
        return a; //
    }; //
    //Ambas son las mismas
    function function2(a) {
        return a; //
    }
    ;
    var miFuncion3 = function (a) { return a; };
    var sumar = function (a, b) { return a + b; };
    var hulk = {
        nombre: 'Bruce',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash!!!!!");
            }, 1000);
        }
    };
    hulk.smash();
})();
