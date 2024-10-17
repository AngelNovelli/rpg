import { personaje } from "./personaje";

export class Mago extends personaje {
    protected danioMagico: number;
    protected escudo: number;
    protected vulnerable: boolean;

    constructor(nombre: string, puntosDeVida: number, danioMagico: number) {
        super(nombre, puntosDeVida)
        this.danioMagico = danioMagico;
        this.escudo = 0;
        this.vulnerable = false;
    }

    public atacar(): void {
        const habilidades = [`Bola de Fuego`, `Bola de Hielo`, `Rayo`]
        const i = Math.floor(Math.random() * habilidades.length);
        let danio = this.danioMagico;

        if (i === 0) {
            danio += 15;
            this.fuego(danio);
        } else if (i === 1) {
            danio -= 10;
            this.hielo(danio);
        } else if (i === 2) {
            danio += 20;
            this.rayo(danio);
        }

    }

    protected fuego(danio: number): void {
        console.log(`${this.nombre} ha lanzado una bola de fuego causando ${danio} de daño.`)
    }

    protected hielo(danio: number): void {
        console.log(`${this.nombre} ha lanzado una bola de hielo causando ${danio} de daño.`)
    }

    protected rayo(danio: number): void {
        console.log(`${this.nombre} ha lanzado un rayo causando ${danio} de daño.`)
    }

    public defender(): void {
        const habilidades = [`Escudo`, `Invisibilidad`]
        const i = Math.floor(Math.random() * habilidades.length);
        let mitigacion = this.escudo;
        if (i === 0) {
            mitigacion += 30;
            this.puntosDeVida =  this.puntosDeVida - mitigacion;
            this.recibirDanio(mitigacion);
        } else if (i === 1) {
            this.vulnerable = true;
            this.recibirDanio(0);
        }

    }
   
    public recibirDanio(mitigacion: number): void {
        if (this.vulnerable === false) {
            console.log(`${this.nombre} ha activado un escudo recibiendo ${mitigacion} de daño.`)

        } else {
            console.log(`${this.nombre} ha activado invisibilidad, no recibe daño.`)
        }
    }


}




