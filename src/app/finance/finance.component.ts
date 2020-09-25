import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { PartenaireFinancier } from '../Models/PartenaireFinancier.model';
import { PartenaireFinancierService } from '../services/administrationServices/partenaire-financier.service';
=======
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

<<<<<<< HEAD
  partenaireFinanciers:PartenaireFinancier[];
  partenaireFinancier:PartenaireFinancier=new PartenaireFinancier();

  constructor(private partenaireFinancierService:PartenaireFinancierService,private router:Router) { }

  ngOnInit() {
    this.getPartenairesFinanciers();
  }

  getPartenairesFinanciers(){
    this.partenaireFinancierService.getPartenaireFinanciers().subscribe(
      data=>{
        this.partenaireFinanciers=data;
      }
    );
=======
  constructor() { }

  ngOnInit() {
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c
  }

}
