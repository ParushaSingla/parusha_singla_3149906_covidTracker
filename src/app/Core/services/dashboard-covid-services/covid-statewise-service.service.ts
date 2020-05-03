import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidStatewiseServiceService {
   apiUrl = "https://api.covid19india.org/data.json ";

   districtApi="https://api.covid19india.org/state_district_wise.json ";

  constructor(private http: HttpClient) {
   }
  getStateWiseDetails(){
    return this.http.get(this.apiUrl);
  }
  getDistrictWiseDetails(){
    return this.http.get(this.districtApi);

  }
}
