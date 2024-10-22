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
exports.LuchadorAvanzado = void 0;
var luchador_1 = require("./luchador");
var LuchadorAvanzado = /** @class */ (function (_super) {
    __extends(LuchadorAvanzado, _super);
    function LuchadorAvanzado(nombre, puntosDeVida, danioFisico) {
        return _super.call(this, nombre, puntosDeVida, danioFisico) || this;
    }
    LuchadorAvanzado.prototype.golpeFurioso = function () {
        var danio = this.danioFisico + 30;
        console.log("".concat(this.nombre, " ha golpeado el suelo con furia infligiendo ").concat(danio, " de da\u00F1o a todos los enemigos del lugar."));
    };
    LuchadorAvanzado.prototype.atacar = function () {
        var habilidades = ['Golpe Poderoso', 'Carga', 'Ataque Frenesi', 'Golpe Terremoto'];
        var i = Math.floor(Math.random() * habilidades.length);
        var danio = this.danioFisico;
        if (i === 0) {
            danio += 25;
            this.golpePoderoso(danio);
        }
        else if (i === 1) {
            danio += 20;
            this.carga(danio);
        }
        else if (i === 2) {
            danio -= 5;
            this.frenesi(danio);
        }
        else if (i === 3) {
            this.golpeFurioso();
        }
    };
    return LuchadorAvanzado;
}(luchador_1.Luchador));
exports.LuchadorAvanzado = LuchadorAvanzado;
