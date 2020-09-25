import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CandidatureService } from 'src/app/services/volontaire/candidature.service';
import { Candidature } from 'src/app/Models/Candidature.model';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.scss']
})
export class CandidatureComponent implements OnInit {

   
  ListCandidatures:{} ;
  candidature: Candidature = new Candidature();
  submitted = false;

  constructor(private httpClient:HttpClient, private candidatureService:CandidatureService, private router: Router) { }

  ngOnInit() {
    this.getListCandidature()
  }

  getListCandidature(): void {
    this.candidatureService.getCandidatureList().subscribe(
      data => {
        this.ListCandidatures = data
      },
      err => console.error(err),
      () => console.log('région récupérées avec Succès', this.ListCandidatures)
    );
  }

  newCandidature(): void {
    this.submitted = false;
    this.candidature = new Candidature();
  }

  save() {
    this.candidatureService
    .createCandidature(this.candidature)
      .subscribe(data => {
        console.log(data)
        this.candidature = new Candidature();
      this.gotoListCandidature();
    }, 
    error => console.log(error));
  }
  

  updateCandidature(id: number, value: any){

  }


   
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoListCandidature() {
    this.router.navigate(['/candidatures']);
  }

}
