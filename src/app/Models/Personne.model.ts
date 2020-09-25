export class Personne {
    codePersonne: string;
    nom: string;
    prenom:string;
    dateNaissance:Date;
    nationalite: string;
    sexe: string;
    numeroCnib: string;
    dateExpCnib:Date;
    tel1:string;
    tel2: string;
    email:string;
    motDePasse: string;
    categorieSocial:string;
    statut: string;

    Personne(){
        this.nom="";
        this.prenom="";
        this.dateNaissance=null;
        this.dateExpCnib=null;
        this.nationalite=null;
        this.sexe=null;
        this.tel1="";
        this.tel2="";
        this.email="";
        this.motDePasse="";
        this.categorieSocial="";
        this.statut="";

    }
   
}