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
exports.Arquero = void 0;
var personaje_1 = require("./personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, puntosDeVida, danioDistancia) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.danioDistancia = danioDistancia;
        _this.escudo = 0;
        _this.vulnerable = false;
        return _this;
    }
    Arquero.prototype.atacar = function () {
        var habilidades = ["Disparo preciso", "Flecha explosiva", "Flecha venenosa"];
        var i = Math.floor(Math.random() * habilidades.length);
        var danio = this.danioDistancia;
        if (i === 0) {
            danio += 15;
            this.disparoPreciso(danio);
        }
        else if (i === 1) {
            danio += 20;
            this.disparoExplosivo(danio);
        }
        else if (i === 2) {
            danio -= 10;
            this.disparoVenenoso(danio);
        }
    };
    Arquero.prototype.disparoPreciso = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado un disparo preciso causando ").concat(danio, " de da\u00F1o."));
    };
    Arquero.prototype.disparoExplosivo = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado una flecha explosiva causando ").concat(danio, " de da\u00F1o."));
    };
    Arquero.prototype.disparoVenenoso = function (danio) {
        console.log("".concat(this.nombre, " ha lanzado una flecha venenosa causando ").concat(danio, " de da\u00F1o continuo."));
    };
    Arquero.prototype.defender = function () {
        var habilidades = ["Camuflaje", "Trampa", "Evasion"];
        var i = Math.floor(Math.random() * habilidades.length);
        var mitigacion = this.escudo;
        if (i === 0) {
            mitigacion += 30;
            this.puntosDeVida = this.puntosDeVida - mitigacion;
            this.recibirDanio(mitigacion, i);
        }
        else if (i === 1) {
            this.vulnerable = true;
            this.recibirDanio(0, i);
        }
        else if (i === 2) {
            this.recibirDanio(0, i);
        }
    };
    Arquero.prototype.recibirDanio = function (mitigacion, i) {
        if (this.vulnerable === false && i === 0) {
            console.log("".concat(this.nombre, " ha activado su camuflaje recibiendo ").concat(mitigacion, " de da\u00F1o."));
        }
        else if (this.vulnerable === true && i === 1) {
            console.log("".concat(this.nombre, " ha puesto una trampa, inmobiliza al atacante y no recibe da\u00F1o."));
        }
        else if (i === 2) {
            console.log("".concat(this.nombre, " ha evadido el ataque, no recibe da\u00F1o."));
        }
    };
    return Arquero;
}(personaje_1.personaje));
exports.Arquero = Arquero;
