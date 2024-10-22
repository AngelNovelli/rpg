"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personaje = void 0;
var personaje = /** @class */ (function () {
    function personaje(nombre, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
    }
    // Getters
    personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    personaje.prototype.getPuntosDeVida = function () {
        return this.puntosDeVida;
    };
    // Setters
    personaje.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    personaje.prototype.setPuntosDeVida = function (puntosDeVida) {
        this.puntosDeVida = puntosDeVida;
    };
    personaje.prototype.subirDeNivel = function () {
        this.nivel++;
        console.log("".concat(this.nombre, " ha subido a nivel ").concat(this.nivel, ", es cada vez m\u00E1s fuerte."));
    };
    return personaje;
}());
exports.personaje = personaje;
