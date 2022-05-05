import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const path = "https://car-stockpile.p.rapidapi.com/cars?limit=50&page=0&make=BMW" ;
const api_host = "https://car-stockpile.p.rapidapi.com/cars" ;
const api_key = "2f17f6fefbmsh7e54aa3299a02b0p18680ajsnfa1c89f698aa" ;


/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'
  //,'X-RapidAPI-Key' : '2f17f6fefbmsh7e54aa3299a02b0p18680ajsnfa1c89f698aa'
  //,'X-RapidAPI-Host':'car-data.p.rapidapi.com'
})
};*/

let headers = new HttpHeaders({
	'x-rapidapi-host': 'car-data.p.rapidapi.com',
	'x-rapidapi-key': '2f17f6fefbmsh7e54aa3299a02b0p18680ajsnfa1c89f698aa'
});

//let params = new HttpParams ({ make:string  })

const httpOptions = {headers : headers , }
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(api_host , {headers : headers});
  }


  getAllBMW() {
    return this.http.get(path , {headers : headers});
  }

}
