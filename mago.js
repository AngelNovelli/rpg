"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var personaje_1 = require("./personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, puntosDeVida, danioMagico) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.danioMagico = danioMagico;
        _this.escudo = 0;
        _this.vulnerable = false;
        return _this;
    }
    Mago.prototype.atacar = function () {
        var habilidades = ["Bola de Fuego", "Bola de Hielo", "Rayo"];
        var i = Math.floor(Math.random() * habilidades.length);
        var danio = this.danioMagico;
        if (i === 0) {
            danio += 15;
            this.fuego(danio);
        }
        else if (i === 1) {
            danio -= 10;
            this.hielo(danio);
        }
        else if (i === 2) {
            danio += 20;
            this.rayo(danio);
        }
    };
    Mago.prototype.fuego = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado una bola de fuego causando ").concat(danio, " de da\u00F1o."));
    };
    Mago.prototype.hielo = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado una bola de hielo causando ").concat(danio, " de da\u00F1o."));
    };
    Mago.prototype.rayo = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado un rayo causando ").concat(danio, " de da\u00F1o."));
    };
    Mago.prototype.defender = function () {
        var habilidades = ["Escudo", "Invisibilidad"];
        var i = Math.floor(Math.random() * habilidades.length);
        var mitigacion = this.escudo;
        if (i === 0) {
            mitigacion += 30;
            this.puntosDeVida = this.puntosDeVida - mitigacion;
            this.recibirDanio(mitigacion);
        }
        else if (i === 1) {
            this.vulnerable = true;
            this.recibirDanio(0);
        }
    };
    Mago.prototype.recibirDanio = function (mitigacion) {
        if (this.vulnerable === false) {
            console.log("".concat(this.nombre, " ha activado un escudo recibiendo ").concat(mitigacion, " de da\u00F1o."));
        }
        else {
            console.log("".concat(this.nombre, " ha activado invisibilidad, no recibe da\u00F1o."));
        }
    };
    return Mago;
}(personaje_1.personaje));
exports.Mago = Mago;
