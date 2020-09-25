import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/Models/Projet.model';
import { ProjetService } from 'src/app/services/volontaire/projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet-form',
  templateUrl: './projet-form.component.html',
  styleUrls: ['./projet-form.component.scss']
})
export class ProjetFormComponent implements OnInit {


  projet:Projet=new Projet();
  submitted:boolean=false;
  erreur:boolean=false;
  erreurHttp:boolean=false;
  projetList:Projet[]=[];
  

  constructor(private projetService:ProjetService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){

    this.submitted=true;
    this.save();
  }

  save(){
    this.projetService.createProjet(this.projet).subscribe(data=>{

      console.log("DATA:"+data);
     if(data["status"]=="OK"){
       this.erreur=false;
       this.erreurHttp=false;
       this.projet=new Projet();
     }else{
       this.erreur=true;
       this.erreurHttp=true;
     }
    },

    
    );
  }
}
