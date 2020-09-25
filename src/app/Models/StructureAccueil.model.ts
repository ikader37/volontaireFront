import { Region } from './Region.model';
import { Affecter } from './Affecter.model';

export class StructureAccueil{
    codeStructureAccueil:string;
    libelle:string;
    tel:string;
    adresse:string;
    region:Region=new Region();
    affecter:Affecter[];
    email:string;
    accorder:boolean;
    motDePasse:string;

    StructureAccueil(){
        this.codeStructureAccueil="";
        this.libelle="";
        this.tel="";
        this.adresse="";
        this.affecter=null;
        this.email="";
        this.motDePasse="";

    }

}