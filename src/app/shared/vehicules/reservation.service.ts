import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



//const baseUrl = "https://tera3.dev.smartegy.ca/backend/public/api/" ;
const baseUrl = "http://127.0.0.1:8000/api/" ;
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  totalprice(vehiculeId, start , end)
  {
    let params = new HttpParams().set('vehicule',vehiculeId );
   let params3 = new HttpParams().set('end',end );
   let  params2 = new HttpParams().set('start',start );



    return this.http.get(baseUrl+"totalprice",  {params: {vehicule: vehiculeId , start: start, end: end }});}

}
