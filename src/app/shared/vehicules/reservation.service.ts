import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



//const baseUrl = "https://tera3.dev.smartegy.ca/backend/public/api/" ;
//const baseUrl        = "http://127.0.0.1:8000/api/" ;

const baseUrl        = "https://terarentals.com/backend/public/api/" ;
const DepositbaseUrl = "https://terarentals.com/backend/public/api/submit_security_deposit" ;
const BookingbaseUrl = "https://terarentals.com/backend/public/api/booking_payemnt" ;


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

  getDisplayBalance(user_id)
  {
    return this.http.post(baseUrl+"display_balance",{user_id: user_id});
  }

  changeBookingStatus(booking_id, action, transaction_id){
    return this.http.post(baseUrl+"change_booking_status",{booking_id:booking_id, action:action, transaction_id:transaction_id});
  }

  validatePayment(user_id,amount, order_number, transaction_id){
    return this.http.post(baseUrl+"validate_payment",{user_id:user_id,amount:amount, order_number:order_number, transaction_id:transaction_id});
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

}
