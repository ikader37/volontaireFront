import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Personne } from 'src/app/Models/Personne.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  
  baseApiUrl: string = "http://localhost:8585/volontaire.ws/rest/personne/";
  PersonneList: any;
  personne:Personne=new Personne();

  constructor(protected http: HttpClient) { }

  getPersonneList() {
    return this.http.get(this.baseApiUrl + "findAll")
      .pipe(map((data: any[]) => {return this.PersonneList = data.payload;
          }), catchError(error => {
          return throwError('===> Erreur lors de la récuperation des WS au Front!')
        })
      );
  }

  createPersonne(personne: object): Observable<object> {
    return this.http.put(this.baseApiUrl +"createPersonne",personne );
  }

  update(personne:Personne){
    return this.http.post(this.baseApiUrl+"updatePersonne",personne).pipe(
      map((data:any)=>{return this.personne=data.payload;}),
      catchError(error=>{
        return throwError("Erreur lors de la mise a jour de personne");
      })
    );
  }

  findByCode(codePersonne:string){
    return this.http.get(this.baseApiUrl+"findByCode/"+codePersonne).pipe(
      map((data:any)=>{return this.personne=data.payload;}),
      catchError(error=>{
        return throwError("Erreur lors de la find by code de personne");
      })
    );
  }

  findByEmail(email:string){
    return this.http.get(this.baseApiUrl+"findByEmail/"+email).pipe(
      map((data:any)=>{return this.personne=data.payload;}),
      catchError(error=>{
        return throwError("Erreur lors de la find by email de personne");
      })
    );
  }
  

  updateRegion (id: number, value: any) : Observable <Object>{
     return this.http.post('${this.baseApiUrl}/${id}' + "updateRegion", value );
  }

  deleteRegion(id: number){
    return this.http.delete(this.baseApiUrl + "deleteRegion", {responseType: 'text'});
  }

}
