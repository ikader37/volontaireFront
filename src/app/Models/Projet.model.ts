import { Candidature } from './Candidature.model';

export class Projet{
     codeProjet: string;
     libelle : string;
     nbreFile: string;
     fichier : string;
    datedebut: Date; 
    datefin: Date;
    status : string;
    documents:string;
    candidatureList: Candidature[];
   
}