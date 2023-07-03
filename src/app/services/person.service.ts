import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable, catchError, first, map, mergeMap, of, throwError } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  resourceUrl = environment.backendUrl + "personas";

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<any[]>> {
    /*
    return of (personas).pipe(catchError(err => {
      console.log("Ocurrio un error");
      return throwError(() => "Paso algo");
    }), map(persons =>  {
      persons.forEach(person => {
        if(person.sexo == "F"){
          person.nombre = "Srta. " + person.nombre;
        }else{
          person.nombre = "Sr. " + person.nombre;
        }
      });
      return persons;
    }))*/

    return this.http.get<any[]>(this.resourceUrl, {observe: "response"}).pipe(
      catchError( err =>{
        console.log("Ocurrio un error");
        return throwError(()=> "No se pudieron cargar las personas")  
      })
    );
  }

  findOne(id: number): Observable<HttpResponse<any>>{
    /*return of (personas).pipe(mergeMap(p => p), first(person => person.id === id))*/

    return this.http.get<any>(this.resourceUrl + '/' + id, {observe: "response"}).pipe(
      catchError( err =>{
        console.log("Ocurrio un error");
        return throwError(()=> "No existe la persona (Method findOne)")  
      })
    );
  }

  borrar(id: number): Observable<HttpResponse<any>>{
    /*return of (personas).pipe(mergeMap(p => p), first(person => person.id === id))*/

    return this.http.delete<any>(this.resourceUrl + '/' + id, {observe: "response"}).pipe(
      catchError( err =>{
        console.log("Ocurrio un error");
        return throwError(()=> "No se pudo borrar la persona (Method borrar)")  
      })
    );
  }

  actualizarPersona(persona : PersonDTO): Observable<any>{

    return this.http.put<any>(this.resourceUrl + '/' + persona.id , persona).pipe(
      catchError(err => {
        console.log("Ocurrio un error");
        return throwError(()=> "No existe la persona (Method actualizar persona)")  
      })
    )

  }

  crearPersona(persona : PersonDTO): Observable<any>{

    return this.http.post<any>(this.resourceUrl, persona).pipe(
      catchError(err => {
        console.log("Ocurrio un error");
        return throwError(()=> "No se pudo crear la persona (Method crear persona)")  
      })
    )

  }

}

export interface PersonDTO {
  id: number| null,
  name: string,
  lastName: string,
  age: number
}
