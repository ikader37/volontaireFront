import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Projet } from 'src/app/Models/Projet.model';
import { ProjetService } from 'src/app/services/volontaire/projet.service';

@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.scss']
})
export class DetailsProjetComponent implements OnInit {

  projetSelectedCode:string="";
  projet:Projet=new Projet();
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private projetService:ProjetService) { }

  ngOnInit() {


    
    
    this.activatedRoute.params.subscribe(
      data=>{
        console.log(JSON.stringify(data));
        this.projetSelectedCode=data["projet"];
       console.log("PARAM :"+data);
        console.log("DETAIL PROJET: "+String(this.projetSelectedCode).toString().valueOf());
      }
    );
    this.getProjetByCode();
  }

  getProjetByCode(){
    this.projetService.getProjetByCodeProjet(this.projetSelectedCode).subscribe(

      data=>{
        this.projet=data;
        console.log("DATA :"+data);
      },
      err=>{
        console.log("Erreur :"+err);
      }

    );
  }

}
