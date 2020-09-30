import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from '../services/volontaire/projet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private projetService: ProjetService, private route: Router ) { }
  ListProjets:{};
  ngOnInit() {
    this.getListProjet();
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
