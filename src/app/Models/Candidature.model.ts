import { Region } from './Region.model';
import { Personne } from './Personne.model';
<<<<<<< HEAD
=======
import { Projet } from './Projet.model';
import { Specialite } from './Specialite.model';
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c

export class Candidature{

    codeCandidature: string;
    dateDepot: Date;
    statut: string;
<<<<<<< HEAD
    region: String;
    specialite: string;
    affecter: string;
    projet: string;
    personne: String;
    


=======
    region: Region = new Region();
    specialite: Specialite = new Specialite();
    projet: Projet = new Projet();
    personne: Personne = new Personne();
    

>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c
}

