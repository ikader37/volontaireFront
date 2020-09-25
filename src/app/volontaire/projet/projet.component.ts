import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/services/volontaire/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  ListProjets:{};
  constructor(private projetService: ProjetService, private route: Router) { }

  ngOnInit() {
  this.onpreCond()
  }

  onpreCond(){
    this.getListProjet()
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
