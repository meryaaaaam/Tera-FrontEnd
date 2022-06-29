import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'Rxjs/Observable';


const baseUrl = "http://127.0.0.1:8000/api/" ;
/*const baseUrl = "https://tera3.dev.smartegy.ca/backend/public/api/users" ;
const model = "https://tera3.dev.smartegy.ca/backend/public/api/makes" ;
const Active = "https://tera3.dev.smartegy.ca/backend/public/api/users/isActive" ;
const adresse = "https://tera3.dev.smartegy.ca/backend/public/api/update" ;
const state = "https://tera3.dev.smartegy.ca/backend/public/api/provinces" ;*/

const url = "http://127.0.0.1:8000/api/users" ;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uploadphoto(id,data)
  {
    return this.http.post(baseUrl+"uploadphoto/"+id,data);
  }

  get(id) :  Observable<any> {
    return this.http.get(`${url}/${id}`);
  }

  create(data)  {
    return this.http.post(url, data);
  }

  // create(data) : Observable<any>  {
  //   return this.http.post(baseUrl, data , httpOptions);
  // }

  update(id, data) {
    return this.http.put(`${url}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${url}/${id}`);
  }

  deleteAll() {
    return this.http.delete(url);
  }

  getAll() {
    return this.http.get(url);
  }

  getAllListUser()
  {
    return this.http.get(baseUrl+"/list/users") ;
  //  return this.http.get("https://tera3.dev.smartegy.ca/backend/public/api/list/users") ;
  }



  getAllActifUsers()
  {
    return this.http.get(baseUrl+"list/users/actifs") ;
   // return this.http.get(" https://tera3.dev.smartegy.ca/backend/public/api/list/users/actifs") ;
  }



  getAllPredingUsers()
  {
    return this.http.get(baseUrl+"list/users/preding") ;
  //  return this.http.get(" https://tera3.dev.smartegy.ca/backend/public/api/list/users/preding") ;
  }

  isActive(id,data)
  {
    return this.http.put(baseUrl+"isActive/"+id, data)

   // return this.http.put(`${Active}/${id}`, data);
  }


  updateAdress(id,data)
  {
    const headers = new HttpHeaders();
    return this.http.put( baseUrl+"update/"+id , data ,{
      headers:headers
    });

   // return this.http.put(`${adresse}/${id}`, data);
  }

  getAllStates()
  {
    return this.http.get(baseUrl+"provinces") ;
   // return this.http.get(state) ;

   // return this.http.put(`${baseUrl}/${id}`, data);
  }

 }
