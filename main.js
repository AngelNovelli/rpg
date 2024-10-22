"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mago_1 = require("./mago");
var arquero_1 = require("./arquero");
var luchador_1 = require("./luchador");
var magoAvanzando_1 = require("./magoAvanzando");
var arqueroAvanzado_1 = require("./arqueroAvanzado");
var luchadorAvanzado_1 = require("./luchadorAvanzado");
var mago = new mago_1.Mago("Juanma", 100, 50);
console.log(mago);
mago.atacar();
mago.defender();
mago.subirDeNivel();
console.log("La vida luego despu\u00E9s de ser atacado es ".concat(mago.getPuntosDeVida())); //Verifico que el daño haya sido infligido en el mago.
var arquero = new arquero_1.Arquero("Guille", 120, 80);
console.log(arquero);
arquero.atacar();
arquero.defender();
arquero.subirDeNivel();
console.log("La vida luego despu\u00E9s de ser atacado es ".concat(arquero.getPuntosDeVida())); //Verifico que el daño haya sido infligido en el arquero.
var luchador = new luchador_1.Luchador("Elias", 150, 70);
console.log(luchador);
luchador.atacar();
luchador.defender();
luchador.subirDeNivel();
console.log("La vida luego despu\u00E9s de ser atacado es ".concat(luchador.getPuntosDeVida())); //Verifico que el daño haya sido infligido en el luchador.
var magoAvanzado = new magoAvanzando_1.MagoAvanzado("Alan", 120, 70);
console.log(magoAvanzado);
magoAvanzado.atacar();
magoAvanzado.defender();
magoAvanzado.subirDeNivel();
console.log("La vida luego despu\u00E9s de ser atacado es ".concat(magoAvanzado.getPuntosDeVida())); //Verifico que el daño haya sido infligido en el mago avanzado.
var arqueroAvanzado = new arqueroAvanzado_1.ArqueroAvanzado("Camilo", 140, 100);
console.log(arqueroAvanzado);
arqueroAvanzado.atacar();
arqueroAvanzado.defender();
arqueroAvanzado.subirDeNivel();
console.log("La vida luego despu\u00E9s de ser atacado es ".concat(arqueroAvanzado.getPuntosDeVida())); //Verifico que el daño haya sido infligido en el arquero avanzado.
var luchadorAvanzado = new luchadorAvanzado_1.LuchadorAvanzado("Matias", 170, 90);
console.log(luchadorAvanzado);
luchadorAvanzado.atacar();
luchadorAvanzado.defender();
luchadorAvanzado.subirDeNivel();
console.log("La vida luego despu\u00E9s de ser atacado es ".concat(luchadorAvanzado.getPuntosDeVida())); //Verifico que el daño haya sido infligido en el mago avanzado.
