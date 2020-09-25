import { Component, OnInit } from '@angular/core';
import { PartenaireFinancier } from '../Models/PartenaireFinancier.model';
import { Commune } from '../Models/Commune.model';
import { Router } from '@angular/router';
import { PartenaireFinancierService } from '../services/administrationServices/partenaire-financier.service';

@Component({
  selector: 'app-partenaire-financier',
  templateUrl: './partenaire-financier.component.html',
  styleUrls: ['./partenaire-financier.component.scss']
})
export class PartenaireFinancierComponent implements OnInit {

  partenaireFinancier:PartenaireFinancier=new PartenaireFinancier();
  codeCommune:string="";
  submitted:boolean=false;
  erreur:boolean=false;
  erreurHttp:boolean=false;
  partenaireFinanciers:PartenaireFinancier[]=[];

  communeList:Commune[];


  constructor(private partenaireFinancierService:PartenaireFinancierService,private router:Router) { }

  ngOnInit() {
   this.partenaireFinancierService.getPartenaireFinanciers().subscribe(
     data=>{
       this.partenaireFinanciers=data;
       console.log("DATA:"+this.partenaireFinanciers.toString);
     },
     err=>{
       console.log("ERROR :"+err);
     },
     ()=>{}

   );

  }


  onSubmit(){

    this.submitted=true;
    this.partenaireFinancier.codePartenaireFinancier="VOLONTAIRECOM171124234631742251331532023";

    this.save();
  }


  save(){
    this.partenaireFinancierService.createPartenaireFinancier(this.partenaireFinancier).subscribe(
      data=>{
        if(data["status"]=="OK"){
          this.erreurHttp=false;
          this.erreur=false;
          console.log("DATA:"+data["payload"]);

          this.partenaireFinancier=new PartenaireFinancier();
        }else{
          console.log("ERRER");
        }
      },
      err=>{
        console.log("ERREUR :"+err);
        this.erreur=true;
        this.erreurHttp=true;
      }

    );
  }
  choixCommune(event:any){
    this.codeCommune=event.target.value;
  }

  getCommuneList(){
    
  }


}
