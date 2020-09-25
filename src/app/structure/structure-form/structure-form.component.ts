import { Component, OnInit } from '@angular/core';
import { StructureAccueil } from 'src/app/Models/StructureAccueil.model';
import { HttpClient } from '@angular/common/http';
import { RegionService } from 'src/app/services/administrationServices/region.service';
import { Router } from '@angular/router';
import { StructureAccueilService } from 'src/app/services/administrationServices/structure-accueil.service';
import { Region } from 'src/app/Models/Region.model';

@Component({
  selector: 'app-structure-form',
  templateUrl: './structure-form.component.html',
  styleUrls: ['./structure-form.component.scss']
})
export class StructureFormComponent implements OnInit {

  listRegions:{};
  submitted=false;
  region:string;

  erreur:boolean=false;
  motDepasse2:string;


  structureAccueil:StructureAccueil=new StructureAccueil();

  constructor(private httpClient:HttpClient, private regionService:RegionService, private router : Router,private structureAccueilService:StructureAccueilService) { }

  ngOnInit() {
    this.getRegions();
    //this.region=new Region();
    this.structureAccueil=new StructureAccueil();
  }


  onSubmit(){
    //this.structureAccueil.region=this.region;
    console.log("REGION :"+this.region);
    this.submitted=true;
    //console.log("Structure :"+this.structureAccueil.region.codeRegion);
    this.structureAccueil.region.codeRegion=this.region;
    this.save();
    // if(this.motDepasse2.localeCompare(this.structureAccueil.motDePasse)){
      
    // }else{
      
    //   console.log("Les mots de passe ne sont pas conformes");
    // }
  }

  save(){

    this.structureAccueilService.createStructureAccueil(this.structureAccueil).subscribe(data => {
      console.log(data),
      
      error => console.log(error)
      if(data["status"]=="OK"){
        this.erreur=false;
        this.structureAccueil=new StructureAccueil();
      }else{
        this.erreur=true;
      }
     // this.province = new Province();
      //this.router.navigate(['/structures']);
  }, 
);
  //this.router.navigate(['/structures']);
  console.log(" Structures ===>: "+this.structureAccueil.libelle+" \n Region ===>: ");;
  }

  getRegions(){
    this.regionService.getRegionList().subscribe(
      data => {
        this.listRegions = data
      },
      err => console.error(err),
      () => console.log('Region récupérées avec Succès', this.listRegions)
    );;
  }


  choixRegion(event :any){
    this.region=event.target.value;
    console.log(this.region);
  }
}
