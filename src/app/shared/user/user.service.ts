import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';




const model   =   "https://7rentals.com/backend/public/api/makes" ;
const Active  =   "https://7rentals.com/backend/public/api/users/isActive" ;
const adresse =   "https://7rentals.com/backend/public/api/update" ;
const state   =   "https://7rentals.com/backend/public/api/provinces" ;
const url     =   "https://7rentals.com/backend/public/api/users" ;
const baseUrl =   "https://7rentals.com/backend/public/api/" ;


//const url =      "http://127.0.0.1:8000/api/users" ;
//const baseUrl =  "http://127.0.0.1:8000/api/" ;


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uploadphoto(id,data)
  {
    return this.http.post(baseUrl+"uploadphoto/"+id,data);
  }

  get(id)  {
    return this.http.get(url+"/"+id);
  }

  create(data)  {
    return this.http.post(url, data);
  }



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
   }



  getAllActifUsers()
  {
    return this.http.get(baseUrl+"list/users/actifs") ;
   }



  getAllPredingUsers()
  {
    return this.http.get(baseUrl+"list/users/preding") ;
   }

  isActive(id,data)
  {
    return this.http.put(baseUrl+"isActive/"+id, data)

   }


  updateAdress(id,data)
  {
    const headers = new HttpHeaders();
    return this.http.put( baseUrl+"update/"+id , data ,{
      headers:headers
    });

   }

  getAllStates()
  {
    return this.http.get(baseUrl+"provinces") ;

  }
  createcard(data)
  {
    return this.http.post(baseUrl+"cards",data) ;
  }
  updatecard(data)
  {
    return this.http.put(baseUrl+"cards",data) ;
  }
  getcards(){
    console.log("service ok");
    return this.http.get(baseUrl+"cards");
  }

  getcard(id)
  {
    return this.http.get(baseUrl+"cards/"+id);

  }


  openDispute(data){
    return this.http.post(baseUrl+"open_dispute",data);
  }

  checkoutAmount(data){
    return this.http.post(baseUrl+"cashout",data);
  }

  customizeFields(data){
    return this.http.post(baseUrl+"security_deposit_and_client_fee",data);
  }

  getAllDisputes(){
    return this.http.get(baseUrl+"get_all_disputes") ;
  }

  giveBackDeposit(user_id){
    return this.http.post(baseUrl+"give_back_deposit",{user_id:user_id});
  }

  collectDeposit(user_id){
    return this.http.post(baseUrl+"collect_deposit",{user_id:user_id});
  }

  getAllCashoutDemands(user_id)
  {
    return this.http.post(baseUrl+"list_cashout",{user_id:user_id});
  }

  validateCashoutDemands(data){
    return this.http.post(baseUrl+"validate_cashout",data);
  }
  storeImage(data)
  {
    return this.http.post(baseUrl+"storeImage1", data );
  }
  changepasswd(data)
  {
     return this.http.post(baseUrl+"passwd", data);
  }

  change_user_status(data)
  {
    return this.http.put(baseUrl+"Change_user_status",data);
  }


  getAllReveiew(id)
  {
    let url = "http://127.0.0.1:8000/api/reviews";
    return this.http.get(`${url}/${id}`);

  }

  add_review(data)
  {
    let url = "http://127.0.0.1:8000/api/reviews";
    return this.http.post(url, data);

  }


  Fetch_Host_reviews(id)
  {
    let url = "http://127.0.0.1:8000/api/host/reviews/";
    return this.http.get(url+id);
  }

 }
