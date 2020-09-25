import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Projet } from 'src/app/Models/Projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  
  baseApiUrl: string = "http://localhost:8585/volontaire.ws/rest/projet/";
  projetList: any;
  constructor(protected http: HttpClient) { }

  getProjetList() {
    return this.http.get(this.baseApiUrl + "findAll")
      .pipe(map((data: any[]) => this.projetList = data.payload), catchError(error => {
          return throwError('===> Erreur lors de la récuperation des WS Projet au Front!')
        })
      );
  }

  createProjet(projet:Projet){
    return this.http.put(this.baseApiUrl+"createProjet",projet);
  }
  updateProjet(projet:Projet){
    return this.http.post(this.baseApiUrl+"updateProjet",projet);
  }


}
