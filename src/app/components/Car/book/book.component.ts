import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/shared/vehicules/reservation.service';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  res: any = null ;
  date : Date = new Date();
  value4 : any ;
  totalprice:number = 0;
  price:number;
  isChecked1: boolean=false;
  isChecked2: boolean=false;
  isChecked3: boolean=false;

  startdate : any ;
  enddate : any  ;
  searchid : any ;
  image : any ;
  result : any ;

  constructor( private route: ActivatedRoute,public vs : VehiculeService , public reservation :ReservationService) { }

  ngOnInit(): void {


    this.route.queryParams.subscribe(params => {
      this.startdate = params['st'];
       this.enddate = params['se'];
      this.searchid = params['searchid'];


      console.log( this.startdate , this.searchid);
      /*let x= formatDate(this.enddate, 'dd-MM-yyyy H:m', 'en-US')  ;
      console.log(x) ;*/
  });
    this.get(this.searchid) ;
    this.Totalprice(this.searchid,this.startdate,this.enddate ) ;


  }



  get(id)
  {let x ;
    // var d = Date.parse("2011-01-26 13:51:50 GMT") / 1000; console.log(d) ;
   //var Time = this.enddate.getTime() - this.startdate.getTime();
  //var Days = Time / (1000 * 3600 * 24); //Diference in Days
 // console.log(Days) ;

    this.vs.get(id).subscribe(

      (data)=>{
               x=data ;
               this.res= x;
               console.log(x) ;
               this.image = this.res.user_photo ;
               console.log(this.image) ;
              }

    )
  }

  Totalprice(vehiculeid , start , end ){
    let result ;
this.reservation.totalprice(vehiculeid , start , end ).subscribe(
  (data)=> {this.result = data   ;
            console.log(this.result)} ),
  (error:any) => console.log(error) ;
  }


  checkValue(event: any)
  { console.log(event);
    this.price=event.target.value;
    if (event.target.id==1) {this.isChecked1=event.target.checked;
      if(this.isChecked1){this.totalprice=this.totalprice+this.price;}
    else{this.totalprice=this.totalprice-this.price;}
    }
    if (event.target.id==2) {this.isChecked2=event.target.checked;
      if(this.isChecked2){this.totalprice=this.totalprice+this.price;}
      else{this.totalprice=this.totalprice-this.price;}}
    if (event.target.id==3) {this.isChecked3=event.target.checked;
      if(this.isChecked3){this.totalprice=this.totalprice+this.price;}
      else{this.totalprice=this.totalprice-this.price;}}
    console.log(this.totalprice);
  }

}
