import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartenaireFinancier } from '../Models/PartenaireFinancier.model';
import { PartenaireFinancierService } from '../services/administrationServices/partenaire-financier.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

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
  }

}
