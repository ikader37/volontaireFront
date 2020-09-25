import { Component, OnInit } from '@angular/core';
import { Candidature } from 'src/app/Models/Candidature.model';
import { Region } from 'src/app/Models/Region.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegionService } from 'src/app/services/administrationServices/region.service';
import { CandidatureService } from 'src/app/services/volontaire/candidature.service';
import { Router } from '@angular/router';
import { SpecialiteService } from 'src/app/services/volontaire/specialite.service';
import { Specialite } from 'src/app/Models/Specialite.model';
import { PersonneService } from 'src/app/services/volontaire/personne.service';
import { ProjetService } from 'src/app/services/volontaire/projet.service';
<<<<<<< HEAD
=======
import { FormBuilder, FormGroup } from '@angular/forms';
import { Personne } from 'src/app/Models/Personne.model';
import { Projet } from 'src/app/Models/Projet.model';
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c

@Component({
  selector: 'app-candidature-form',
  templateUrl: './candidature-form.component.html',
  styleUrls: ['./candidature-form.component.scss']
})
export class CandidatureFormComponent implements OnInit {

  ListCandidatures: Candidature[] = [] ;
<<<<<<< HEAD
  ListRegions: any ;
  Listspecialites:any;
  ListPersonnes: any;
  ListProjets: any;
  
  candidature: Candidature = new Candidature();
  region:Region = new Region();
  specialite: Specialite = new Specialite();
  submitted = false;
candidat1 = [
  { nom: 'A.Kader 1',
    prenom: 'ILBOUDO',
    codeRegion: 'VOLONTAIREREG122419241772422115220181320342110',
    codeProjet: 'VOLONTAIREPRO18139619221124156720205013223',
    codePersonne: 'VOLONTAIREPER1461515231418111519141511141700812'}
];
candidat2 = [
  { nom: 'Iro',
    prenom: 'Bassirou',
    codeRegion: 'VOLONTAIREREG122419241772422115220181320342110',
    codeProjet: 'VOLONTAIREPRO18139619221124156720205013223',
    codePersonne: 'VOLONTAIREPER1461515231418111519141511141700812'}
];
  
  constructor(private httpClient:HttpClient,private personneService: PersonneService, private specialiteservice: SpecialiteService ,private regionService:RegionService, private candidatureService:CandidatureService,private projetService: ProjetService, private router: Router) { }
=======
  ListRegions: {} ;
  Listspecialites: {};
  ListPersonnes:{};
  ListProjets:{};
  form:FormGroup;
  submitted = false;
  personne : string;
  region : string;
  specialite : string;
  projet : string;

  candidature: Candidature = new Candidature();
  affecter: "VOLONTAIREAFFEC0125478";

  constructor( private fb: FormBuilder, private httpClient:HttpClient,private personneService: PersonneService, private specialiteservice: SpecialiteService ,private regionService:RegionService, private candidatureService:CandidatureService,private projetService: ProjetService, private router: Router) { }
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c

  ngOnInit() {
    this.onPreCond();
    }

  newCandidature(): void {
    this.submitted = false;
    this.candidature = new Candidature();
  }

  onPreCond(){
    this.getListSpecialites();
    this.getListRegion();
<<<<<<< HEAD
=======
    this.getListPersonne();
    this.getListProjet();
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c
  }

  save() {
    this.candidatureService.createCandidature(this.candidature)
      .subscribe(data => {
        console.log(data),
        error => console.log(error)
       // this.candidature = new Candidature();
        this.router.navigate(['/candidatures']);
    }, 
);
    this.router.navigate(['/candidatures']);
    /**
     *     console.log(" Candidature ===>: "+this.candidature.codeCandidature+" \n Region ===>: "+this.region.libelle")
<<<<<<< HEAD

=======
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c
     */

  }

  onSubmit() {
<<<<<<< HEAD
    this.submitted = true;
    this.save();    
  }
=======
    
    //this.structureAccueil.region=this.region;
   console.log("REGION :"+this.region);
   console.log("Personne :"+this.personne);
   console.log("Projet :"+this.projet);
   console.log("Spec :"+this.specialite);
   this.submitted=true;
   this.candidature.specialite.codeSpecialite = this.specialite;
   this.candidature.personne.codePersonne = this.personne;
   this.candidature.region.codeRegion = this.region;
   this.candidature.projet.codeProjet = this.projet;
   this.save();    
 }
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c


  getListRegion(): void {
    this.regionService.getRegionList().subscribe(
      data => {
<<<<<<< HEAD
        this.ListRegions = data
=======
        this.ListRegions = data;
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c
      },
      err => console.error(err),
      () => console.log('région récupérées avec Succès', this.ListRegions)
    );

  }


  getListSpecialites(): void{
    
    this.specialiteservice.getSpecialiteList().subscribe(
      data =>{
<<<<<<< HEAD
        this.Listspecialites = data
=======
        this.Listspecialites = data;
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c
      },
      err => console.error(err),
      () => console.log("specialité recuperer avec succès" , this.Listspecialites)
    );

  }

  getListPersonne(): void {
    this.personneService.getPersonneList().subscribe(
      data => {
        this.ListPersonnes = data
      },
      err => console.error(err),
      () => console.log('région récupérées avec Succès', this.ListPersonnes)
    );
  }

  getListProjet(): void {
    this.projetService.getProjetList().subscribe(
      data => {
        this.ListProjets = data
      },
      err => console.error(err),
      () => console.log('Projet récupérées avec Succès', this.ListProjets)
    );
  }

<<<<<<< HEAD
=======
 
  choixRegion(event :any){
    this.region=event.target.value;
    
    console.log("Region ===>:" + this.region);

  }

  choixSpec(event :any){
    this.specialite=event.target.value;
   
    console.log( "Spécialite ===>: "+ this.specialite);

  }
  choixProjet(event :any){
    
    this.projet=event.target.value;
    console.log("Projet ===>: "+ this.projet);

  }
  choixPersonne(event :any){
    this.personne=event.target.value;
    console.log("Personne ===>:" + this.personne);

  }



>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c

}
