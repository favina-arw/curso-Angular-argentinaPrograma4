import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Colectivo } from '../models/colectivo';
import { Modelo } from '../models/modelo';

@Injectable({
  providedIn: 'root'
})
export class ColectivoService {

  resourceUrl = environment.backendUrl + 'colectivos';

  constructor(private http: HttpClient) {

  }

  findAll(): Observable<HttpResponse<any[]>>{
    return this.http.get<any[]>(this.resourceUrl, {observe: 'response'}).pipe(
      catchError(error => {
        //console.log(error.message)
        return throwError( () => "Ocurrio un error en findall colectivos");
      })
    )
  }

  findOne(id: number): Observable<Colectivo>{
    return this.http.get<Colectivo>(this.resourceUrl + '/' + id).pipe( 
      catchError( err => {
        //console.log(err.message);
        return throwError(() => 'Ocurrio un problema')
      })
    );
  }

  borrarColectivo(id: number) {
    return this.http.delete<Colectivo>(this.resourceUrl + '/' + id).pipe(
      catchError( err => {
        return throwError(() => 'Ocurrio un problema')
      })
    );
  }

  crearColectivo(colectivo: ColectivoDTO) {
    return this.http.post<any>(this.resourceUrl, colectivo).pipe(
      catchError(err => {
        //console.log("Ocurrio un error");
        return throwError(()=> "No se pudo crear el colectivo (Method crear colectivo) con id " + colectivo.id)    
      })
    );
  }
  
  actualizarColectivo(colectivo: ColectivoDTO) {
    return this.http.put<any>(this.resourceUrl + '/' + colectivo.id, colectivo).pipe(
      catchError(err => {
        //console.log("Ocurrio un error");
        return throwError(()=> "No se pudo actualizar el colectivo (Method actualizar colectivo) con id " + colectivo.id)    
      })
    );
  }
}

export interface ColectivoDTO{
  id?: number
  patente: string
  cantidadAsientos: number
  idModelo: Modelo
  modeloId: number
}
