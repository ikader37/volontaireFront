import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from 'src/app/Models/Region.model';
import { RegionService } from 'src/app/services/administrationServices/region.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region-form',
  templateUrl: './region-form.component.html',
  styleUrls: ['./region-form.component.scss']
})
export class RegionFormComponent implements OnInit {
  ListRegions: Region[] = [] ;
  region: Region = new Region();
  submitted = false;

  constructor(private httpClient:HttpClient, private regionService:RegionService, private router: Router) { }

  ngOnInit() {
  }



  newRegion(): void {
    this.submitted = false;
    this.region = new Region();
  }

  save() {
    this.regionService
    .createRegion(this.region)
      .subscribe(data => {
        console.log(data)
        this.region = new Region();
        this.router.navigate(['/regions']);
    }, 
    error => console.log(error));
    this.router.navigate(['/regions']);

  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }


}
