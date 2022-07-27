import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TokenService } from 'src/app/shared/auth/token.service';
import { ReservationService } from 'src/app/shared/vehicules/reservation.service';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [MessageService]

})
export class BookComponent implements OnInit {

  res: any = null;
  date: Date = new Date();
  data : any ;
  value4: any;
  errors:any;
  totalprice: number = 0;
  price: number;
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  public totalDaysofReservation:number = 0;
  startdate: any;
  enddate: any;
  searchid: any;
  image: any;
  result: any;
  Extrass:any;
  datePipe : DatePipe = new DatePipe('en-GB');
  public i : any = 0 ;
  s : any ; e:any ;
  constructor(
    private route: ActivatedRoute,
     public vs: VehiculeService,
      public reservation: ReservationService,
      public messageService: MessageService,
     private tokenStorage: TokenService,

      ) {


      }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.s = params['st'];

      this.e= params['se'];
      this.searchid = params['searchid'];
     let  start= this.datePipe.transform(this.s, 'dd/MM/yyyy HH:m:s');

     let  end = this.datePipe.transform(this.e, 'dd/MM/yyyy HH:m:s');

        this.startdate = start;
        this.enddate = end;

      /*let x= formatDate(this.enddate, 'dd-MM-yyyy H:m', 'en-US')  ;
      console.log(x) ;*/
  });



    this.get(this.searchid) ;
    this.Totalprice(this.searchid,this.startdate,this.enddate) ;

  }

  make_reservation(){
      let r ;
      let data = {
        "vehicule":this.searchid , "start" : this.startdate, "end" : this.enddate
      }
      this.reservation.Make_reservation(data).subscribe
      {
        data =>  r = data ;
      }

  }
  get(id) {
     let x : any; var date1 ; var date2 ;
     var d = Date.parse("2011-01-26 13:51:50 GMT") / 1000;
     this.route.queryParams.subscribe(params => {
      this.s = params['st'];

      this.e= params['se'];
      this.searchid = params['searchid'];
       date1 = new Date(this.s);
       date2 = new Date(this.e);});

     console.log(date1,date2) ;
     var Time : number = date2.getTime() - date1.getTime();

     let Days  : number = 0 ;
         Days  = Time / (1000 * 3600 * 24);


      this.vs.get(id).subscribe(

        (data) => {
          x = data;
          this.res = x;
          this.image = this.res.user_photo;
        }

    )
  }


  Totalprice(vehiculeid, start, end) {
    let result;
    this.reservation.totalprice(vehiculeid, start, end).subscribe(
        (data) => {
          this.result = data;
          this.totalDaysofReservation = this.result.nb_date_Or_Hour;

        }),
        (error:any) => console.log(error);
  }




  checkValue(event: any) {

    this.price = event.target.value;
    if (event.target.id == 1) {
      this.isChecked1 = event.target.checked;
      console.log(this.isChecked1);

      if (this.isChecked1) {
        this.totalprice = Number(this.totalprice) + Number(this.price);  this.i = this.i+1 ;

      } else {
        this.totalprice = Number(this.totalprice) - Number(this.price);   this.i = this.i-1 ;
      }
    }
    if (event.target.id == 2) {
      this.isChecked2 = event.target.checked;
      if (this.isChecked2) {
        this.totalprice = Number(this.totalprice) + Number(this.price);  this.i = this.i+1 ;
        console.log(this.totalprice);

      } else {
        this.totalprice = Number(this.totalprice) - Number(this.price);  this.i = this.i-1 ;
      }
    }
    if (event.target.id == 3) {
      this.isChecked3 = event.target.checked;
      if (this.isChecked3) {
        this.totalprice = Number(this.totalprice) + Number(this.price);  this.i = this.i+1 ;
      } else {
        this.totalprice = Number(this.totalprice) - Number(this.price);  this.i = this.i-1 ;
      }

    }
    this.Extrass=this.totalprice;

  }


  Reservation() {

    this.data=
    {
      "booking_cost": this.res.Price_H ,//?this.res.Price_H:this.res.Price_D,
      "number_of_days":this.totalDaysofReservation,
      "car_model": this.res.model,
      "user_id": this.tokenStorage.getUser().user.id,
      "extra":this.Extrass
    }

            {this.reservation.bookingCreate(this.data).subscribe(
          (res:any)=>
          {
            console.log(res)
            this.showSuccess("Booking request send successfully");
          },
          (error) => {

          },
        );}

  }
      showSuccess(detail) {
        this.messageService.add({severity:'success', summary: 'Success', detail: detail});
    }

    showError(detail) {
      this.messageService.add({severity:'error', summary: 'Error', detail: detail});
    }
}
