import { personaje } from "./personaje";

export class Luchador extends personaje {
protected danioFisico: number;
protected escudo: number;
protected vulnerable: boolean;

constructor(nombre : string, puntosDeVida : number, danioFisico : number){
    super(nombre,puntosDeVida)
    this.danioFisico = danioFisico;
    this.escudo = 0;
    this.vulnerable = false;
}

public atacar(): void{
    const habilidades = [`Golpe Poderoso`,`Carga`,`Ataque Frenesi`]
    const i = Math.floor(Math.random() * habilidades.length);
    let danio = this.danioFisico;

        if (i === 0) {
            danio += 20;
            this.golpePoderoso(danio);
        } else if (i === 1) {
            danio += 15;
            this.carga(danio);
        } else if (i === 2) {
            danio -= 10;
            this.frenesi(danio);
        }
}

protected golpePoderoso(danio: number): void {
    console.log(`${this.nombre} ha lanzado su golpe poderoso causando ${danio} de daño.`)
}

protected carga(danio: number): void {
    console.log(`${this.nombre} va a la carga causando ${danio} de daño.`)
}

protected frenesi(danio: number): void {
    console.log(`${this.nombre} ha lanzado un ataque de frenesi causando ${danio} de daño continuo.`)
}

public defender(): void {
    const habilidades = [`Escudo`,`Grito de guerra`,`Regeneración`]
const i = Math.floor(Math.random() * habilidades.length);
let mitigacion = this.escudo;

if (i === 0) {
    mitigacion += 30;
    this.puntosDeVida = this.puntosDeVida - mitigacion;
    this.recibirDanio(mitigacion, i);
} else if (i === 1) {
    mitigacion += 15;
    this.puntosDeVida = this.puntosDeVida - mitigacion;
    this.recibirDanio(mitigacion, i);
} else if (i === 2){
    mitigacion += 20;
    this.puntosDeVida = this.puntosDeVida + mitigacion;
    this.recibirDanio(mitigacion, i);
}
}

public recibirDanio(mitigacion: number, i: number): void {
    if (this.vulnerable === false && i === 0) {
        console.log(`${this.nombre} ha activado su bloqueo con escudo recibiendo ${mitigacion} de daño.`)

    } else if (this.vulnerable === false && i === 1) {
        console.log(`${this.nombre} ha activado su grito de guerra recibiendo ${mitigacion} de daño.`)
    } else if (i === 2){
        console.log(`${this.nombre} ha activado regeneración, curando puntos de vida.`)
    }
}

}




