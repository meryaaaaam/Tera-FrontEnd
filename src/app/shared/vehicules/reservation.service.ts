import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';




 const baseUrl        = "http://127.0.0.1:8000/api/" ;
 const DepositbaseUrl = "http://127.0.0.1:8000/api/submit_security_deposit" ;
 const BookingbaseUrl = "http://127.0.0.1:8000/api/booking_payemnt" ;



  /*const baseUrl        =  "https://7rentals.com/backend/public/api/" ;
  const DepositbaseUrl  = "https://7rentals.com/backend/public/api/submit_security_deposit" ;
  const BookingbaseUrl  = "https://7rentals.com/backend/public/api/booking_payemnt" ;
*/

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  totalprice(vehiculeId, start , end)
    {
        return this.http.get(baseUrl+"totalprice",  {params: {vehicule: vehiculeId , start: start, end: end }});
    }

  GetAvailableReservation(start , end )
  {
    return this.http.get(baseUrl+"reservations",  {params: {start: start, end: end }});

  }

  Make_reservation(data )
  {
    return this.http.post(baseUrl+"reservations", data  );

  }

  getAllReservations()
  {
    return this.http.get(baseUrl+"get_all_bookings");
  }

  getAllDisputes()
  {
    return this.http.get(baseUrl+"get_all_disputes");
  }

  getBookingsByUser(id)
  {
    return this.http.get(baseUrl+"get_bookings/"+id);
  }

  getBookingsRequest(id)
  {
    return this.http.get(baseUrl+"get_bookings_requests/"+id);
  }

  get_host_approved_bookings(id)
  {
    return this.http.get(baseUrl+"get_host_approved_bookings/"+id);
  }

  getApprovedBookings()
  {
    return this.http.get(baseUrl+"get_approved_bookings");
  }


  getDisplayBalance(user_id)
  {
    return this.http.post(baseUrl+"display_balance",{user_id: user_id});
  }

  changeBookingStatus(booking_id, action ){
    return this.http.post(baseUrl+"change_booking_status",{booking_id:booking_id, action:action });
  }

  validatePayment(id){
    let data = {"reservation_id":id} ;
    return this.http.post(baseUrl+"validate_payment",id);
  }
  create(data)  {
    const HttpUploadOptions = {
      headers: new HttpHeaders({ "Content-Type": "multipart/form-data"})
    }
    return this.http.post(DepositbaseUrl+"", data);
  }
  bookingCreate(data)  {
    const HttpUploadOptions = {
      headers: new HttpHeaders({ "Content-Type": "multipart/form-data"})
    }
    return this.http.post(BookingbaseUrl+"", data);
  }

  get_transaction(id)
  {
    return this.http.get(baseUrl+"get_list_transactions",  {params: {host_id: id }});
  }

  get_list_cashout(id)
  {
    return this.http.get(baseUrl+"cashout_history",  {params: {user_id: id }});
  }


}
