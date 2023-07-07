import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Viaje } from '../models/viaje';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {


  resourceUrl = environment.backendUrl + 'viajes';

  constructor(private http: HttpClient) { }

  
  findAll(): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.resourceUrl, {observe: 'response'}).pipe(
      catchError( error => {
        console.log(error.message)
        return throwError(() => 'Ocurrio un error')
      })
    );
  }
  
  findOne(id: number): Observable<Viaje>{
    return this.http.get<Viaje>(this.resourceUrl + '/' + id).pipe(
      catchError( err =>{
        //console.log("Ocurrio un error");
        return throwError(()=> "No existe el viaje")  
      })
    );
  }

  crearViaje(viaje: ViajeDTO): Observable<any>{
    return this.http.post<any>(this.resourceUrl, viaje).pipe(
      catchError(err => {
        //console.log("Ocurrio un error");
        return throwError(()=> "No se pudo crear el viaje (Method crear viaje)")  
      })
    );
  }

  actualizarViaje(viaje: ViajeDTO){
    return this.http.put<any>(this.resourceUrl + '/' + viaje.id, viaje).pipe(
      catchError(err => {
        //console.log("Ocurrio un error");
        return throwError(()=> "No se pudo actualizar el viaje (Method actualizar viaje) con id" + viaje.id)    
      })
    );
  }

  borrarViaje(id: number): Observable<HttpResponse<any>>{
    return this.http.delete<any>(this.resourceUrl + '/' + id, {observe: "response"}).pipe(
      catchError( err =>{
        //console.log("Ocurrio un error");
        return throwError(()=> "No se pudo borrar la persona (Method borrar)")  
      })
    );
  }
}

export interface ViajeDTO{
  id?: number;
  lugarSalida: string;
  lugarDestino: string;
  fechaSalida: Date;
  fechaLlegada: Date;
  pasajeros: number[];
  idColectivo: number;
}
