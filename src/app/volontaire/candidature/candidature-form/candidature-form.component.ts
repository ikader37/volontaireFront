import { Component, OnInit } from '@angular/core';
import { Candidature } from 'src/app/Models/Candidature.model';
import { Region } from 'src/app/Models/Region.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegionService } from 'src/app/services/administrationServices/region.service';
import { CandidatureService } from 'src/app/services/volontaire/candidature.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialiteService } from 'src/app/services/volontaire/specialite.service';
import { Specialite } from 'src/app/Models/Specialite.model';
import { PersonneService } from 'src/app/services/volontaire/personne.service';
import { ProjetService } from 'src/app/services/volontaire/projet.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Personne } from 'src/app/Models/Personne.model';
import { Projet } from 'src/app/Models/Projet.model';

@Component({
  selector: 'app-candidature-form',
  templateUrl: './candidature-form.component.html',
  styleUrls: ['./candidature-form.component.scss']
})
export class CandidatureFormComponent implements OnInit {

  ListCandidatures: Candidature[] = [] ;
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

  constructor( private fb: FormBuilder, private httpClient:HttpClient,private personneService: PersonneService, private specialiteservice: SpecialiteService ,private regionService:RegionService, private candidatureService:CandidatureService,private projetService: ProjetService, private router: Router,private activatedRoute:ActivatedRoute) { }

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
    this.getListPersonne();
    this.getListProjet();

    this.activatedRoute.params.subscribe(
      data=>{
        this.candidature.projet.codeProjet=data["projet"];
      }

    );
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
     */

  }

  onSubmit() {
    
    //this.structureAccueil.region=this.region;
   console.log("REGION :"+this.region);
   console.log("Personne :"+this.personne);
  // console.log("Projet :"+this.projet);
   console.log("Spec :"+this.specialite);
   this.submitted=true;
   this.candidature.specialite.codeSpecialite = this.specialite;
   this.candidature.personne.codePersonne = this.personne;
   this.candidature.region.codeRegion = this.region;
  // this.candidature.projet.codeProjet = this.projet;
   this.candidature.dateDepot=new Date();
   this.save();    
 }


  getListRegion(): void {
    this.regionService.getRegionList().subscribe(
      data => {
        this.ListRegions = data;
      },
      err => console.error(err),
      () => console.log('région récupérées avec Succès', this.ListRegions)
    );

  }


  getListSpecialites(): void{
    
    this.specialiteservice.getSpecialiteList().subscribe(
      data =>{
        this.Listspecialites = data;
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




}
