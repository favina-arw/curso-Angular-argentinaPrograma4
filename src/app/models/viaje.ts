import { Colectivo } from "./colectivo";
import { Person } from "./person";

export class Viaje {
    salida: string;
    destino: string;
    colectivoAsignado: Colectivo;
    pasajeros :  Person[];
    fechaSalida: string;
    horaSalida: number;
    fechaLlegada: string;
    horaLlegada: number;

    constructor(salida: string, destino: string, colectivoAsignado: Colectivo, 
        pasajeros : Person[], fechaSalida: string, horaSalida: number,
        fechaLlegada: string, horaLlegada: number){
            this.salida = salida;
            this.destino = destino;
            this.colectivoAsignado = colectivoAsignado;
            this.pasajeros = pasajeros;
            this.fechaSalida = fechaSalida;
            this.horaSalida = horaSalida;
            this.fechaLlegada = fechaLlegada;
            this.horaLlegada = horaLlegada;
    }
}
