import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/app/services/volontaire/personne.service';
import { Personne } from 'src/app/Models/Personne.model';
import { HashWordService } from 'src/app/services/hash-word.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-login',
  templateUrl: './person-login.component.html',
  styleUrls: ['./person-login.component.scss']
})
export class PersonLoginComponent implements OnInit {

  email:string="";
  motDePasse:string="";
  submitted:boolean=false;
  erreur:boolean=false;
  erreurPassword:boolean=false;
  showSpinner:boolean=false;

  personneTrouver:Personne=new Personne();

  constructor(private personneService:PersonneService,private hashWordService:HashWordService,private router:Router) { }

  ngOnInit() {
    this.submitted=false;
    this.showSpinner=false;
  }

  onSubmit(){

    this.submitted=true;
    this.showSpinner=true;
    this.connecter();

  }

  connecter(){

    //hashPass:string=this.hashWordService(this.motDePasse);

    this.personneService.findByEmail(this.email).subscribe(
      data=>{
        this.personneTrouver=data;
        if(data.motDePasse==this.hashWordService.hashWord(this.motDePasse)){

          console.log("Login reussit");
          this.router.navigate(['/personne/dashboard']);
          // this.sessionStorage.setItem("email",this.personneTrouver.email);
          // this.sessionStorage.setItem("codePersonne",this.personneTrouver.codePersonne);
        }else{
          console.log("login echoue");
        }
      },

    );
    this.showSpinner=false;
  }



}
