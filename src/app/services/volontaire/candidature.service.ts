import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Expose-Headers':'*',
      "Content-Type": "application/json",
      'Access-Control-Allow-Headers':'authorization,content-type',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, OPTIONS'
        })
  };

  baseApiUrl: string = "http://localhost:8585/volontaire.ws/rest/candidature/";
  CandidatureList: any;
  
  constructor(protected http: HttpClient) { }

  getCandidatureList() {
    return this.http.get(this.baseApiUrl + "findAll")
      .pipe(map((data: any[]) => {return this.CandidatureList = data.payload;
          }), catchError(error => {
          return throwError('===> Erreur lors de la récuperation des WS au Front!')
        })
      );
  }

  createCandidature(candidature: object): Observable<object> {
    return this.http.put(this.baseApiUrl +"createCandidature",candidature );
  }

  updateRegion (id: number, value: any) : Observable <Object>{
     return this.http.post('${this.baseApiUrl}/${id}' + "updateRegion", value );
  }

  deleteRegion(id: number){
    return this.http.delete(this.baseApiUrl + "deleteRegion", {responseType: 'text'});
  }



}
