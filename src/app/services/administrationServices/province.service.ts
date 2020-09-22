import { Injectable } from '@angular/core';
import { Province } from 'src/app/Models/Province.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { createRequestOption } from 'src/app/utils/request-utils';



@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  baseApiUrl: string = "http://localhost:8585/volontaire.ws/rest/province/";
  provinceList: any;
 
  constructor(protected http: HttpClient) { }

  getProvinceList() {
    return this.http.get(this.baseApiUrl + "findAll")
      .pipe(map((data) => {return this.provinceList = data.payload;
          }), catchError(error => {
          return throwError('Its a Trap!')
        })
      );
  }

  createProvince(province: object): Observable<object> {
    return this.http.put(this.baseApiUrl +"createProvince",province);
  }


  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.baseApiUrl}/${id}`, { observe: 'response' });
  }
  

}
/**
 * 
 */