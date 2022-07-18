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

  rangeDates: Date[];
  start : any;
  end : any;
  id : any ;
  res : any ;
  user : any ;
  s :any;
  e : any;
  //start : any ; end : any ;
  minDate : any ;
  minendDate : any ;
  datePipe : DatePipe = new DatePipe('en-GB');
  startdate : any ; enddate : any  ; dateend : any ;
  constructor(public vs : VehiculeService , private route: ActivatedRoute, public token : TokenService ,
    private router: Router ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.res=params['id'];
      console.log(this.res);
      this.s= params['st'];
      console.log(this.s);
    console.log(typeof this.s);
       this.e= params['se'];
       console.log(this.e);
       if (this.s && this.e)
       {
     let start:any ;
    let end:any ;
      start = this.datePipe.transform(this.s, 'MM/dd/yyyy h:m:s');
      console.log(start);
      console.log(typeof start);
      end = this.datePipe.transform(this.e, 'MM/dd/yyyy h:m:s');
        this.startdate = new Date (start) ;
         this.enddate = new Date (end) ;
    }
    }) ;
    this.get(this.res);
    this.rangeDates = [ this.startdate, this.enddate];


    this.user = this.token.getUser().user.id ;
    this.minDate = new Date();
  //  this.minDate =  this.minDate.toLocaleString('en-GB', { timeZone: 'UTC' }) ;
    console.log(this.rangeDates) ;
    this.minendDate =this.start ;

  }


onselectstart(date)
{
 // this.startdate = this.start.toLocaleString('en-GB', { timeZone: 'UTC' }) ;


 // console.log(this.start.toLocaleString('en-GB', { timeZone: 'UTC' })) ;
 let start = date[0].toLocaleString('en-GB', { timeZone: 'UTC' }) ;
 let end = date[1].toLocaleString('en-GB', { timeZone: 'UTC' }) ;
  console.log(start  ) ;
  console.log(end ) ;
   //this.start = this.date.toLocaleString('en-GB', { timeZone: 'UTC' }) ; this.start = ''+this.start ;
}

onselectend(date)
{
  this.enddate  = this.end.toLocaleString('en-GB', { timeZone: 'UTC' }) ;

  console.log(this.end.toLocaleString('en-GB', { timeZone: 'UTC' }))
  //this.end = this.date.toLocaleString('en-GB', { timeZone: 'UTC' }) ; this.end = ''+this.end ;

}


  get(id)
  {let x ;
    this.vs.get(id).subscribe(

      (data)=>{
                x=data ;
                this.res= x;
                console.log(x) ; }
    )
  }

  reservation()
  {
    //this.router.navigate(['/car/book?st='+this.start +'se='+this.end+'searchid='+this.res.id]);
    this.router.navigate(['/car/book'],{queryParams : {'st':this.startdate , 'se':this.enddate , 'searchid':this.res.id }});
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
