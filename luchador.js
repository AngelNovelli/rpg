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
exports.Luchador = void 0;
var personaje_1 = require("./personaje");
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nombre, puntosDeVida, danioFisico) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.danioFisico = danioFisico;
        _this.escudo = 0;
        _this.vulnerable = false;
        return _this;
    }
    Luchador.prototype.atacar = function () {
        var habilidades = ["Golpe Poderoso", "Carga", "Ataque Frenesi"];
        var i = Math.floor(Math.random() * habilidades.length);
        var danio = this.danioFisico;
        if (i === 0) {
            danio += 20;
            this.golpePoderoso(danio);
        }
        else if (i === 1) {
            danio += 15;
            this.carga(danio);
        }
        else if (i === 2) {
            danio -= 10;
            this.frenesi(danio);
        }
    };
    Luchador.prototype.golpePoderoso = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado su golpe poderoso causando ").concat(danio, " de da\u00F1o."));
    };
    Luchador.prototype.carga = function (danio) {
        console.log("".concat(this.nombre, " va a la carga causando ").concat(danio, " de da\u00F1o."));
    };
    Luchador.prototype.frenesi = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado un ataque de frenesi causando ").concat(danio, " de da\u00F1o continuo."));
    };
    Luchador.prototype.defender = function () {
        var habilidades = ["Escudo", "Grito de guerra", "Regeneraci\u00F3n"];
        var i = Math.floor(Math.random() * habilidades.length);
        var mitigacion = this.escudo;
        if (i === 0) {
            mitigacion += 30;
            this.puntosDeVida = this.puntosDeVida - mitigacion;
            this.recibirDanio(mitigacion, i);
        }
        else if (i === 1) {
            mitigacion += 15;
            this.puntosDeVida = this.puntosDeVida - mitigacion;
            this.recibirDanio(mitigacion, i);
        }
        else if (i === 2) {
            mitigacion += 20;
            this.puntosDeVida = this.puntosDeVida + mitigacion;
            this.recibirDanio(mitigacion, i);
        }
    };
    Luchador.prototype.recibirDanio = function (mitigacion, i) {
        if (this.vulnerable === false && i === 0) {
            console.log("".concat(this.nombre, " ha activado su bloqueo con escudo recibiendo ").concat(mitigacion, " de da\u00F1o."));
        }
        else if (this.vulnerable === false && i === 1) {
            console.log("".concat(this.nombre, " ha activado su grito de guerra recibiendo ").concat(mitigacion, " de da\u00F1o."));
        }
        else if (i === 2) {
            console.log("".concat(this.nombre, " ha activado regeneraci\u00F3n, curando puntos de vida."));
        }
    };
    return Luchador;
}(personaje_1.personaje));
exports.Luchador = Luchador;
