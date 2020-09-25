import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Models/Personne.model';
import { PersonneService } from 'src/app/services/volontaire/personne.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HashWordService } from 'src/app/services/hash-word.service';

@Component({
  selector: 'app-personne-form',
  templateUrl: './personne-form.component.html',
  styleUrls: ['./personne-form.component.scss']
})
export class PersonneFormComponent implements OnInit {

  personne:Personne=new Personne();
  submitted:boolean=false;
  erreur:boolean=false;

  erreurPassword:boolean=false;
  motDePasse:string="";
  erreurHttp:boolean=false;

  constructor(private personneService:PersonneService,private httpClient:HttpClient, private router : Router,private hashWord:HashWordService) { }

  ngOnInit() {
    this.personne=new Personne();
  }


  onSubmit(){

    this.submitted=true;
    console.log("Password :"+this.motDePasse+"   "+this.personne.motDePasse);
    if(this.motDePasse==this.personne.motDePasse){
      this.personne.motDePasse=this.hashWord.hashWord(this.personne.motDePasse);
      this.save();
    }else{
      console.log("Erreur mot de passe incorrecte");
      this.erreurPassword=true;
    }
    
  }

  save(){

    this.personneService.createPersonne(this.personne).subscribe(
      data=>{

        if(data["status"]=="OK"){
          
          this.erreur=false;
          this.personne=new Personne();
          this.motDePasse="";
        }else{
          this.erreur=true;
          this.erreurHttp=true;
        }

      },
      err=>{
        this.erreurHttp=true;
      },
      ()=>console.log("erreur d'enregistrement de l")
    );
  }



}
