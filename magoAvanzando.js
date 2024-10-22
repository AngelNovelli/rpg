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
exports.MagoAvanzado = void 0;
var mago_1 = require("./mago");
var MagoAvanzado = /** @class */ (function (_super) {
    __extends(MagoAvanzado, _super);
    function MagoAvanzado(nombre, puntosDeVida, danioMagico) {
        return _super.call(this, nombre, puntosDeVida, danioMagico) || this;
    }
    MagoAvanzado.prototype.invocarFantasma = function () {
        var fantasmas = ['Fuego', 'Hielo', 'Sombra'];
        var i = Math.floor(Math.random() * fantasmas.length);
        var fantasma = fantasmas[i];
        console.log("".concat(this.nombre, " ha invocado un fastasma de ").concat(fantasma, " para luchar justo a el."));
    };
    MagoAvanzado.prototype.atacar = function () {
        var habilidades = ['Bola de Fuego', 'Bola de Hielo', 'Rayo', 'Invocar Elemental'];
        var i = Math.floor(Math.random() * habilidades.length);
        var danio = this.danioMagico;
        if (i === 0) {
            danio += 20;
            this.fuego(danio);
        }
        else if (i === 1) {
            danio -= 5;
            this.hielo(danio);
        }
        else if (i === 2) {
            danio += 25;
            this.rayo(danio);
        }
        else if (i === 3) {
            this.invocarFantasma();
        }
    };
    return MagoAvanzado;
}(mago_1.Mago));
exports.MagoAvanzado = MagoAvanzado;
