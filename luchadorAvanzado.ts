import { Luchador } from "./luchador";

export class LuchadorAvanzado extends Luchador {
    constructor(nombre: string, puntosDeVida: number, danioFisico: number) {
        super(nombre, puntosDeVida, danioFisico);
    }

    public golpeFurioso(): void {
        const danio = this.danioFisico + 30;
        console.log(`${this.nombre} ha golpeado el suelo con furia infligiendo ${danio} de daño a todos los enemigos del lugar.`);
    }

    public atacar(): void {
        const habilidades = ['Golpe Poderoso', 'Carga', 'Ataque Frenesi', 'Golpe Terremoto'];
        const i = Math.floor(Math.random() * habilidades.length);
        let danio = this.danioFisico;

        if (i === 0) {
            danio += 25;
            this.golpePoderoso(danio);
        } else if (i === 1) {
            danio += 20;
            this.carga(danio);
        } else if (i === 2) {
            danio -= 5;
            this.frenesi(danio);
        } else if (i === 3) {
            this.golpeFurioso();
        }
    }
}
