import { Mago } from "./mago";
import { Arquero } from "./arquero";
import { Luchador } from "./luchador";
import { MagoAvanzado } from "./magoAvanzando";
import { ArqueroAvanzado } from "./arqueroAvanzado";
import { LuchadorAvanzado } from "./luchadorAvanzado";

const mago = new Mago("Juanma", 100, 50);
console.log(mago);
mago.atacar();
mago.defender();
mago.subirDeNivel();
console.log(`La vida luego después de ser atacado es ${mago.getPuntosDeVida()}`); //Verifico que el daño haya sido infligido en el mago.


const arquero = new Arquero("Guille", 120, 80);
console.log(arquero);
arquero.atacar();
arquero.defender();
arquero.subirDeNivel();
console.log(`La vida luego después de ser atacado es ${arquero.getPuntosDeVida()}`); //Verifico que el daño haya sido infligido en el arquero.


const luchador = new Luchador("Elias", 150, 70);
console.log(luchador);
luchador.atacar();
luchador.defender();
luchador.subirDeNivel();
console.log(`La vida luego después de ser atacado es ${luchador.getPuntosDeVida()}`); //Verifico que el daño haya sido infligido en el luchador.

const magoAvanzado = new MagoAvanzado("Alan", 120, 70);
console.log(magoAvanzado);
magoAvanzado.atacar();
magoAvanzado.defender();
magoAvanzado.subirDeNivel();
console.log(`La vida luego después de ser atacado es ${magoAvanzado.getPuntosDeVida()}`); //Verifico que el daño haya sido infligido en el mago avanzado.

const arqueroAvanzado = new ArqueroAvanzado("Camilo", 140, 100);
console.log(arqueroAvanzado);
arqueroAvanzado.atacar();
arqueroAvanzado.defender();
arqueroAvanzado.subirDeNivel();
console.log(`La vida luego después de ser atacado es ${arqueroAvanzado.getPuntosDeVida()}`); //Verifico que el daño haya sido infligido en el arquero avanzado.

const luchadorAvanzado = new LuchadorAvanzado("Matias", 170, 90);
console.log(luchadorAvanzado);
luchadorAvanzado.atacar();
luchadorAvanzado.defender();
luchadorAvanzado.subirDeNivel();
console.log(`La vida luego después de ser atacado es ${luchadorAvanzado.getPuntosDeVida()}`); //Verifico que el daño haya sido infligido en el mago avanzado.