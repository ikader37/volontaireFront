import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  baseApiUrl: string = "http://localhost:8585/volontaire.ws/rest/specialite/";
  specialiteList: any;
  constructor(protected http: HttpClient) { }

  getSpecialiteList() {
    return this.http.get(this.baseApiUrl + "findAll")
      .pipe(map((data: any[]) => {return this.specialiteList = data.payload;
          }), catchError(error => {
          return throwError('===> Erreur lors de la récuperation des WS specialité au Front!')
        })
      );
  }
}
