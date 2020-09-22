import { PartenaireFinancier } from './PartenaireFinancier.model';
import { Affecter } from './Affecter.model';
import { Province } from './Province.model';

export class Commune{
    codeCommune:string;
    libelle:string;
    affecter:Affecter[];
    province:Province;
    partenaireFinancierList:PartenaireFinancier[];
}