import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Models/Personne.model';
import { HttpClient } from '@angular/common/http';
import { PersonneService } from 'src/app/services/volontaire/personne.service';
import { HashWordService } from 'src/app/services/hash-word.service';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.scss']
})
export class EditPersonneComponent implements OnInit {

  personne:Personne=new Personne();
  submitted:boolean=false;
  erreur:boolean=false;
  motDePasse:string="";
  erreurHttp:boolean=false;
  erreurPassword:boolean=false;


  
  constructor(private personneService:PersonneService,private http:HttpClient,private hashWord:HashWordService) { }

  ngOnInit() {
    this.personne=new Personne();
    this.submitted=false;
    this.erreur=false;
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

    this.personneService.update(this.personne).subscribe(
      data=>{

        if(data["status"]=="OK"){
          
          this.erreur=false;
          this.personne=new Personne();
        }else{
          this.erreur=true;
        }

      },
      err=>{
        this.erreurHttp=true;
      },
      ()=>console.log("erreur d'enregistrement de l")
    );
  }
}
