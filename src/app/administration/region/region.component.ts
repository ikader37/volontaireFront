import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from 'src/app/Models/Region.model';
import { RegionService } from 'src/app/services/administrationServices/region.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  ListRegions: Region[] = [] ;
  region: Region = new Region();
  submitted = false;

  public host:string="http://10.10.1.48:8585";
  constructor(private httpClient:HttpClient, private regionService:RegionService, private router: Router) { }

  ngOnInit() {
    this.getListRegion()
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
      this.gotoListRegion();
    }, 
    error => console.log(error));
  }

  updateRegion(id: number, value: any){

  }

  deleteRegion(id: number){
    this.regionService.deleteRegion(id)
      .subscribe(
        data =>{
          console.log(data);
          this.getListRegion();
        },
        error => console.error()
        
      );

  }
   

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoListRegion() {
    this.router.navigate(['/regions']);
  }


}
