import { Region } from './Region.model';
import { Personne } from './Personne.model';
import { Projet } from './Projet.model';
import { Specialite } from './Specialite.model';

export class Candidature{

    codeCandidature: string;
    dateDepot: Date;
    statut: string;
    region: Region = new Region();
    specialite: Specialite = new Specialite();
    projet: Projet = new Projet();
    personne: Personne = new Personne();
    

}

