import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable, catchError, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonTestService {

  constructor() { }

  findAll(): Observable<Person[]> {
    return of ([
      new Person (11, 30, "Juana", "Test", "F"),
      new Person (22, 23, "Aldo", "Test", "M"),
      new Person (33, 15, "Pancho", "Test", "M")
    ]).pipe(catchError(err => {
      console.log("Ocurrio un error");
      return throwError(() => "Paso algo");
    }), map(persons =>  {
      persons.forEach(person => {
        if(person.sexo == "F")
          person.nombre = "Srta. " + person.nombre;
        else
          person.nombre = "Sr. " + person.nombre;
      });
      return persons;
    }))
  }
}
