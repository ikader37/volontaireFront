import { Region } from './Region.model';


type NewType = Region;

export class Province {
    id:number;
    codeProvince: string;
    libelle: string;
    region: NewType;

   /**
    * constructor( public id:number, public codeProvince: string, public libelle: string,
    public region: {} ){}
    */
   
}