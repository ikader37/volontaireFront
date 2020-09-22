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

@Component({
  selector: 'app-candidature-form',
  templateUrl: './candidature-form.component.html',
  styleUrls: ['./candidature-form.component.scss']
})
export class CandidatureFormComponent implements OnInit {

  ListCandidatures: Candidature[] = [] ;
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
    this.submitted = true;
    this.save();    
  }


  getListRegion(): void {
    this.regionService.getRegionList().subscribe(
      data => {
        this.ListRegions = data
      },
      err => console.error(err),
      () => console.log('région récupérées avec Succès', this.ListRegions)
    );

  }


  getListSpecialites(): void{
    
    this.specialiteservice.getSpecialiteList().subscribe(
      data =>{
        this.Listspecialites = data
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


}
