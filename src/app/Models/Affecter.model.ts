import { Candidature } from './Candidature.model';
import { Personne } from './Personne.model';

export class Affecter{

     codeAffecter: string;

	 dateDebut: Date;

	 dateFin: Date;

	 note: number;

	 commentaires: string;

	 statut: string;

	 structureAccueil: string;

	 contrat: string;

	 candidature: Candidature;

	 personne: Personne;

	 commune: string;

     presenceList: Personne;
     
}