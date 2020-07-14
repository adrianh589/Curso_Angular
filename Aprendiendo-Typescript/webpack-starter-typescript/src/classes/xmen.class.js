"use strict";
/*Un decorador es una funcion que se ejecuta en las clases y expande la funcionalidad*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function imprimirConsola(constructorClase) {
    console.log(constructorClase);
}
let Xmen = class Xmen {
    constructor(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    imprimir() {
        console.log(`${this.nombre} - ${this.clave}`);
    }
};
Xmen = __decorate([
    imprimirConsola
], Xmen);
exports.Xmen = Xmen;
