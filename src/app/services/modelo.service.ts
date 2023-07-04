import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Modelo } from '../models/modelo';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  resourceUrl = environment.backendUrl + 'modelos';

  constructor(private http: HttpClient) { 

  }

  findOne(id: number): Observable<Modelo>{
    return this.http.get<Modelo>(this.resourceUrl + '/' + id).pipe( 
      catchError( err => {
        console.log(err.message);
        return throwError(() => 'Ocurrio un problema')
      })
    );
  }
}
