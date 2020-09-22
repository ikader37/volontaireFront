import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProvinceService } from 'src/app/services/administrationServices/province.service';
import { Router } from '@angular/router';
import { Region } from 'src/app/Models/Region.model';
import { RegionService } from 'src/app/services/administrationServices/region.service';
import { Province } from 'src/app/Models/Province.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-province-form',
  templateUrl: './province-form.component.html',
  styleUrls: ['./province-form.component.scss']
})
export class ProvinceFormComponent implements OnInit {
  ListProvinces: Province[] = [] ;
  ListRegions: Region[] = [] ;
  province: Province = new Province();
  region:Region = new Region();
  submitted = false;
  constructor(private httpClient:HttpClient,private regionService:RegionService, private provinceService:ProvinceService, private router: Router) { }

  ngOnInit() {
    this.getListRegion();
  }

  newProvince(): void {
    this.submitted = false;
    this.province = new Province();
  }

  save() {
    this.provinceService.createProvince(this.province)
      .subscribe(data => {
        console.log(data),
        error => console.log(error)
       // this.province = new Province();
        this.router.navigate(['/provinces']);
    }, 
  );
    this.router.navigate(['/provinces']);
    console.log(" Province ===>: "+this.province.libelle+" \n Region ===>: "+this.region.libelle);

  }
  onSubmit() {
    this.submitted = true;
    this.region.codeRegion;
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


}
