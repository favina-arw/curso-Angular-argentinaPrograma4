import { Colectivo } from "./colectivo";
import { Person } from "./person";

export class Viaje {
    
    id: number;
    origen: string;
    destino: string;
    fechaSalida: Date;
    fechaLlegada: Date;
    pasajeros: number[];
    colectivoID: number;

    constructor( id: number, origen: string, destino: string, fechaSalida: string,
        fechaLlegada: string,colectivoID: number, pasajeros: number[]){
            this.id = id;
            this.origen = origen;
            this.destino = destino;
            this.colectivoID = colectivoID;
            this.fechaSalida = new Date(fechaSalida);
            this.fechaLlegada = new Date(fechaLlegada);
            this.pasajeros = pasajeros;
    }
    
}
