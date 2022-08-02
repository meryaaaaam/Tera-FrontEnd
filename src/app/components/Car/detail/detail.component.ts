import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TokenService } from 'src/app/shared/auth/token.service';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  rangeDates  : Date[];
  start       : any;
  end         : any;
  id          : any ;
  res         : any ;
  user        : any ;
  s           : any;
  e           : any;

  minDate    : any ;
  minendDate : any ;
  datePipe   : DatePipe = new DatePipe('en-GB');
  startdate  : any ; enddate : any  ; dateend : any ;
  start_date : Date = new Date();
  start_end : Date = new Date();

  constructor(public vs : VehiculeService ,
              private route: ActivatedRoute,
              public token : TokenService ,
              private router: Router ) { }

        ngOnInit() {
          this.route.queryParams.subscribe(params => {
            this.res=params['id'];
            this.s= params['st'];
            this.e= params['se'];

          }) ;

            this.startdate = new Date (this.s) ;
            this.enddate = new Date (this.e) ;

            this.get(this.res);
            this.rangeDates = [ this.startdate, this.enddate];
            console.log(this.rangeDates);

            this.user = this.token.getUser().user.id ;
            this.minDate = new Date();
            //  this.minDate =  this.minDate.toLocaleString('en-GB', { timeZone: 'UTC' }) ;
            console.log(this.rangeDates) ;
            this.minendDate =this.start ;

        }


          onselectstart(date)
          {

              let id ;
              this.route.queryParams.subscribe(params => {
              id=params['id'];});
              //this.startdate = this.datePipe.transform(date[0], 'dd/MM/yyyy H:m:s');
              //this.enddate = this.datePipe.transform(date[1], 'dd/MM/yyyy H:m:s');
              //this.rangeDates = [ this.startdate, this.enddate];
              this.startdate = date[0] ;
              this.enddate = date[1] ;
                 // console.log(date[0]) ;
          }




        get(id)
        {
          let x ;
          this.vs.get(id).subscribe((data)=>{ x=data ;this.res= x; console.log(x) ; })
        }

        reservation()
        {
              //let start_date = this.datePipe.transform(this.startdate, 'yyyy/MM/dd H:m:s');;
            //this.start_date = new Date(this.startdate );
           //  this.enddate = this.enddate.toLocaleString('en-GB', { timeZone: 'UTC' }) ;
           //  console.log(this.start_date); console.log(this.startdate); console.log(this.enddate);
            this.router.navigate(['/car/book'],{queryParams : {'st':this.startdate , 'se':this.enddate , 'searchid': this.res.id }});
        }






        customOptions: OwlOptions = {
        loop: true,
        nav: true,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: false,
        items: 1,
            navText: [
                "<i class='flaticon-left-chevron'></i>",
                "<i class='flaticon-right-chevron'></i>"
            ]
        }



}
