import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Projet } from 'src/app/Models/Projet.model';
import { DatePipe } from '@angular/common';

//import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  
  baseApiUrl: string = "http://localhost:8585/volontaire.ws/rest/projet/";
  projetList: any;
  projetEnCours:Projet[];
  projetExpire:Projet[];
  projetPeriodeDateDebut:Projet[];
  projetTrouver:Projet=new Projet();

  constructor(protected http: HttpClient,private datePipe:DatePipe) { }

  getProjetList() {
    return this.http.get(this.baseApiUrl + "findAll")
      .pipe(map((data: any[]) => {return this.projetList = data.payload;
          }), catchError(error => {
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

  getProjetEnCours(){

    console.log("DATE:"+this.datePipe.transform(new Date(),"yyyy-MM-dd"));
    return this.http.get(this.baseApiUrl + "findSupDateFin/"+this.datePipe.transform(new Date(),"yyyy-MM-dd"))
    .pipe(map((data: any[]) => {console.log(data.payload);return this.projetEnCours = data.payload;
        }), catchError(error => {
        return throwError('===> Erreur lors de la récuperation des WS Projet au Front!')
      })
    );
  }


  getProjetExpire(){

    return this.http.get(this.baseApiUrl + "findSupDateFin/"+new Date())
    .pipe(map((data: any[]) => {return this.projetEnCours = data.payload;
        }), catchError(error => {
        return throwError('===> Erreur lors de la récuperation des WS Projet au Front!')
      })
    );

}


getProjetByCodeProjet(codeProjet:string){
  return this.http.get(this.baseApiUrl + "findByCode/"+codeProjet)
    .pipe(map((data: Projet) => {console.log("BEFORE"+data.codeProjet);return this.projetTrouver = data.payload;
        }), catchError(error => {
        return throwError('===> Erreur lors de la récuperation des WS Projet au Front!')
      })
    );
}
}
