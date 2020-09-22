import { Injectable } from '@angular/core';
import { StructureAccueil } from 'src/app/Models/StructureAccueil.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StructureAccueilService {

  structureAccueil:StructureAccueil=new StructureAccueil();

  baseApiUrl="http://localhost:8585/volontaire.ws/rest/structureAccueil/";
  structureAccueils:StructureAccueil[];
  constructor(protected http: HttpClient) { }

  createStructureAccueil(structureAccueil:StructureAccueil):Observable<object>{
     return this.http.put(this.baseApiUrl +"createStructureAccueil",structureAccueil);
  }

  findByEmail(email:string){
    return this.http.get(this.baseApiUrl+"findByEmail/"+email).pipe(map((data: any) => {return this.structureAccueil=  data.payload;
      console.log("ccc "+data);
    }), catchError(error => {
    return throwError('Probleme de recuperation de structure accueil by email!')
  }));
  }

  getStructureAccueils(){
    return this.http.get(this.baseApiUrl+"findAll").pipe(
      map((data:any[])=>{
        return this.structureAccueils=data.payload;
      }),
      catchError(error=>{

        return throwError("Erreur survenue ");
      })


    );
  }
}
