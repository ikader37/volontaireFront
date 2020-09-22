import { Injectable } from '@angular/core';
import { PartenaireFinancier } from 'src/app/Models/PartenaireFinancier.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PartenaireFinancierService {
  baseApiUrl: string = "http://localhost:8585/volontaire.ws/rest/partenaireFinancier/";
  partenaireFinanciers:any;

  constructor(private http:HttpClient) { }

  createPartenaireFinancier(partenaireFinancier:PartenaireFinancier){

    return this.http.put(this.baseApiUrl+"createPartenaireFinancier",partenaireFinancier);
  }

  getPartenaireFinanciers():Observable<any[]>{
    return this.http.get(this.baseApiUrl+"findAll").pipe(
      map((data:any[])=>{return this.partenaireFinanciers=data.payload;}
      ),
      catchError(error=>{
        return throwError("Erreur survenue");
      })

    );
  }
}
