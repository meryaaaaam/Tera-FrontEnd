import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


const baseUrl = "https://tera3.dev.smartegy.ca/backend/public/api/options" ;

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(private http: HttpClient) { }
  getOptions() {
    return this.http.get(baseUrl);
  }
}

