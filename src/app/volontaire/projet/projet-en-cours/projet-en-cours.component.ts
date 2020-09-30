import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from 'src/app/Models/Projet.model';
import { ProjetService } from 'src/app/services/volontaire/projet.service';

@Component({
  selector: 'app-projet-en-cours',
  templateUrl: './projet-en-cours.component.html',
  styleUrls: ['./projet-en-cours.component.scss']
})
export class ProjetEnCoursComponent implements OnInit {

  projetEnCoursList:Projet[];

  projetListAll:Projet[];



  constructor(private projetService:ProjetService,private router:Router,private datePipe:DatePipe) { }

  ngOnInit() {

    var date=new Date();

    this.getProjetListAll();
    console.log("TAILLE 2 :"+this.getProjetListAll.length);

    console.log(this.datePipe.transform(date,"yyyy-MM-dd"));
    this.getProjetEnCours();
    console.log("TAILLE "+this.projetEnCoursList.length);
    
  }
  getProjetEnCours(){
    this.projetService.getProjetEnCours().subscribe(
      data=>{this.projetEnCoursList=data;
      console.log("DATA :"+data);},
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("RIEN ");
      }
    );
  }

  getProjetListAll(){
    this.projetService.getProjetList().subscribe(
      data=>{this.projetListAll=data;
        console.log("DATA LIST :"+data);},
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("RIEN ");
      }
    );
  }

}
