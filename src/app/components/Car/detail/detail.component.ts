import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TokenService } from 'src/app/shared/auth/token.service';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';
import { Review } from 'src/app/models/reviews';
import { UserService } from 'src/app/shared/user/user.service';


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
  minDate     : any ;
  minendDate  : any ;
  datePipe    : DatePipe = new DatePipe('en-GB');
  startdate   : any ; enddate : any  ; dateend : any ;
  start_date  : Date = new Date();
  start_end   : Date = new Date();
  review      : any;
  rate        : number = 0 ;
  message     : string = "";
  constructor(public vs : VehiculeService ,
              private route: ActivatedRoute,
              public token : TokenService ,
              private router: Router ,
              private us : UserService  ) { }

        ngOnInit() {
          this.route.queryParams.subscribe(params => {
            this.res=params['id'];
            this.s= params['st'];
            this.e= params['se'];

          }) ;

            this.startdate = new Date (this.s) ;
            this.enddate = new Date (this.e) ;
            this.getReview(this.res);
            this.get(this.res);
            this.rangeDates = [ this.startdate, this.enddate];
          //  console.log(this.rangeDates);
            this.user = this.token.getUser().user.id ;
            this.minDate = new Date();
         //   console.log(this.rangeDates) ;
            this.minendDate =this.start ;


        }


        onselectstart(date)
          {
            let id ;
            this.route.queryParams.subscribe(params => {
            id=params['id'];});
            this.startdate = date[0] ;
            this.enddate = date[1] ;
          }

        get(id)
        {
         // this.route.queryParams.subscribe(params => {id=params['id'];});

          let x ;  let reviews ;
          this.vs.get(id).subscribe((data)=>{ x=data ;this.res= x; console.log(x) ; });
          console.log(id);
         /* this.us.getAllReveiew(id).subscribe(
            (data)=> {  reviews = data ;
                        this.review = reviews ;
                        console.log(this.review);

                     } );*/
        }

        reservation()
        {
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

      getReview(id)
      {
        this.review ;
        let reviews ;
        console.log(id);
        this.us.getAllReveiew(id).subscribe(
              (data)=> {  reviews = data ;
                          this.review = reviews.response ;
                          console.log(this.review);

                       }
        )

    }

    counter(i: number) {
      let o = Math.ceil(i);
        return new Array(o);
    }
    counterop(i:number)
    {
     let o = Math.ceil(i);
     return new Array(5-o);
    }
    rating (stars : number )
    {
      console.log(stars);
      this.rate = stars ;
    }
    initializeReviewForm ()
    {
      this.message="";
      this.rate = 0 ;
    }

    save_rate()
    { let id ;
      let user =  this.token.getUser()?.user.id ;
      this.route.queryParams.subscribe(params => {  id=params['id'];});
      let data = { "rate"       :  this.rate,
                   "comment"    :  this.message,
                   "customer_id":  user,
                   "vehicule_id":  id,



                  }

      console.log(data) ;

      this.us.add_review(data).subscribe(
        data => {console.log(data);}
      )
      this.getReview(id);
      this.initializeReviewForm();
    }

}
