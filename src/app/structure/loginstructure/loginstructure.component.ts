import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StructureAccueilService } from 'src/app/services/administrationServices/structure-accueil.service';
import { StructureAccueil } from 'src/app/Models/StructureAccueil.model';

@Component({
  selector: 'app-loginstructure',
  templateUrl: './loginstructure.component.html',
  styleUrls: ['./loginstructure.component.scss']
})
export class LoginstructureComponent implements OnInit {

  email:string="";
  motDePasse:string="";
  structureTrouve:StructureAccueil=new StructureAccueil();


  constructor(private httpClient:HttpClient, private router : Router,private structureAccueilService:StructureAccueilService) { }

  ngOnInit() {

  }

  onSubmit(){
    this.connect();

  }

  connect(){
    console.log("Email :"+this.email);

    this.structureAccueilService.findByEmail(this.email).subscribe(data=>{
      //this.structureTrouve=data;
      console.log("Mot de passe :"+data.motDePasse+"  "+this.motDePasse);
     // this.structureTrouve=(StructureAccueil)data;
      if(this.motDePasse.localeCompare(this.structureTrouve.motDePasse)){
        console.log("Authentification reussie");
      }else{
        console.log("Authentification echouee");
      }
    },
    
    err=>console.log(err),
    ()=>console.log("erreur pour trouver la structure d'accueil")
    )
  }

}
