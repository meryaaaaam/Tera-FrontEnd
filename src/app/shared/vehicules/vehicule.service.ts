import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



//const baseUrl = "https://tera3.dev.smartegy.ca/backend/public/api/" ;
const baseUrl = "http://127.0.0.1:8000/api/" ;


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


  create(data )  {
    const HttpUploadOptions = {
      headers: new HttpHeaders({ "Content-Type": "multipart/form-data"})
    }
    return this.http.post(baseUrl+"vehicules", data  );
  }

  storeImages(data)
  {
    return this.http.post(baseUrl+"storeImages", data  );
  }

  storeImage(data)
  {
    return this.http.post(baseUrl+"storeImage", data  );
  }



  update(id, data) {
    return this.http.put(baseUrl+"vehicules/"+id, data);
  }

  delete(id) {
    return this.http.delete(baseUrl+"vehicules/"+id);
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
