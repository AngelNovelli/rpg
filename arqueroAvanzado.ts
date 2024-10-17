import { Arquero } from "./arquero";

export class ArqueroAvanzado extends Arquero {
    constructor(nombre: string, puntosDeVida: number, danioDistancia: number) {
        super(nombre, puntosDeVida, danioDistancia);
    }

    public flechaDeTormenta(): void {
        const danio = this.danioDistancia + 30;
        console.log(`${this.nombre} ha disparado una flecha de tormenta causando ${danio} de daño en área.`);
    }

    public atacar(): void {
        const habilidades = ['Disparo preciso', 'Flecha explosiva', 'Flecha venenosa', 'Flecha de Tormenta'];
        const i = Math.floor(Math.random() * habilidades.length);
        let danio = this.danioDistancia;

        if (i === 0) {
            danio += 20;
            this.disparoPreciso(danio);
        } else if (i === 1) {
            danio += 25;
            this.disparoExplosivo(danio);
        } else if (i === 2) {
            danio -= 5;
            this.disparoVenenoso(danio);
        } else if (i === 3) {
            this.flechaDeTormenta();
        }
    }
}
