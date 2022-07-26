import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/auth/token.service';
import { ReservationService } from 'src/app/shared/vehicules/reservation.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CreateNewDisputeComponentComponent } from '../create-new-dispute-component/create-new-dispute-component.component';



@Component({
    selector: 'app-dashboard-bookings',
    templateUrl: './dashboard-bookings.component.html',
    styleUrls: ['./dashboard-bookings.component.scss']
})
export class DashboardBookingsComponent implements OnInit {

    public listBookings:any;
    public bookings:any;
    public ready:boolean = false;
    public responseMessage:any;
    private bsModalRef: BsModalRef;


    constructor( public reservation :ReservationService, public tokenService: TokenService,private modalService: BsModalService) { }

    ngOnInit(): void {
      this.fetchBookingListing();
    }

    public fetchBookingListing() {
      this.reservation.getAllReservations().subscribe(
        (data:any)=> {this.bookings = data.bookings;
                  console.log(this.bookings)} ),
        (error:any) => console.log(error) ;

        this.ready = true;
    }

    breadcrumb = [
        {
            title: 'Bookings',
            subTitle: 'Dashboard'
        }
    ]

    bookingsListingsBox = [
        {
            customerImg: 'assets/img/user1.jpg',
            customerName: 'James Anderson',
            customerNumber: '+214 4455 6521',
            customerEmail: 'hello@james.com',
            title: 'Farmis Hotel & Restaurant',
            bookingsStatus: 'Pending',
            pendingApprovedCanceled: 'pending',
            bookingsInfo: [
                {
                    icon: 'bx bx-map',
                    title: 'Address',
                    text: '40 Journal Square, NG USA',
                },
                {
                    icon: 'bx bx-calendar',
                    title: 'Date',
                    text: '20/05/2020',
                },
                {
                    icon: 'bx bx-purchase-tag',
                    title: 'Price',
                    text: '$1500',
                },
                {
                    icon: 'bx bx-group',
                    title: 'Persons',
                    text: '4 Peoples',
                },
                {
                    icon: 'bx bx-credit-card-front',
                    title: 'Payment',
                    text: 'Paid',
                }
            ]
        },
        {
            customerImg: 'assets/img/user2.jpg',
            customerName: 'Alina Smith',
            customerNumber: '+214 4455 6521',
            customerEmail: 'hello@alina.com',
            title: 'Skyview Shopping Cente',
            bookingsStatus: 'Approved',
            pendingApprovedCanceled: 'approved',
            bookingsInfo: [
                {
                    icon: 'bx bx-map',
                    title: 'Address',
                    text: '55 County Laois, Ireland',
                },
                {
                    icon: 'bx bx-calendar',
                    title: 'Date',
                    text: '19/05/2020',
                },
                {
                    icon: 'bx bx-purchase-tag',
                    title: 'Price',
                    text: '$200',
                },
                {
                    icon: 'bx bx-credit-card-front',
                    title: 'Payment',
                    text: 'Paid',
                }
            ]
        },
        {
            customerImg: 'assets/img/user3.jpg',
            customerName: 'James Andy',
            customerNumber: '+214 4455 6521',
            customerEmail: 'hello@andy.com',
            title: 'Gym Training Center',
            bookingsStatus: 'Pending',
            pendingApprovedCanceled: 'pending',
            bookingsInfo: [
                {
                    icon: 'bx bx-map',
                    title: 'Address',
                    text: 'Tilt Tilbury, United Kingdom',
                },
                {
                    icon: 'bx bx-calendar',
                    title: 'Date',
                    text: '18/05/2020',
                },
                {
                    icon: 'bx bx-purchase-tag',
                    title: 'Price',
                    text: '$214',
                },
                {
                    icon: 'bx bx-group',
                    title: 'Persons',
                    text: '2 Peoples',
                },
                {
                    icon: 'bx bx-credit-card-front',
                    title: 'Payment',
                    text: 'Unpaid',
                }
            ]
        },
        {
            customerImg: 'assets/img/user4.jpg',
            customerName: 'Steven Smith',
            customerNumber: '+214 4455 6521',
            customerEmail: 'hello@steven.com',
            title: 'The Magician Restaurant',
            bookingsStatus: 'Canceled',
            pendingApprovedCanceled: 'canceled',
            bookingsInfo: [
                {
                    icon: 'bx bx-map',
                    title: 'Address',
                    text: '40 Journal Square, NG USA',
                },
                {
                    icon: 'bx bx-calendar',
                    title: 'Date',
                    text: '20/05/2020',
                },
                {
                    icon: 'bx bx-purchase-tag',
                    title: 'Price',
                    text: '$1500',
                },
                {
                    icon: 'bx bx-group',
                    title: 'Persons',
                    text: '4 Peoples',
                },
                {
                    icon: 'bx bx-credit-card-front',
                    title: 'Payment',
                    text: 'Unpaid',
                }
            ]
        }
    ]

    public changeBookingStatus(bookingId:any, action:any, transactionId:any)
    {
      this.reservation.changeBookingStatus(bookingId,action,transactionId).subscribe(
        (data:any)=> {this.responseMessage = data.message;
                      alert(this.responseMessage)} ),
        (error:any) => console.log(error);

      this.fetchBookingListing();
    }


    public validatePayment(amount:any,order_number:any,transaction_id:any) {

      let user = this.tokenService.getUser();

      this.reservation.validatePayment(user.user.id,amount,order_number,transaction_id).subscribe(
        (data:any)=> {this.responseMessage = data.message;
                 alert(this.responseMessage)} ),
        (error:any) => console.log(error);

      this.fetchBookingListing();

    }

    public openDispute() {
      this.bsModalRef = this.modalService.show(CreateNewDisputeComponentComponent, { ignoreBackdropClick: true });
      this.bsModalRef.setClass('modal-lg');
      this.bsModalRef.content.emitData.subscribe((event: GenericEvent) => {
          if (event.name === 'close') {
              this.bsModalRef.hide();
          } else if (event.name === 'close-modal') {
              this.bsModalRef.hide();
          } else if (event.name === 'dispute-saved') {
              this.bsModalRef.hide();
              this.fetchBookingListing();
          }
      });


    }

}

export interface GenericEvent {
  name: string;
  payload?: any;
}

