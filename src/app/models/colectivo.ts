export class Colectivo {

    patente: string;
    catidadAsientos: number;
    modeloNombre: string;
    modeloMarca: string;

    constructor(patente : string, catidadAsientos: number, modeloNombre: string, modeloMarca: string){
        this.patente = patente;
        this.catidadAsientos= catidadAsientos;
        this.modeloNombre = modeloNombre;
        this.modeloMarca = modeloMarca;
    }
}
