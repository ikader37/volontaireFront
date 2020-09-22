import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/Models/Province.model';
import { HttpClient } from '@angular/common/http';
import { ProvinceService } from 'src/app/services/administrationServices/province.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent implements OnInit {
  ListProvinces: {} ;
  submitted = false;

  public host:string="http://10.10.1.48:8585";
  constructor(private httpClient:HttpClient, private provinceService:ProvinceService, private router : Router) { }

  ngOnInit() {
    this.getListProvince()
  }

  getListProvince(): void {
    this.provinceService.getProvinceList().subscribe(
      data => {
        this.ListProvinces = data
      },
      err => console.error(err),
      () => console.log('provinceServices récupérées avec Succès', this.ListProvinces)
    );
  }

  gotoListProvince() {
    this.router.navigate(['/provinces']);
  }


}
