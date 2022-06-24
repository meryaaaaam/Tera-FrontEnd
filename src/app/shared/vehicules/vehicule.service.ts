import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'Rxjs/Observable';



const baseUrl = "https://tera3.dev.smartegy.ca/backend/public/api/" ;


@Injectable({
  providedIn: 'root'
})
export class VehiculeService {




  constructor(private http: HttpClient) { }

  get(id) {
    return this.http.get(`${baseUrl+"vehicules"}/${id}`);
  }

  getAll() {
    return this.http.get(baseUrl+"vehicules");
  }


  create(data)  {
    return this.http.post(baseUrl+"vehicules", data);
  }



  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }



  getAllMakes()
  {
    return this.http.get(baseUrl +"makes");
  }

  getModel(id)
  {
    return this.http.get(baseUrl +"models/"+id);
  }

  getMake(id)
  {
    return this.http.get(baseUrl +"makes/"+id);

  }


  getVehiculesByUser(id) : Observable<any>
  {
    return this.http.get(baseUrl+"vehiculeByuser/"+id);

  }

}
