import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TokenService } from 'src/app/shared/auth/token.service';
import { ReservationService } from 'src/app/shared/vehicules/reservation.service';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';
import { UserService } from 'src/app/shared/user/user.service';
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
  public i : any  ;
  public j : any  ;
  public k : any  ;
  s : any ; e:any ;
  complete : boolean = false ;

  constructor(
    private route: ActivatedRoute,
     public vs: VehiculeService,
      public reservation: ReservationService,
      public messageService: MessageService,
     private tokenStorage: TokenService,
     private user : UserService,
     private router: Router ,

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
    var r ;
    let start = new Date() ;
    let end = new Date() ;
    this.route.queryParams.subscribe(params => {
                        this.s = params['st'];
                        this.e= params['se'];
                        this.searchid = params['searchid'];
                        let  start= this.datePipe.transform(this.s, 'dd/MM/yyyy HH:m:s');
                        let  end = this.datePipe.transform(this.e, 'dd/MM/yyyy HH:m:s');
                        this.startdate = start;
                        this.enddate = end;
                      });

    let data = {  "vehicule":this.searchid ,
                  "start" : this.startdate,
                  "end" : this.enddate ,
                  "booking_title" : this.res.model,
                  "customer_id" : this.tokenStorage.getUser().user.id ,
                }
    console.log(data);

     this.reservation.Make_reservation(data)
    .subscribe({
      next:   data =>  { r = data ;
                        console.log(r);
                        if (r == "This car not available for now")
                        {
                          this.showError("This car not available for now");
                          this.complete = false ;
                        }
                        else
                        {
                                                        this.Reservation();
                                                          this.showSuccess("Booking request send successfully").then(
                                                            result=>{ this.router.navigate(['/car/list'],{queryParams : {'st':start , 'se':end }})
                                                          }

                                                          )

                                                          ;
                                                         this.complete = true ;





                        }
                               //  this.router.navigate(['/car/list'],{queryParams : {'st':start , 'se':end }});

                 },
      error:   error => {},


      //complete: () => console.log('[complete] Not called')
    }  );
console.log(this.complete) ;
if(this.complete)
{
  console.log('--Done ! ')
}




              //   );
    //.finally( ()=>this.router.navigate(['/car/list'],{queryParams : {'st':start , 'se':end }})  )

   }

reservations()
{
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
 valider()
 {

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
        this.totalprice = Number(this.totalprice) + Number(this.price);  this.i = 'Siege pour enfant * 1 = 75$ ';

      } else {
        this.totalprice = Number(this.totalprice) - Number(this.price);   this.i = '' ;
      }
    }
    if (event.target.id == 2) {
      this.isChecked2 = event.target.checked;
      if (this.isChecked2) {
        this.totalprice = Number(this.totalprice) + Number(this.price);   this.j = 'Frais pour animuax domestiques * 1 = 75$';
        console.log(this.totalprice);

      } else {
        this.totalprice = Number(this.totalprice) - Number(this.price);  this.j = '' ;
      }
    }
    if (event.target.id == 3) {
      this.isChecked3 = event.target.checked;
      if (this.isChecked3) {
        this.totalprice = Number(this.totalprice) + Number(this.price);   this.k = "plein d'essence prépayé * 1 = 75$";
      } else {
        this.totalprice = Number(this.totalprice) - Number(this.price);  this.k = '' ;
      }

    }
    this.Extrass=this.totalprice;

  }


      Reservation() {

    let start = new Date() ;
    let end = new Date() ;
    console.log("amout",this.result.amount)
    console.log("Prix_H",this.res.Price_H)
    this.data= { "booking_cost": this.result.amount ,//?this.res.Price_H:this.res.Price_D,
                "number_of_days":this.totalDaysofReservation,
                "car_model": this.res.model,
                "user_id": this.tokenStorage.getUser().user.id,
                "extra":this.Extrass,
                "car_id":this.res.id,
            //    "host_id":this.res.user_id,
              }

   this.reservation.bookingCreate(this.data).subscribe(
              (res:any)=>   { console.log(res)
                              //this.showSuccess("Booking request send successfully");
                               //  this.router.navigate(['/car/list'],{queryParams : {'st':start , 'se':end }});
                             },
              (error) => {  console.log(error.error)  },
        );

  }


  /*Reservation() {
    // console.log(this.Extrass);
    let start = new Date() ;
    let end = new Date() ;
     this.data=
     {
       "booking_cost": this.res.amount ,//?this.res.Price_H:this.res.Price_D,
       "number_of_days":this.totalDaysofReservation,
       "car_model": this.res.model,
       "user_id": this.tokenStorage.getUser().user.id,
       "extra":this.Extrass
     }
     console.log(this.data) ;
             {this.reservation.bookingCreate(this.data).subscribe(
           (res:any)=>
           {
             console.log(res)
             this.showSuccess("Booking request send successfully");
           },
           (error) => {

           },
         );}

   }*/
      async showSuccess(detail) {

       let promise = new Promise((resolve,reject)=>{
        setTimeout( ()=> resolve("done!"),3000),
        this.messageService.add({severity:'success', summary: 'Success', detail: detail});
       });
     return await  promise ;

      // let result = await promise ;
    }

   async showError(detail) {
     await this.messageService.add({severity:'error', summary: 'Error', detail: detail});
    }
}
