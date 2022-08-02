import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


 const baseUrl = "https://terarentals.com/backend/public/api/options" ;
//const baseUrl = "http://127.0.0.1:8000/api/options" ;

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(private http: HttpClient) { }
  getOptions() {
    return this.http.get(baseUrl);
  }
}

