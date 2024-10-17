import { Mago } from "./mago";

export class MagoAvanzado extends Mago {
    constructor(nombre: string, puntosDeVida: number, danioMagico: number) {
        super(nombre, puntosDeVida, danioMagico);
    }

    public invocarFantasma(): void {
        const fantasmas = ['Fuego', 'Hielo', 'Sombra'];
        const i = Math.floor(Math.random() * fantasmas.length);
        const fantasma = fantasmas[i];
        console.log(`${this.nombre} ha invocado un fastasma de ${fantasma} para luchar justo a el.`);
    }

    public atacar(): void {
        const habilidades = ['Bola de Fuego', 'Bola de Hielo', 'Rayo', 'Invocar Elemental'];
        const i = Math.floor(Math.random() * habilidades.length);
        let danio = this.danioMagico;

        if (i === 0) {
            danio += 20;
            this.fuego(danio);
        } else if (i === 1) {
            danio -= 5;
            this.hielo(danio);
        } else if (i === 2) {
            danio += 25;
            this.rayo(danio);
        } else if (i === 3) {
            this.invocarFantasma();
        }
    }
}
