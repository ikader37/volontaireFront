import { Component, OnInit } from '@angular/core';
import { SpecialiteService } from 'src/app/services/volontaire/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {
  
  Listspecialites: any;

  constructor(private specialiteService: SpecialiteService) { }

  ngOnInit() {
    this.getListSpecialites();
  }


  getListSpecialites(){
    
    this.specialiteService.getSpecialiteList().subscribe(
      data =>{
        this.Listspecialites = data
      },
      err => console.error(err),
      () => console.log("specialité recuperer avec succès" , this.Listspecialites)
    );

  }
      
  }
 