import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/app/services/volontaire/personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personne-dashboard',
  templateUrl: './personne-dashboard.component.html',
  styleUrls: ['./personne-dashboard.component.scss']
})
export class PersonneDashboardComponent implements OnInit {

  constructor(private personneService:PersonneService,private router:Router,private sessionStorage:Storage) { }

  ngOnInit() {
    console.log("EMAIL SESSION : "+this.sessionStorage.getItem("email"));
  }

}
