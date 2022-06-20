import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'Rxjs/Observable';



const baseUrl = "http://127.0.0.1:8000/api/users" ;
const model = "http://127.0.0.1:8000/api/makes" ;
const Active = "http://127.0.0.1:8000/api/users/isActive" ;
const adresse = "http://127.0.0.1:8000/api/update" ;
const state = "http://127.0.0.1:8000/api/provinces" ;




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get(id) :  Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data)  {
    return this.http.post(baseUrl, data);
  }

  // create(data) : Observable<any>  {
  //   return this.http.post(baseUrl, data , httpOptions);
  // }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  getAll() {
    return this.http.get(baseUrl);
  }

  getAllListUser()
  {return this.http.get("http://127.0.0.1:8000/api/list/users") ; }



  getAllActifUsers()
  {return this.http.get(" http://127.0.0.1:8000/api/list/users/actifs") ; }



  getAllPredingUsers()
  {return this.http.get(" http://127.0.0.1:8000/api/list/users/preding") ; }

  isActive(id,data)
  {
    return this.http.put(`${Active}/${id}`, data)

   // return this.http.put(`${baseUrl}/${id}`, data);
  }


  updateAdress(id,data)
  {
    const headers = new HttpHeaders();
    return this.http.put(`${adresse}/${id}`, data ,{
      headers:headers
    });

   // return this.http.put(`${baseUrl}/${id}`, data);
  }

  getAllStates()
  {
    return this.http.get(state) ;

   // return this.http.put(`${baseUrl}/${id}`, data);
  }

 }
