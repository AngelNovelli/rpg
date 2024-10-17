import { personaje } from "./personaje";

export class Arquero extends personaje {
    protected danioDistancia: number;
    protected escudo: number;
    protected vulnerable: boolean;

    constructor(nombre: string, puntosDeVida: number, danioDistancia: number) {
        super(nombre, puntosDeVida)
        this.danioDistancia = danioDistancia;
        this.escudo = 0;
        this.vulnerable = false;
    }

    public atacar(): void {
        const habilidades = [`Disparo preciso`, `Flecha explosiva`, `Flecha venenosa`]
        const i = Math.floor(Math.random() * habilidades.length);

        let danio = this.danioDistancia;

        if (i === 0) {
            danio += 15;
            this.disparoPreciso(danio);
        } else if (i === 1) {
            danio += 20;
            this.disparoExplosivo(danio);
        } else if (i === 2) {
            danio -= 10;
            this.disparoVenenoso(danio);
        }
    }

    protected disparoPreciso(danio: number): void {
        console.log(`${this.nombre} ha lanzado un disparo preciso causando ${danio} de daño.`)
    }

    protected disparoExplosivo(danio: number): void {
        console.log(`${this.nombre} ha lanzado una flecha explosiva causando ${danio} de daño.`)
    }

    protected disparoVenenoso(danio: number): void {
        console.log(`${this.nombre} ha lanzado una flecha venenosa causando ${danio} de daño continuo.`)
    }

    public defender(): void {
        const habilidades = [`Camuflaje`, `Trampa`, `Evasion`]
        const i = Math.floor(Math.random() * habilidades.length);
        let mitigacion = this.escudo;

        if (i === 0) {
            mitigacion += 30;
            this.puntosDeVida = this.puntosDeVida - mitigacion;
            this.recibirDanio(mitigacion, i);
        } else if (i === 1) {
            this.vulnerable = true;
            this.recibirDanio(0, i);
        } else if (i === 2) {
            this.recibirDanio(0, i);
        }

    }

    public recibirDanio(mitigacion: number, i: number): void {
        if (this.vulnerable === false && i === 0) {
            console.log(`${this.nombre} ha activado su camuflaje recibiendo ${mitigacion} de daño.`)

        } else if (this.vulnerable === true && i === 1) {
            console.log(`${this.nombre} ha puesto una trampa, inmobiliza al atacante y no recibe daño.`)
        } else if (i === 2) {
            console.log(`${this.nombre} ha evadido el ataque, no recibe daño.`)
        }
    }

}




