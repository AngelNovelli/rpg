export abstract class personaje {
protected nombre : string;
protected nivel : number;
protected puntosDeVida : number;

constructor(nombre : string, puntosDeVida : number){
    this.nombre = nombre;
    this.nivel = 1;
    this.puntosDeVida = puntosDeVida;
    }
 
    // Getters
    public getNombre(): string {
        return this.nombre;
    }

    public getNivel(): number {
        return this.nivel;
    }

    public getPuntosDeVida(): number {
        return this.puntosDeVida;
    }

    // Setters
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    public setPuntosDeVida(puntosDeVida: number): void {
        this.puntosDeVida = puntosDeVida;
    }

abstract atacar(): void;
    
abstract defender (): void;

subirDeNivel (): void {
    this.nivel++;
    console.log(`${this.nombre} ha subido a nivel ${this.nivel}, es cada vez más fuerte.`)
}

}