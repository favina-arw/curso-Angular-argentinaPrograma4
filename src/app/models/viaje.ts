import { Colectivo } from "./colectivo";
import { Person } from "./person";

export class Viaje {
    
    id: number;
    lugarSalida: string;
    lugarDestino: string;
    fechaSalida: Date;
    fechaLlegada: Date;
    personaId: number[];
    idColectivo: number;
    colectivo: Colectivo;

    constructor( id: number, origen: string, destino: string, fechaSalida: string,
        fechaLlegada: string,idColectivo: number, pasajeros: number[]){
            this.id = id;
            this.lugarSalida = origen;
            this.lugarDestino = destino;
            this.idColectivo = idColectivo;
            this.fechaSalida = new Date(fechaSalida);
            this.fechaLlegada = new Date(fechaLlegada);
            this.personaId = pasajeros;
    }
    
}
