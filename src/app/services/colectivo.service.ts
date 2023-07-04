import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColectivoService {

  resourceUrl = environment.backendUrl + 'colectivos';

  constructor(private http: HttpClient) {

  }

  findAll(): Observable<HttpResponse<any[]>>{
    return this.http.get<any[]>(this.resourceUrl, {observe: "response"}).pipe(
      catchError(error => {
        console.log(error.message)
        return throwError( () => "Ocurrio un error en findall colectivos");
      })
    )
  }
}
