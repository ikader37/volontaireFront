import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpResponse, HttpParams} from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';
import { Region } from 'src/app/Models/Region.model';
import { $ } from 'protractor';



@Injectable({
  providedIn: 'root'
})
export class RegionService {
 
  baseApiUrl: string = "http://localhost:8585/volontaire.ws/rest/region/";
  regionList: Region[] = [];
  
  constructor(protected http: HttpClient) { }

  getRegionList() {
    return this.http.get(this.baseApiUrl + "findAll")
      .pipe(map((data: any[]) => {return this.regionList = data.payload;
          }), catchError(error => {
          return throwError('Probleme de recuperation de web service!')
        })
      );
  }

  createRegion(region: object): Observable<object> {
    return this.http.put(this.baseApiUrl +"createRegion",region );
  }

  updateRegion (id: number, value: any) : Observable <Object>{
     return this.http.post('${this.baseApiUrl}/${id}' + "updateRegion", value );
  }

  deleteRegion(id: number){
    return this.http.delete(this.baseApiUrl + "deleteRegion", {responseType: 'text'});
  }

}
